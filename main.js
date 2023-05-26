let playerChoice = '';
let computerChoice = '';
let emojis = ['🗿', '📄', '✂️'];
let currentEmojiNumber = 0;
let shuffleInterval = setInterval(shuffleEmojis, 150);
let emojiShuffle = document.querySelector('#emoji-shuffle');
let playerChoiceContainer = document.querySelector('#player-choice');
playerChoiceContainer.addEventListener('click', handlePlayerChoice);

function handlePlayerChoice(event) {
    if(!event.target.classList.contains('emoji')) return;
    playerChoice = event.target.textContent;
    playerChoiceContainer.innerHTML = `<p class="emoji">${playerChoice}</p>`;
    clearInterval(shuffleInterval);
    gameWinner();
}
function shuffleEmojis() {
    computerChoice = emojis[currentEmojiNumber];
    emojiShuffle.textContent = computerChoice;
    if(currentEmojiNumber < emojis.length - 1) {
        currentEmojiNumber++;
    }else {
        currentEmojiNumber = 0;
    }
}
function gameWinner() {
    let gameResElement = document.querySelector('#game-result');
    let gameResMessage = '';
    if (playerChoice === computerChoice) {
        gameResMessage = "It's a tie!";
    } else if (playerChoice === "🪨" && computerChoice === "✂️ ") {
        gameResMessage = "Player wins!";
    } else if (playerChoice === "📄" && computerChoice === "🪨") {
        gameResMessage = "Player wins!";
    } else if (playerChoice === "✂️ " && computerChoice === "📄") {
        gameResMessage = "Player wins!";
    } else {
        gameResMessage = "Computer wins!";
    }
    gameResElement.textContent = gameResMessage;
}

