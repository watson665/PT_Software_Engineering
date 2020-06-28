/////////////////////////////
//////Creating Classes//////
///////////////////////////

//Hamster

class Hamster {
    constructor(owner, name, price) {
        this.owner = owner;
        this.name = name;
        this.price = 15;
    }
    wheelRun() {
        console.log('squeak squeak');
    } 
    eatFood() {
        console.log('nibble nibble');
    }
    static getPrice() {
        return this.price;
    }  
};

//Person

class Person {
    constructor(name, age, height, weight, mood, hamsters, bankAccount) {
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }
    getName() {
            return this.name;
    }
    getAge() {
            return this.age;
    }
    getWeight() {
            return this.weight;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}. Nice to Meet you!`);
    }
   eat() {
        //increase weight & mood by 1
        this.weight++;
        this.mood++;

    }
    exercise() { 
        //decrease weight by 1
        this.weight--;
    }
    ageUp() {
        //increase age, height, weight 
        this.age++;
        this.height++; 
        this.weight++;
        //decrease mood
        this.mood-=1;
        //increase bank account by 10 
        this.bankAccount+=10;

    }
    buyHamster(hamster) {
        //push hamster object to hamster array
        this.hamsters.push(hamster)
        //increase mood + 10
        this.mood+=10;
        //decrease bankAccount by value of hamster 
        this.bankAccount - Hamster.getPrice()
        return this.bankAccount
        //hint: use getPrice 
        //I could not figure out how to use the getPrice method in my code
    }
}


///////////////////////////////
///Story with Person Class////
/////////////////////////////

//1. Instantiate a new Person named Timmy
const Timmy = new Person ('Timmy',);
console.log(Timmy);
//2. Age Timmy five years
for(let i = 1; i <= 5; i++) {
    Timmy.ageUp();
}
console.log(Timmy);
//3. At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
for(let i = 1; i <= 5; i++) {
    Timmy.eat();
}
console.log(Timmy);
//4. Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times.
for(let i = 1; i <= 5; i++) {
    Timmy.exercise();
}
console.log(Timmy);
//5. Age Timmy 9 years
for(let i = 1; i <= 9; i++) {
    Timmy.ageUp();
}
console.log(Timmy);
//6. Create a hamster named "Gus" & 7. Set Gus's owner to the string "Timmy"
const Gus = new Hamster('Timmy','Gus');
console.log(Gus);
//8. Have Timmy "buy" Gus
Timmy.buyHamster(Gus);
console.log(Timmy);
//I can't get the cost of the hamster to subtract from the bank balance 
//9. Age Timmy 15 years
for(let i = 1; i <= 15; i++) {
    Timmy.ageUp();
}
//10. Have Timmy eat twice
for(let i = 1; i <= 2; i++) {
    Timmy.eat();
}
