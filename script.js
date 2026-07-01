// --- LÓGICA DAS ABAS (TABS) ---
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// --- LÓGICA DO QUIZ ---
const quizData = [
    {
        question: "Você recebeu um vídeo de um colega dizendo algo absurdo, mas a voz parece robótica. O que fazer?",
        options: [
            { text: "Compartilhar no grupo da sala imediatamente.", correct: false },
            { text: "Falar com ele no privado e não repassar, pois pode ser uma deepfake de áudio.", correct: true }
        ]
    },
    {
        question: "Qual o melhor método para confirmar se uma notícia sobre a escola é real?",
        options: [
            { text: "Checar os canais oficiais da escola ou perguntar à coordenação.", correct: true },
            { text: "Acreditar no áudio encaminhado várias vezes no WhatsApp.", correct: false }
        ]
    },
    {
        question: "O termo 'Deepfake' refere-se a:",
        options: [
            { text: "Vídeos ou áudios manipulados de forma ultra-realista por Inteligência Artificial.", correct: true },
            { text: "Apenas mensagens de texto falsas enviadas por SMS.", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const questionElement = document.getElementById("quiz-question");
    const optionsContainer = document.getElementById("quiz-options");
    const nextButton = document.getElementById("next-btn");
    
    if(!questionElement || !optionsContainer || !nextButton) return;

    nextButton.style.display = "none";
    optionsContainer.innerHTML = "";
    
    let currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    
    currentQuestion.options.forEach(option => {
        const div = document.createElement("div");
        div.innerText = option.text;
        div.classList.add("quiz-option");
        div.onclick = () => selectOption(div, option.correct);
        optionsContainer.appendChild(div);
    });
}

function selectOption(element, isCorrect) {
    const options = document.querySelectorAll(".quiz-option");
    options.forEach(opt => opt.style.pointerEvents = "none");
    
    if (isCorrect) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
        options.forEach((opt, index) => {
            if(quizData[currentQuestionIndex].options[index].correct) {
                opt.classList.add("correct");
            }
        });
    }
    
    document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz-box").innerHTML = `
            <h4 style="color: var(--success); text-align: center; font-size: 1.3rem;">¡Quiz Concluído!</h4>
            <p style="text-align: center; margin-top: 1rem;">Parabéns por exercitar sua Cidadania Digital. Compartilhe esse conhecimento com seus amigos!</p>
            <button class="quiz-btn" onclick="resetQuiz()">Refazer Quiz</button>
        `;
    }
}

function resetQuiz() {
    currentQuestionIndex = 0;
    document.getElementById("quiz-box").innerHTML = `
        <h3 id="quiz-question" style="font-size: 1.1rem; margin-bottom: 1rem;">Carregando pergunta...</h3>
        <div id="quiz-options"></div>
        <button id="next-btn" class="quiz-btn" style="display: none;" onclick="nextQuestion()">Próxima Pergunta</button>
    `;
    loadQuestion();
}

window.onload = loadQuestion;
