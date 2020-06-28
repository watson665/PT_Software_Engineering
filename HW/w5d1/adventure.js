class Hero {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.weapons = {sprinkleSpray: 5, sugarShock: 10};
        this.catchPhrase = ['I\'m fresher than day old pizza', 'You can\'t count my calories'];
    }
    talkSass() {
        let phrases = this.catchPhrase;
        let random = Math.random();
        let totalPhrase = this.catchPhrase.length;
        let randomIndex = Math.floor(random * totalPhrase);
        let randomPhrase = phrases[randomIndex];
        return randomPhrase;
    }
    announceHealth() {
        return this.health;
    }  
    fight() {
        return 'I\'m ready to rumble.'
    }
}

const Dougie = new Hero('Dougie');
