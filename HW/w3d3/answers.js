//Datatypes Refresher
//For each of the following, write which datatypes you would use to represent the data, and then give a small example of the data structure:

//1. A light switch that can be either on or off.
//Datatype: Boolean
/*Data Structure:*/ const lightSwitch = true;

//2. A user's email address.
//Datatype: String
/*Data Structure:*/ const userEmail = 'deamberwatson@gmail.com';

//3. A spaceship with a hull, laser blasters, tractor beam, and warp drive.
//Datatype: Array & String
/*Data Structure:*/ const spaceship = ['hull', 'laser blaster', 'tractor beam', 'warp drive'];

//4. A list of student names from our class.
//Datatype: Array & String
/*Data Structure:*/ const studentNames = ['DeAmber', 'Kimmy', 'Beth', 'Hector'];

//5. A list of student names from our class, each with a location.
//Datatype: Object & String
//Data Structure: 
const student1 = {
    name1: 'DeAmber',
    Location1: 'Ohio'
}
const student2 = {
    name2: 'Kimmy',
    location2: 'Ohio'
}
const student3 = {
    name3: 'Beth',
    location3: 'Ohio'
}
const student4 = {
    name4: 'Hector',
    location4: 'Ohio'
}

//6. A list of student names from our class, each with a location and each with a list of favorite tv shows.
//Datatype: Object & Array & String
//Data Structure:
const student1 = {
    name1: 'DeAmber',
    Location1: 'Ohio',
    favShows1: ['Even Stevens', 'Lizzie McGuire', 'That\'s so Raven']
}
const student2 = {
    name2: 'Kimmy',
    location2: 'Ohio',
    favShows2: ['The Proud Family', 'Kim Possible', 'Phil of the Future']
}
const student3 = {
    name3: 'Beth',
    location3: 'Ohio',
    favShows3: ['Wizards if Waverly Place', 'The Suite Life of Zack & Cody', 'Hannah Montana']
}
const student4 = {
    name4: 'Hector',
    location4: 'Ohio',
    favShows4: ['American Dragon: Jake Long', 'Cory in the House', 'Phineas and Ferb']
}

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




