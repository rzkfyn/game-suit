const bot = new SuitBot();
const user = new User();

let userScore = 0;
let botScore = 0;

document.addEventListener('click', function(ev) {
    if (!ev.target.classList.contains('pilihansuit')) return;

    const pilihanUser = ev.target.dataset.pilihan;
    const pilihanBot = bot.pilihSuit();
    const intervalId = randomImg();

    ev.target.style.filter = 'grayscale(10)';

    setTimeout(() => {
        clearInterval(intervalId);
        document.querySelector('section.pilihan-bot img').setAttribute('src', `assets/img/${pilihanBot}.png`);
        document.querySelector('section.pilihan-bot img').setAttribute('alt', pilihanBot);
        document.querySelector('section.pilihan-bot img').setAttribute('title', pilihanBot);
        setTimeout(() => {
            user.checkWinStatus(pilihanUser, pilihanBot) == 1 ? alert('Menang!') : user.checkWinStatus(pilihanUser, pilihanBot) == -1 ? alert('Kalah !') : alert('Draw !');
            user.checkWinStatus(pilihanUser, pilihanBot) == 1 ? plusUserScore() : user.checkWinStatus(pilihanUser, pilihanBot) == -1 ? plusBotScore() : void 0;
            ev.target.removeAttribute('style');
        }, 300);
    }, 3000);
});

function randomImg() {
    return setInterval(() => {
        const pilihan = bot.pilihSuit();
        document.querySelector('section.pilihan-bot img').setAttribute('src', `assets/img/${pilihan}.png`);
        document.querySelector('section.pilihan-bot img').setAttribute('alt', pilihan);
        document.querySelector('section.pilihan-bot img').setAttribute('title', pilihan);
    }, 100);
}

function plusUserScore() {
    userScore++;
    console.log(userScore);
    setScore(userScore, document.querySelector('.userscore'));
}

function plusBotScore() {
    botScore++;
    setScore(botScore, document.querySelector('.botscore'));
}

function setScore(score, el) {
    el.innerText = score;
}