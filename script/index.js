class Suit{
    constructor() {
        this.options = ['kertas', 'gunting', 'batu'];
        this.winConditions = [
            ['gunting', 'kertas'],
            ['kertas', 'batu'],
            ['batu', 'gunting']
        ];
        this.loseConditions = [
            ['kertas', 'gunting'],
            ['batu', 'kertas'],
            ['gunting', 'batu']
        ];
    }
}

class SuitBot extends Suit {
    constructor() {
        super();
    }

    pilihSuit() {
        return this.options[Math.floor(Math.random() * this.options.length)];
    }
}

class User extends Suit {
    constructor() {
        super();
    }

    checkWinStatus(pilihanUser, pilihanBot) {
        return this.isWin(pilihanUser, pilihanBot) ? 1 : this.isLose(pilihanUser, pilihanBot) ? -1 : 0;
    }

    isWin(pilihanUser, pilihanBot) {
        for (const condition of this.winConditions) {
            if (condition[0] == [pilihanUser, pilihanBot][0] && condition[1] == [pilihanUser, pilihanBot][1]) return true;
        }
        return false;
    }

    isLose(pilihanUser, pilihanBot) {
        for (const condition of this.loseConditions) {
            if (condition[0] == [pilihanUser, pilihanBot][0] && condition[1] == [pilihanUser, pilihanBot][1]) return true;
        }
        return false;
    }
}

const bot = new SuitBot();
const user = new User();

document.addEventListener('click', function(ev) {
    const pilihanUser = ev.target.dataset.pilihan;
    const pilihanBot = bot.pilihSuit();

    if (!ev.target.classList.contains('pilihansuit')) return;
    let intervalId = randomImg();
    setTimeout(() => {
        clearInterval(intervalId);
        document.querySelector('section.pilihan-bot img').setAttribute('src', `assets/img/${pilihanBot}.png`);
        setTimeout(() => {
            user.checkWinStatus(pilihanUser, pilihanBot) == 1 ? alert('Menang!') : user.checkWinStatus(pilihanUser, pilihanBot) == -1 ? alert('Kalah !') : alert('Draw !');
        }, 300);
        
    }, 3000);
});

function randomImg() {
    return setInterval(() => {
        document.querySelector('section.pilihan-bot img').setAttribute('src', `assets/img/${bot.pilihSuit()}.png`);
    }, 100);
}