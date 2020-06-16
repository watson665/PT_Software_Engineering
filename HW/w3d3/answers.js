//Datatypes Refresher

//For each of the following, write which datatypes you would use to represent the data, and then give a small example of the data structure:

//1. A light switch that can be either on or off.
//Datatype: Boolean
/*Data Structure:*/ const lightSwitch = true;

//2. A user's email address.
//Datatype: String
/*Data Structure:*/ const userEmail = 'deamberwatson@gmail.com';

//3. A spaceship with a hull, laser blasters, tractor beam, and warp drive.
//Datatype: Array
/*Data Structure:*/ const spaceship = ['hull', 'laser blaster', 'tractor beam', 'warp drive'];

//4. A list of student names from our class.
//Datatype: Array 
/*Data Structure:*/ const studentNames = ['DeAmber', 'Kimmy', 'Beth', 'Hector'];

//5. A list of student names from our class, each with a location.
//Datatype: Object & Array
//Data Structure: 
const studentInfo = [
    {name: 'DeAmber', location: 'Columbus, OH'},
    {name: 'Kimmy', location: 'Columbus, OH'},
    {name: 'Beth', location: 'Columbus, OH'},
    {name: 'Hector', location: 'Columbus, OH'}
]

//6. A list of student names from our class, each with a location and each with a list of favorite tv shows.
//Datatype: Object & Array 
//Data Structure:
const studentInfo2 = [
    {name: 'DeAmber', location: 'Columbus, OH', favShows: ['Even Stevens', 'Lizzie McGuire', 'That\'s so Raven']},
    {name: 'Kimmy', location: 'Columbus, OH', favShows: ['The Proud Family', 'Kim Possible', 'Phil of the Future']},
    {name: 'Beth', location: 'Columbus, OH', favShows:['Wizards if Waverly Place', 'The Suite Life of Zack & Cody', 'Hannah Montana']},
    {name: 'Hector', location: 'Columbus, OH', favShows:['American Dragon: Jake Long', 'Cory in the House', 'Phineas and Ferb']}
]


//Take it Easy

// 1. Make an array that holds all of the colors of the rainbow.
const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// 2. Write code that will access "blue" from the rainbow array.
rainbowColors[4];
console.log(rainbowColors[4]);
// 3. Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
const deamber = {
    favFood: ['chicken', 'ice cream', 'pasta'],
    hobby: 'traveling',
    residency: 'Columbus, Ohio',
    favDatatype: 'boolean'
}
//4. Write code that will access your hobby from the object that you just created.
deamber.hobby;
console.log(deamber.hobby);