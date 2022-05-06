class User extends Suit {
    constructor() {
        super();
    }

    checkWinStatus(pilihanUser, pilihanBot) {
        return this.isWin(pilihanUser, pilihanBot) ? 1 : this.isLose(pilihanUser, pilihanBot) ? -1 : 0;
    }

    isWin(pilihanUser, pilihanBot) {
        for (const condition of this.winConditions) {
            if (condition[0] == pilihanUser && condition[1] == pilihanBot) return true;
        }
        return false;
    }

    isLose(pilihanUser, pilihanBot) {
        for (const condition of this.loseConditions) {
            if (condition[0] == pilihanUser && condition[1] == pilihanBot) return true;
        }
        return false;
    }
}