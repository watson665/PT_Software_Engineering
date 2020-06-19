//Section 1
/*The difference between interpolation and concatentation is...
Interpolation is more clear, concise, and easier to read.

DRY stands for "Do Not Repeat Yourself".
We should pay attention to avoid duplicating, save time, make code easier to read.
We have learned tools like: functions, blocks, strings, indentations, labeling and shortcuts like copy/paste.

conts: block scoped, immutable, needs initialized.
let: block scoped, mutable, doesn't need value initialized.
var: global scoped, mutable, doesn't need value initialized.*/

//Section 2
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;
var g = 0

console.log(a<b)
console.log(c>d)
console.log(('name') == 'name')
console.log(a<b<c)
console.log((a==a)<d)
console.log(e!='Kevin')
console.log(48 =='48')
console.log(f!=e)
console.log(g)
var g = b+c
console.log(g)


/* I used the VAR so that I could alter the variable.
Error message: ReferenceError: i is not defined.
Error message: SyntaxError: Invalid left-hand side in assignment.*/

//Section 3
/* The first code is an infinite loop because the loops expression is always true.
The second code is not an infinite loop because it has an expression that stops it from running if the variable is not true.
The expected output is Do not run this loop*/

let letters = "A";
let i = 0;
//Start a whileloop that will run as long as i is less than 20
while (i < 20) {
    //Add an additional A
    letters += "A";
    //Add one A
	i++;
}
//Prints out out two 'A's. I learned that the loop will keep running and stops after i is more than 20. That is why 20 A's appeared.
console.log(letters);

//Section 4
/* For Loop: More concise, used when you don't know how many times you want to loop
While Loop: Used when you know how many times you want to loop
Similarities: allow code to be ran over & over until a stopping condition is met.
The first part of the control panel is: initialization
The second part of the control panel is: condition
The second part of the control panel is: change
*/
for (let i = 0; i < 1000; i++) {
    console.log(i);
}

//Section 5
