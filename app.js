let currentQuestionIndex = 0; 
let correctAnswersCount = 0;

function displayQuestion(index) {
    const quizContainer = document.getElementById('quizcontainer');
    const question = Questions[index];

    let html = '<h2>' + question.Question + '</h2>';
    
    for (let key in question.Options) {
        html = html + '<p>' + key + ': ' + question.Options[key] +
                ' <button onclick="selectAnswer(\'' + key + '\', this)">✔️</button></p>';
    }
    
    if (index < Questions.length - 1) {
        html =html + '<button onclick="nextQuestion()">Next</button>';
    } else {
        html  =html + '<button onclick="finishQuiz()">Finish</button>';
    }

    quizContainer.innerHTML = html;
}

function selectAnswer(selectedKey, buttonElement) {
    const question = Questions[currentQuestionIndex];
    const correctAnswer = question.CorrectAnswer;

    if (selectedKey === correctAnswer) {
        buttonElement.parentElement.style.backgroundColor = 'green';
        correctAnswersCount++;
    } else {
        buttonElement.parentElement.style.backgroundColor = 'red';
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex <= Questions.length) {
        displayQuestion(currentQuestionIndex);
    }
}

function finishQuiz() {
    const totalQuestions = Questions.length;
    const resultsContainer = document.getElementById('resultscontainer'); 
    const quizContainer = document.getElementById('quizcontainer'); 

    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'block';

    resultsContainer.innerHTML = '<h1>Quiz Completed!</h1>' +
                                  '<p>You answered ' + correctAnswersCount + 
                                  ' out of ' + totalQuestions + 
                                  ' questions correctly.</p>';
}


displayQuestion(currentQuestionIndex);