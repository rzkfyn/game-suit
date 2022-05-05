class Suit {
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