const choices = ["rock", "paper", "scissors"];
const winsSpan = document.getElementById("wins");
const lossesSpan = document.getElementById("losses");
const tiesSpan = document.getElementById("ties");
const resultP = document.getElementById("result");
const resetButton = document.getElementById("reset");
let wins = 0;
let losses = 0;
let ties = 0;

document.querySelectorAll(".choice").forEach(button => {
    button.addEventListener("click", () => {
        const userChoice = button.getAttribute("data-choice");
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        const result = getResult(userChoice, computerChoice);

        if (result === "win") {
            wins++;
            resultP.textContent = `🎉 You win! ${userChoice} beats ${computerChoice}.`;
            resultP.style.color = "#28a745";
        } else if (result === "lose") {
            losses++;
            resultP.textContent = `😔 You lose! ${computerChoice} beats ${userChoice}.`;
            resultP.style.color = "#dc3545";
        } else {
            ties++;
            resultP.textContent = `🤝 It's a tie! Both chose ${userChoice}.`;
            resultP.style.color = "#ffc107";
        }

        updateScores();
    });
});

resetButton.addEventListener("click", () => {
    wins = 0;
    losses = 0;
    ties = 0;
    updateScores();
    resultP.textContent = "Make your move!";
    resultP.style.color = "#333";
});

function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) return "tie";
    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "win";
    }
    return "lose";
}

function updateScores() {
    winsSpan.textContent = wins;
    lossesSpan.textContent = losses;
    tiesSpan.textContent = ties;
}
