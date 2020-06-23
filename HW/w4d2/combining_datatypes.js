///////////////////////////////////
///Section 2 Combining Datatypes///
//////////////////////////////////

//1. Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array. 
const crayonBox = {
    'Color Names':['indigo', 'caribbean green', 'purple heart', 'scarlet']
};
console.log(crayonBox['Color Names'][1]);

//2. Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.
const bottle = {
    cap: {
        material: 'plastic',
        color: 'blue'
    }
}
console.log(bottle.cap.material);

//3. Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.
const receipt = [
    {item: 'scooter', price: 3000},
    {item: 'helmet', price: 100},
    {item: 'gloves', price: 20},
    {item: 'boots', price: 200}
]
console.log(receipt[0].item);

//4. Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.
const apartmentBuilding = [ 'tenant names', ['Tom', 'Mike', 'Sam', 'Kim'], 'building number', 'lenght of lease'];
console.log(apartmentBuilding[1][3]);

//////////////////////////////////////////////////////////////////////////
/////Combine objects, arrays, and functions more than one level deep/////
////////////////////////////////////////////////////////////////////////

//1. Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value).
const knit = () => {
    const obj = {
        item: 'scarf',
        size: '6 ft'
    };
    return obj.item
}
knit();
console.log(knit());


//2 Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). Log one of the elements of that array.
const crayonSelector = () => {
    const crayonBox = {
        'Color Names':['indigo', 'caribbean green', 'purple heart', 'scarlet']
    };
    return crayonBox['Color Names'][0];
}
crayonSelector();
console.log(crayonSelector([0]));

//3. Create a function powerButton that returns a function called options - options should console.log a simple message like select a song. Call that inner function
const powerButton = () => {
    const options = () => {
        console.log('select a song');
    }
     return options();
}
powerButton();
console.log(powerButton());


///////////////////////////////////////////////////////
////Model a Vending Machine Model a vending machine////
//////////////////////////////////////////////////////

/* a vending machine is an object
it has an array of snacks (make 3 snacks)
snacks are objects that have a name and a price
a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
Be able to call vendingMachine.vend() with a valid integer to return a snack */
const vendingMachine = {
    snacks: [
        {name: 'Chocolate Bar', price: 2},
        {name: 'Chips', price: 2.75},
        {name: 'Donuts', price: 1.75}
    ],
    vend: function vend(userInput){
        switch(userInput) {
            case 0:
                return vendingMachine.snacks[0].name;
                break;
            case 1:
                return vendingMachine.snacks[1].name;
                break;
            case 2:
                return vendingMachine.snacks[2].name;
                break;    
            default:
                return 'Invalid item please select a different option.'
        }
    }       
}
console.log(vendingMachine.vend(0));
console.log(vendingMachine.vend(1));
console.log(vendingMachine.vend(2));
console.log(vendingMachine.vend(3));

////////////////
///Callbacks///
//////////////

//Make a function add that takes two arguments (numbers) and sums them together
const addition = (num1, num2) => {
    return num1 + num2;
}
addition();
console.log(addition(5,5));

//Make a function subtract that takes two arguments (numbers) and subtracts them
const subtraction = (num1, num2) => {
    return num1 - num2;
}
subtraction();
console.log(subtraction(5,5));

//Make a function multiply that takes two arguments and multiplies them
const multiplication = (num1, num2) => {
    return num1 * num2;
}
multiplication();
console.log(multiplication(5,5));

//Make a function divide that takes two arguments and divides them
const division = (num1, num2) => {
    return num1 / num2;
}
division();
console.log(division(5,5));

/* Take a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).
Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.
Call calculate 4 times, each time using one of the operation functions you wrote */
const calculate = (num1, num2, operates) => {
    return operates (num1, num2);
}
console.log(calculate(10, 10, addition));
console.log(calculate(10, 10, subtraction));
console.log(calculate(10, 10, multiplication));
console.log(calculate(10, 10, division));

////////////////////////////////////////
/////Function definition placement/////
//////////////////////////////////////

//Clean up this code, so that it works and has function definitions in the correct place

const bar = () => {
    console.log('bar here');
}
bar();

const foo = () => {
    console.log('foo here');
}
foo();

//Error reading: What is meant by the error(s) this produces?
foo();
const foo () => {
    console.log('hi');
}
/* Error 1 is syntax error meaning that the assignment operator (=) is missing when initializing the variable.
Error 2 is a reference error stating that the function foo() can't be invoked before it is initialized */ 

