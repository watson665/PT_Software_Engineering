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