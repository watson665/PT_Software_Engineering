////////////////////////
/////Callbacks Lab/////
//////////////////////

//1. Create a function that takes a parameter and logs it
function greeting(param1) {
    //console.log(param1);
    console.log(param1());
}
//2. Create a function that takes a parameter and logs it
function sayHi() {
    return'hi';
}
/*
//3. Invoke the first function, passing in the second function as a parameter
//4. You should see a function reference being logged
//greeting(sayHi);
//5. Alter the first function so that it invokes its parameter
//6. If you did these steps correctly, you should get a log of 'hi'

//See if you can guess what this will log:
// My guess hi 3 times

const foo = (param, param2) => {
    param(param2);
}

const bar = (param) => {
    console.log(param);
}

foo(bar, 'hi');
//Run the code and see what happens.
//hi 1 time appaared.

/*
//See if you can guess what this will log:
//My guess hi, hello.

const foo = (param, param2) => {
    param(param2, 'hello');
}

const bar = (param, param2) => {
    console.log(param2);
}

foo(bar, 'hi');
//Run the code and see what happens.
// hello appeared.

//Add this function

const baz = (param) => {
    console.log(param.toUpperCase());
}

//and now predict what you'll get when you run this:
//My guess: hello will be uppercase
//foo(baz, 'hello')

//HELLO appeared

*/

///////////////////////////////
///////Electric Mixer/////////
/////////////////////////////


//1. Write a function electricMixer that takes one parameter named attachment. The electricMixer function should console log "This mixer is now: " plus the return value of the attachment.
const electricMixer = function electricMixer(attachment) {
    console.log(`This mixer is now: ${attachment()}`);
};

//2. Invoke electricMixer using an anonymous function as the argument. The return of the anonymous function should be a string that says: "spiralizing".
const spiralizer = function electricMixer() {
    return 'spiralizing';
};

//3. The callback function doesn't need to be anymous, we can give it a name and pass it as a reference:
//electricMixer(spiralizer);

const slicerDicer = function slicerDicer() {
    return 'slicin and dicin';
};
//electricMixer(slicerDicer);

//5. Write an electricMixer function and write a new attachment for the mixer. Get your electric mixer to use the attachment.
const grinder = function grinder() {
    return 'grinding';
};
//electricMixer(grinder);

/////////////////////////////////////
/////setInterval and setTimeout/////
///////////////////////////////////

//Use SetInterval to display a number that increases by 1 each second (it's a clock!)
/*
let i = 0;
let clock = setInterval(function(){
   if(i === 10){
      clearInterval(clock);
   } 
   console.log(i);
   i++;
}, 1000);
*/
//1. Food for thought: Give a real world example of when you would use setTimeout or setInterval
//When using a timer or stopwatch

//1. Create a function called wordReverse that reverses a string.
const wordReverse = function wordReverse(str) {
    let reversed = "";
    for (let i = str.length - 1; i >=0; i--) {
        reversed += str[i];
    }
    return reversed;
}

wordReverse('hello');
//console.log(wordReverse('hello'));

//2. Create a function called toUpperCase that capitalizes every letter in a string.
const toUpperCase = function toUpperCase(str) {
    return str.toUpperCase();
}

toUpperCase('hello');
//console.log(toUpperCase('hello'));

//3. Write a function, called repMaster, that accepts two arguments, input and a function. Input should be able to be used with the function. The function used as an argument must return a string. repMaster should take the result of the string, passed as an argument to the argument function, and return this result with ' proves that I am the rep MASTER!' concatenated to it.


  