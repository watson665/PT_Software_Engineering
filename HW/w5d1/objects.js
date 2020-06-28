/////////////////////////////
//////Creating Classes//////
///////////////////////////

//Hamster

class Hamster {
    constructor(owner, name) {
        this.price = 15;
        this.owner = owner;
        this.name = name;
    }
    wheelRun() {
        console.log('squeak squeak');
    } 
    eatFood() {
        console.log('nibble nibble');
    }
    static getPrice() {      
       return this.price 
       //this keeps returning undefined 
    }  
}
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
