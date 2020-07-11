/*
Rate your understanding of the following questions on a scale of 1 - 5. If your understanding is less than or equal to 3, research the answer or ask for help:

1. How do we assign a value to a variable? var, const, let = (insert variable here)
Which line(s) is/are valid?
let a = 0; ----> valid
const b = 1; ----> valid
9 = a; ----> invalid
b = b + 5; ----> invalid

How do we change the value of a variable? write the variable name, followed by = , followed by your new value.
How do we assign an existing variable to a new variable? using the function method
*/

// Strings Activity 1 - Switcharoo
let firstVariable = 'Hello World';
console.log(firstVariable);

firstVariable = 7;
console.log(firstVariable);

secondVariable = firstVariable;
console.log(secondVariable);

secondVariable = 'firstVariable';
console.log(firstVariable);
console.log(secondVariable);
//What is the value of firstVariable? 7

//Strings - Comnbine it
let yourName = 'DeAmber';
console.log('Hello, my name is ' + yourName)


//Booleans Activity
const a = 6;
const b = 100;
const c = -5;
const d = 3000;
const e = 'Jelly Bean';

console.log(a < 100)
console.log(c < d)
console.log('Peanut' === 'Peanut')
console.log(a < b > c)
console.log(a <= a < d)
console.log(e === 'Jelly Bean')
console.log(48 !== '48')
console.log('e' !== 'Eh')

//The Farm
let animal = 'dog';
if (animal === 'cow') {
    console.log('mooooo')
} else {
    console.log('Hey! You\'re not a cow.')
}

//Driver's Ed
let personsAge = 14
if (personsAge >= 16) {
    console.log('Here are the keys!')
} else {
    console.log('Sorry, you\'re too young')
}

//Just Loop It
for(i = 0; i <= 10; i++)
console.log(i)

for(j = 500; j >= 50; j--)
console.log(j)

//Let's get odd
for(k = 1; k <= 100; k++)
if (k % 2 !== 0) {
    console.log(k + ' is an odd number')
}

//Give me Five
for(j = 0; j <= 100; j++)
if (j % 5 === 0) {
    console.log('I found a ' + j + '. High five!')
} else {
    (j % 3 === 0)
    console.log('I found a ' + j + '. Three is a crowd!')
}

//Savings Account
let bank_account = 0;
for (i = 1; i <= 10; i++) {
    bank_account = bank_account + i
    console.log(bank_account)
}

bank_account = 0;
for (i = 1; i <= 100; i++) {
    bank_account = bank_account + i
    finalBalance = bank_account * 2
    console.log(finalBalance)
}
*/
//Fibonacci
//Here are some sequences, can you figure out the next number? Can you figure out the pattern so you could write a loop to generate these?:
/*
//1, 2, 3, 4
for (let i = 1; i <= 4; i++) {
    console.log(i);
  };
//2, 4, 6, 8

for (let i = 2; i <= 8; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
 }         

//5, 10, 15, 20
for (let i = 5; i <= 20; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

//2, 4, 8, 16, 32
for (let i = 2; i <= 32; i*=2) {
        console.log(i)

}

//Here is the challenge: By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
//First just try to console.log the first 10 Fibonacci numbers
function fibEvenSum (n) {
    let fibNumSum = 0;
    let fibCurrent = 0;
    let fibNext = 1;

    for (let i = 1; i <= n; i++) {
        //find the next number
        let fibTotal = fibCurrent + fibNext;
        //set the first number to the next number
        fibCurrent = fibNext;
        //set the second number to total
        fibNext = fibTotal;
        if (fibTotal % 2 === 0) {
            fibNumSum += fibTotal;
        }
    }
    return fibNumSum
}

fibEvenSum(10);
console.log(fibEvenSum(10));

//Checkerboard 
let boardSize = 8;
let board = "";
for (let i = 0; i < boardSize; i++) {
    for ( let j = 0; j < boardsize; j++) {
        if ((i + j) % 2 === 0)
            board += " ";
        else
            board += "#";
    }
    board += "\n";
}

console.log(board);


