about_me_area = "<h2 class='title-area'>ABOUT ME</h2><p>" + about_me + "</p>";
education_area = lists("EDUCATION", education, education_style);
experience_area = lists("EXPERIENCES", experience, experience_style);
project_area = lists("PROJECTS", project, project_style);

skills_area = lists("SKILLS", skills, leftSide_style);
language_area = lists("LANGUAGES", language, leftSide_style);
interests_area = lists("INTERESTS", interests, interests_style);

document.getElementById("skills").innerHTML = skills_area;
document.getElementById("languages").innerHTML = language_area;
document.getElementById("interests").innerHTML = interests_area;

document.getElementById("aboutMe").innerHTML = about_me_area;
document.getElementById("education").innerHTML = education_area;
document.getElementById("experience").innerHTML = experience_area;
document.getElementById("project").innerHTML = project_area;

function lists(lists_name, name, list_style) {
  list = [];
  for (i = 0; i < name.length; i++) {
    list[i] = list_style(i, name);
  }
  list_reverse = list.reverse();
  result =
    "<h2 class='title-area'>" + lists_name + "</h2>" + list_reverse.join("");
  return result;
}

//style
function leftSide_style(i, name) {
  block = [];
  for (j = 0; j < name[i][1]; j++) {
    block[j] = "<div class='block-skill'></div>";
  }
  result =
    "<div><div class='skills-child'><div class='skill'>" +
    name[i][0] +
    "</div>" +
    "<div class='block-skills'>" +
    block.join("") +
    "</div></div></div>";
  return result;
}
function interests_style(i, interests) {
  result =
    "<div><div class='skills-child'><div>" +
    interests[i] +
    "</div><div></div></div></div>";
  return result;
}

function education_style(i, edu) {
  result = "<div><b>[" + edu[i][0] + "]</b> " + edu[i][1] + " </div>";
  return result;
}
function experience_style(i, experience) {
  result =
    "<div class='children'><b>" +
    experience[i][0] +
    "</b><div> " +
    experience[i][1] +
    " </div></div>";
  return result;
}
function project_style(i, project) {
  result =
    "<div class='children'><b>[" +
    project[i][0] +
    "]</b><div> " +
    project[i][1] +
    " </div></div>";
  return result;
}
