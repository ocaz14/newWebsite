let shuffledQuestions = [];
let currentQuestion = 0;
let score = 0;
let correctCountry = null;
let timeLeft = 10;
let timer;
let startTime;

const flagImage = document.getElementById("flagImage");
const optionsContainer = document.getElementById("options");
const resultText = document.getElementById("result");
const timerDisplay = document.getElementById("timer");
const scoreDisplay = document.getElementById("score");
const questionDisplay = document.getElementById("question");
const finalDisplay = document.getElementById("final");

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function startGame() {
  shuffledQuestions = shuffle([...countries]).slice(0, 20);
  score = 0;
  currentQuestion = 0;
  loadQuestion();
}

function startTimer() {
  timeLeft = 10;
  timerDisplay.textContent = timeLeft;
  clearInterval(timer);
  startTime = Date.now();
  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timer);
      showResult(false);
    }
  }, 1000);
}

function loadQuestion() {
  if (currentQuestion >= 20) {
    endGame();
    return;
  }

  resultText.textContent = "";
  correctCountry = shuffledQuestions[currentQuestion];
  const choices = shuffle([
    correctCountry,
    ...shuffle(countries.filter(c => c.name !== correctCountry.name)).slice(0, 3)
  ]);

  flagImage.src = `https://flagcdn.com/w320/${correctCountry.code}.png`;
  optionsContainer.innerHTML = "";
  choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice.name;
    btn.onclick = () => checkAnswer(choice.name);
    optionsContainer.appendChild(btn);
  });

  document.getElementById("question").textContent = currentQuestion + 1;
  scoreDisplay.textContent = score;
  startTimer();
}

function checkAnswer(answer) {
  clearInterval(timer);
  const isCorrect = answer === correctCountry.name;
  showResult(isCorrect);
}

function showResult(correct) {
  const timeTaken = Math.min(10, Math.floor((Date.now() - startTime) / 1000));
  if (correct) {
    const points = 10 - timeTaken;
    score += points;
    resultText.textContent = `✅ Correct! +${points} pts`;
    resultText.className = "info correct";
  } else {
    resultText.textContent = `❌ Wrong! It was ${correctCountry.name}`;
    resultText.className = "info wrong";
  }
  scoreDisplay.textContent = score;
  setTimeout(() => {
    currentQuestion++;
    loadQuestion();
  }, 1500);
}

function endGame() {
  flagImage.style.display = "none";
  optionsContainer.innerHTML = "";
  document.querySelector(".info").style.display = "none";
  document.querySelector(".score-board").style.display = "none";
  finalDisplay.style.display = "block";
  finalDisplay.innerHTML = `🎉 Game Over!<br>Your Final Score: <strong>${score}</strong> out of 200`;
}

startGame();