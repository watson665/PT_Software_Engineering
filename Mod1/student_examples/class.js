class Person {
    constructor(name, age, eyes, hair, lovesCats = true, lovesDogs) {
        this.legs = 2;
        this.arms = 2;
        this.name = name;
        this.age = age;
        this.eyes = eyes;
        this.hair = hair;
        this.lovesCats = lovesCats;
        this.lovesDogs = lovesDogs || true;
    }
    greet(otherPerson) {
        console.log(`Hi ${otherPerson}!`);
    }
    classyGreeting (otherClassyPerson) {
        console.log(`Greetings ${otherClassyPerson.name}!`)
    }
    walk(transportation) {
        console.log(`I hate when my ${transportation} is in the shop.`);
    }
    setHair (hairColor) {
        this.hair = hairColor;
    }
};
class SuperHero extends Person {
    fly() {
        console.log('Up, up, and away!');
    }
    greet (otherPerson) {
        console.log(`Greetings Earth! I mean ${otherPerson}`);
    }
    walk() {
        super.walk();
        this.fly();
    }
}



const me = new Person('DeAmber', 27, 'brown', 'brown');
const you = new Person('Cidney', 16, 'light brown', 'blue');
//console.log(me);
//me.greet('Bob');
//me.walk('scooter');
me.setHair = 'purple';
//console.log(me);
//me.classyGreeting(you);
//you.classyGreeting(me);
//console.log(you);
//you.greet('me');
//you.walk('car');
//console.log(typeof me, typeof you);
const superman = new SuperHero('Clark Kent', 30, 'blue', 'black');
//console.log(superman);
//superman.walk('porsche');
//superman.fly();
//superman.greet('DeAmber');
superman.walk(supercorvette);
