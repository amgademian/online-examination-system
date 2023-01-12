localStorage.setItem("time", 10);
function answer(id, body) {
  this.ID = id;
  this.Body = body;
}
function question(id, body, right, choices) {
  this.ID = id;
  this.Body = body;
  this.RightAnwser = right;
  this.Choices = choices;
}

var answers = [
  new answer(0, "<css>"),
  new answer(1, "<!DOCTYPE html>"),
  new answer(2, "<script>"),
  new answer(3, "<style>"),
  new answer(4, "tag"),
  new answer(5, "class"),
  new answer(6, "id"),
  new answer(7, "both class and tag"),
  new answer(8, "css"),
  new answer(9, "bootstrap"),
  new answer(10, "CSS"),
  new answer(11, "Ajax"),
  new answer(12, "django"),
  new answer(13, "<link rel=”stylesheet” href=”style.css” />"),
  new answer(14, "br"),
  new answer(15, "id"),
  new answer(16, "tag"),
  new answer(17, "id"),
  new answer(18, "linear-gradient()"),
  new answer(19, "both class and tag"),
  new answer(20, "<script>"),
  new answer(20, "font-weight: bold"),
  new answer(22, "<class>"),
  new answer(23, "font-style"),
  new answer(24, "text-decoration: bold"),
  new answer(25, "font-weight: bold"),
  new answer(26, "font-style: bold"),
  new answer(27, "text-align: bold"),
  new answer(28, "style"),
  new answer(29, "-webkit"),
  new answer(30, "font-style"),
  new answer(31, "@font-face"),
  new answer(32, "-chrome"),
  new answer(33, "-webkit"),
  new answer(34, "border-image-source"),
  new answer(35, 2),
  new answer(36, 8),
  new answer(37, 16),
  new answer(38, "abstract"),
  new answer(39, "border-width"),
  new answer(40, "function"),
];

var questions = [
  new question(
    1,
    "Which of the following tag is used to embed css in html page?",
    "<style>",
    [answers[0], answers[1], answers[2], answers[3]]
  ),
  new question(
    2,
    "Which of the following CSS selectors are used to specify a group of elements?",
    "class",
    [answers[4], answers[5], answers[6], answers[7]]
  ),
  new question(
    3,
    "Which of the following has introduced text, list, box, margin, border, color, and background properties?",
    "css",
    [answers[8], answers[9], answers[10], answers[11]]
  ),
  new question(
    4,
    "Which of the following CSS framework is used to create a responsive design?",
    "bootstrap",
    [answers[8], answers[9], answers[10], answers[11]]
  ),
  new question(
    5,
    "Which of the following CSS selector is used to specify a rule to bind a particular unique element?",
    "id",
    [answers[12], answers[13], answers[14], answers[15]]
  ),
  new question(
    6,
    "Which of the following type of HTML tag is used to define an internal style sheet?",
    "<style>",
    [answers[16], answers[17], answers[18], answers[15]]
  ),
  new question(
    7,
    "Which of the following CSS property is used to make the text bold?",
    "font-weight: bold",
    [answers[19], answers[20], answers[21], answers[22]]
  ),
  new question(
    8,
    "Which of the following CSS style property is used to specify an italic text?",
    "font-style",
    [answers[23], answers[24], answers[25], answers[22]]
  ),
  new question(
    9,
    "Which of the following are the CSS Extension Prefixes for Webkit?",
    "-webkit",
    [answers[26], answers[27], answers[28], answers[29]]
  ),
  new question(
    10,
    " Which of the following is the correct syntax to link an external style sheet in the HTML file?",
    "<link rel=”stylesheet” href=”style.css” />",
    [answers[12], answers[13], answers[14], answers[15]]
  ),
  new question(
    11,
    "Which of the following is the first CSS specification to become an official W3C Recommendation?",
    "CSS level 1",
    [answers[16], answers[17], answers[18], answers[22]]
  ),
  new question(
    12,
    "Which of the following function defines a linear gradient as a CSS image?",
    "linear-gradient()",
    [answers[30], answers[31], answers[32], answers[33]]
  ),
  new question(
    13,
    "Which of the following CSS property can be used to set the image as a border instead of the border style?",
    "border-image-source",
    [answers[34], answers[35], answers[36], answers[37]]
  ),
  new question(
    14,
    "Which of the following CSS property defines the different properties of all four sides of an elements border in a single declaration?",
    "border-width",
    [answers[38], answers[39], answers[40], answers[22]]
  ),
];

questions = questions.sort(() => Math.random() - 0.5);

var questionBody = document.querySelector(".question").firstElementChild;
var divOfAnswers = document.querySelector(".answers");
var markedQuestion = document.querySelector(".marked");
var questionNum = document.querySelector("#num");
var next = document.querySelector("#next");
var prev = document.querySelector("#prev");
var testAnswers = [];
var checkedAnswer = [];
var currentIndex = 0;
var testQuestionNum = 9;
var radioId = 0;

function showQuestion() {
  questionBody.textContent = questions[currentIndex].Body;
  questionNum.textContent = currentIndex + 1;
  if (!divOfAnswers.children[currentIndex]) {
    var answersDiv = document.createElement("div");
    answersDiv.setAttribute("class", "answersBody");
    for (var i = 0; i < 4; i++) {
      var answerBody = document.createElement("div");
      var choicesArr = document.createElement("label");
      choicesArr.textContent = questions[currentIndex].Choices[i].Body;
      var choose = document.createElement("input");
      choose.setAttribute("type", "radio");
      choose.setAttribute("name", "answer");
      choose.setAttribute("value", questions[currentIndex].Choices[i].Body);
      choose.id = radioId;
      choicesArr.setAttribute("for", radioId);
      answerBody.append(choicesArr);
      answerBody.append(choose);
      answersDiv.append(answerBody);
      radioId++;

      choose.addEventListener("click", function () {
        testAnswers[currentIndex] = this.value;
        checkedAnswer[currentIndex] = this.id % 4;
      });
    }
    divOfAnswers.append(answersDiv);
  }
  if (currentIndex == testQuestionNum) {
    next.disabled = true;
    next.style.opacity = 0.5;
    document.querySelector("#submit").style.display = "initial";
  } else if (currentIndex == 0) {
    prev.disabled = true;
    prev.style.opacity = 0.5;
  } else {
    next.disabled = false;
    next.style.opacity = 1;
    prev.disabled = false;
    prev.style.opacity = 1;
  }
}

showQuestion();

function Next() {
  if (currentIndex != testQuestionNum) {
    divOfAnswers.children[currentIndex].style.display = "none";
    currentIndex++;
    if (divOfAnswers.children[currentIndex]) {
      divOfAnswers.children[currentIndex].style.display = "block";
      if (checkedAnswer[currentIndex] != undefined) {
        divOfAnswers.children[currentIndex].children[
          checkedAnswer[currentIndex]
        ].children[1].checked = true;
      }
    }
    showQuestion();
  }
}
function Prev() {
  if (currentIndex != 0) {
    divOfAnswers.children[currentIndex].style.display = "none";
    currentIndex--;
    divOfAnswers.children[currentIndex].style.display = "block";
    if (checkedAnswer[currentIndex] != undefined) {
      divOfAnswers.children[currentIndex].children[
        checkedAnswer[currentIndex]
      ].children[1].checked = true;
    }
    showQuestion();
  }
}

function result() {
  var correct = 0;
  for (var i = 0; i < testAnswers.length; i++) {
    if (testAnswers[i] == questions[i].RightAnwser) {
      correct++;
    }
  }
  localStorage.setItem("result", correct);
  location.replace("result.html");
}

var markedQuestions = [];
var markedbtns = document.querySelector(".markedbtn");
var mark = document.querySelector(".mark");
var unmark = document.querySelector(".unmark");

function MarkQuestion() {
  if (markedQuestions[currentIndex] == undefined) {
    markedQuestions[currentIndex] = currentIndex;
    var btn = document.createElement("div");
    var bodyBtn = document.createElement("span");
    var close = document.createElement("i");
    close.id = currentIndex;
    console.log(close.id);
    bodyBtn.id = currentIndex;
    close.setAttribute("class", "fas fa-times-circle");
    close.addEventListener("click", function () {
      markedQuestions[this.id] = undefined;
      this.parentElement.remove();
    });
    bodyBtn.addEventListener("click", function () {
      divOfAnswers.children[currentIndex].style.display = "none";
      if (this.id != 0) {
        currentIndex = Number(this.id) - 1;
        Next();
      } else {
        if (divOfAnswers.children[1] != undefined) {
          currentIndex = 1;
          Prev();
        } else {
          divOfAnswers.children[currentIndex].style.display = "block";
        }
      }
    });
    if (innerWidth > 425) {
      bodyBtn.textContent = "Marked Question " + Number(currentIndex + 1);
    } else {
      bodyBtn.textContent = "Q" + Number(currentIndex + 1);
    }
    btn.append(bodyBtn);
    btn.append(close);
    markedbtns.append(btn);
  }
}

var passed = document.querySelector(".passed");
var remain = document.querySelector(".remain");
var pWidth = 0;
var rWidth = 100;
var minutes = 9;
var second = 59;
var timeLimit = document.querySelector(".timeLimit");

function time() {
  passed.style.backgroundColor = "#0f2032";
  passed.style.width = pWidth + "%";
  remain.style.width = rWidth + "%";
  if (second > 9) {
    timeLimit.textContent = minutes + ":" + second;
  } else {
    timeLimit.textContent = minutes + ":0" + second;
  }
  second--;
  if (second == 0) {
    second = 59;
    minutes--;
  }
  if (minutes == 0) {
    localStorage.time = 0;
    result();
  }
  pWidth += 1 / 6;
  rWidth -= 1 / 6;
}

setInterval(time, 1000);
