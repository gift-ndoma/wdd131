function checkAnswer(answer) {
    let result = document.getElementById("quiz-result")
    if (answer === 'B') {
        result.textContent = "✅ Correct! Active recall is the best way to retain information.";
        result.style.color = "green";
    } else {
        result.textContent = "❌ Wrong! Try again.";
        result.style.color = "red";
    }
}

const toggleButton = document.getElementById("toggle-mode");

if (toggleButton) {
    toggleButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');

        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('dark-mode', isDark)
    })
}

if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
};

const studyTips = [
    {
        tipName: "Pomodoro Technique ⏳",
        para: "Study for 25 mins, take a 5-min break. Boost your productivity!"
    },

    {
        tipName: "Active Recall 🧠",
        para: "Test yourself instead of just reading – it improves memory."
    },

    {
        tipName: "Mind Mapping 🗺️",
        para: "Visualize concepts and make connections easily."
    }
];

function displayTips(studyTips) {
    const tipContainer = document.getElementById("featured-tips");
    studyTips.forEach((tip) => {
        let card = document.createElement("div")
        card.classList.add("tip-card")
        card.innerHTML = `
        <h3>${tip.tipName}</h3>
        <p>${tip.para}</p>
        `
        tipContainer.appendChild(card)
    });
}

displayTips(studyTips);

const form = document.getElementById('myForm');
const message = document.getElementById('success-message');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    message.style.display = 'block';
    form.reset();
    form.querySelector('input').focus(); 
});
