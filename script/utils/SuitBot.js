class SuitBot extends Suit {
    constructor() {
        super();
    }

    pilihSuit() {
        return this.options[Math.floor(Math.random() * this.options.length)];
    }
}