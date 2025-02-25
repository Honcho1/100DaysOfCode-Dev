// script.js

document.addEventListener("DOMContentLoaded", () => {
  const quizData = [
    {
      question: "Which planet is known as the 'Red Planet'?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question:
        "What programming language is primarily used for styling web pages?",
      options: ["JavaScript", "Python", "CSS", "HTML"],
      answer: "CSS",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: [
        "Vincent van Gogh",
        "Pablo Picasso",
        "Michelangelo",
        "Leonardo da Vinci",
      ],
      answer: "Leonardo da Vinci",
    },
    {
      question: "Which of these is NOT a JavaScript data type?",
      options: ["Boolean", "Integer", "String", "Object"],
      answer: "Integer",
    },
    {
      question: "What does the acronym DOM stand for in web development?",
      options: [
        "Document Object Model",
        "Digital Ordinance Management",
        "Data Object Manipulation",
        "Document Orientation Method",
      ],
      answer: "Document Object Model",
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = 60;
  let timerInterval;

  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const nextButton = document.getElementById("next-button");
  const scoreContainer = document.getElementById("score-container");
  const finalScoreElement = document.getElementById("final-score");
  const progressBar = document.getElementById("progress-bar");
  const timeLeftElement = document.getElementById("time-left");
  const restartButton = document.getElementById("restart-button");

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function loadQuestion() {
    shuffleArray(quizData);
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => selectOption(option, currentQuestion.answer);
      optionsElement.appendChild(button);
    });
    progressBar.style.width = `${
      ((currentQuestionIndex + 1) / quizData.length) * 100
    }%`;
  }

  function selectOption(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
      score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      endQuiz();
    }
  }

  function endQuiz() {
    questionElement.style.display = "none";
    optionsElement.style.display = "none";
    nextButton.style.display = "none";
    scoreContainer.style.display = "block";
    finalScoreElement.textContent = score;
    clearInterval(timerInterval);
    saveHighScore();
  }

  function startTimer() {
    timerInterval = setInterval(() => {
      timeLeft--;
      timeLeftElement.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        endQuiz();
      }
    }, 1000);
  }

  function saveHighScore() {
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.push({ score: score, date: new Date().toISOString() });
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);
    localStorage.setItem("highScores", JSON.stringify(highScores));
  }

  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 60;
    clearInterval(timerInterval);
    startTimer();
    loadQuestion();
    scoreContainer.style.display = "none";
    questionElement.style.display = "block";
    optionsElement.style.display = "block";
    nextButton.style.display = "block";
  }

  loadQuestion();
  startTimer();
  restartButton.onclick = restartQuiz;
});
