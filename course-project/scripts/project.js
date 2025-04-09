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
}

