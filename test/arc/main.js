const STORAGE_KEY = 'atomic_habits_v9';
const habitInput = document.getElementById('habit-input');
const habitTime = document.getElementById('habit-time');
const dayToggle = document.getElementById('day-toggle');
const habitList = document.getElementById('habit-list');
const darkToggle = document.getElementById('darkToggle');

let habits = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
let selectedDays = [];
let calendarVisible = {};
let editingId = null;

if (localStorage.getItem('dark_mode') === 'on') {
  document.body.classList.add('dark');
  darkToggle.innerText = '🌞';
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(habits));
}

function toggleDarkMode() {
  const isDark = document.body.classList.toggle('dark');
  darkToggle.innerText = isDark ? '🌞' : '🌙';
  localStorage.setItem('dark_mode', isDark ? 'on' : 'off');
}

function renderDayButtons() {
  dayToggle.innerHTML = '';
  ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].forEach((label, index) => {
    const btn = document.createElement('div');
    btn.className = 'day-btn';
    btn.innerText = label;
    if (selectedDays.includes(index)) btn.classList.add('active');
    btn.onclick = () => {
      if (selectedDays.includes(index)) {
        selectedDays = selectedDays.filter(d => d !== index);
      } else {
        selectedDays.push(index);
      }
      renderDayButtons();
    };
    dayToggle.appendChild(btn);
  });
}

function addHabit() {
  const name = habitInput.value.trim();
  const time = habitTime.value;
  if (!name || !time || selectedDays.length === 0) return alert("Fill all fields");

  if (editingId) {
    habits = habits.map(h => h.id === editingId ? { ...h, name, time, days: [...selectedDays] } : h);
    editingId = null;
  } else {
    habits.push({ id: Date.now(), name, time, days: [...selectedDays], log: [] });
  }

  habitInput.value = '';
  habitTime.value = '';
  selectedDays = [];
  renderDayButtons();
  save();
  render();
}

function editHabit(id) {
  const habit = habits.find(h => h.id === id);
  habitInput.value = habit.name;
  habitTime.value = habit.time;
  selectedDays = [...habit.days];
  editingId = id;
  renderDayButtons();
  habitInput.focus();
}

function toggleCalendar(id) {
  calendarVisible[id] = !calendarVisible[id];
  render();
}

function toggleHabitToday(id) {
  const today = new Date().toISOString().split('T')[0];
  habits = habits.map(h => {
    if (h.id === id) {
      const idx = h.log.indexOf(today);
      if (idx === -1) h.log.push(today);
      else h.log.splice(idx, 1);
    }
    return h;
  });
  save();
  render();
}

function deleteHabit(id) {
  if (!confirm("Delete this habit?")) return;
  habits = habits.filter(h => h.id !== id);
  save();
  render();
}

function render() {
  habitList.innerHTML = '';
  const todayStr = new Date().toISOString().split('T')[0];
  const todayDay = new Date().getDay();

  habits.forEach(habit => {
    const isToday = habit.days.includes(todayDay);
    const div = document.createElement('div');
    div.className = 'habit' + (isToday ? ' today' : '');
    const checked = habit.log.includes(todayStr);
    const streak = calculateStreak(habit.log);

    const past30 = Array.from({length: 30}, (_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - (29 - i));
      return d.toISOString().split('T')[0];
    });

    const calendar = document.createElement('div');
    calendar.className = 'calendar';
    calendar.style.display = calendarVisible[habit.id] ? 'grid' : 'none';

    past30.forEach(date => {
      const day = document.createElement('div');
      day.className = 'day';
      if (habit.log.includes(date)) day.classList.add('done-day');
      day.innerText = new Date(date).getDate();
      calendar.appendChild(day);
    });

    const toggleLink = document.createElement('div');
    toggleLink.className = 'calendar-toggle';
    toggleLink.innerText = calendarVisible[habit.id] ? 'Hide Calendar 🔽' : 'Show Calendar 🔼';
    toggleLink.onclick = () => toggleCalendar(habit.id);

    div.innerHTML = `
      <div class="habit-header">
        <div>
          <div class="habit-name">${habit.name}</div>
          <div>🕒 ${habit.time} | Days: ${habit.days.map(d => ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][d]).join(', ')} | 🔥 ${streak}</div>
        </div>
        <div>
          <button onclick="toggleHabitToday(${habit.id})">${checked ? 'Undo' : 'Done'}</button>
          <button onclick="editHabit(${habit.id})">✏️</button>
          <button onclick="deleteHabit(${habit.id})">🗑️</button>
        </div>
      </div>
    `;
    div.appendChild(toggleLink);
    div.appendChild(calendar);
    habitList.appendChild(div);
  });
}

function calculateStreak(log) {
  const today = new Date();
  let streak = 0;
  for (let i = 0; i < 100; i++) {
    const d = new Date();
    d.setDate(today.getDate() - i);
    const dStr = d.toISOString().split('T')[0];
    if (log.includes(dStr)) streak++;
    else break;
  }
  return streak;
}

function checkReminders() {
  const now = new Date();
  const currentTime = now.toTimeString().slice(0,5);
  const todayDay = now.getDay();
  habits.forEach(habit => {
    if (habit.days.includes(todayDay) && habit.time === currentTime) {
      if (Notification.permission === 'granted') {
        new Notification("⏰ Reminder", { body: habit.name });
      }
    }
  });
}

function exportHabits() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(habits));
  const dl = document.createElement('a');
  dl.setAttribute("href", dataStr);
  dl.setAttribute("download", "habits_backup.json");
  dl.click();
}

function importHabits(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      habits = JSON.parse(reader.result);
      save();
      render();
    } catch (e) {
      alert("Invalid file format");
    }
  };
  reader.readAsText(file);
}

if ("Notification" in window && Notification.permission !== "granted") {
  Notification.requestPermission();
}

setInterval(checkReminders, 60000);
renderDayButtons();
render();
