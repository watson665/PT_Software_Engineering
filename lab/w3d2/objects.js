//////////////////
/////Syntax//////
////////////////

//1. List and describe each individual piece of syntax that we use to construct an object. Don't leave anything out! The list is finite.
/*
1. Curly braces define the object.
{} 
2. Objects often begins with defining and initializing a variable.
const person = {}; 
3. Objects have key (name, age, gender, interest)/ value (Bob, Smith, 32, male, music skiing) pairs.
const person = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
};
*/


////////////////////
/////Me, Me, Me////
//////////////////

//1. Create an empty object called me.
//2. Assign it properties for firstName, lastName, age, and email with corresponding values.
const me = {
    firstName: 'DeAmber',
    lastName: 'Watson',
    age: 27,
    email: 'deamberwatson@gmail.com'
};
//3. Using dot notation, access the firstName property in your object.
me.firstName;
//console.log(me.firstName);
//4. Without writing directly into the object, update the value of age to be 1000 years old.
me.age = 1000;
//5. Using dot notation, verify that age has been updated.
//console.log(me.age);
//6. Add a key to this object called: "place of residence" and give it a value of your hometown. Note that the key has spaces, therefore you cannot use dot notation.
me['place of residence'] = 'Columbus, OH.';
//7. Access the value of "place of residence"
me['place of residence'];
//console.log(me['place of residence']);

//Fancy Greeting
//Write a function called fancyGreeting that accepts your me object as an argument. The function should console.log a greeting using the firstName and lastName values from the me object. For example: fancyGreeting(me) => // returns "Greetings, Nani Pelekai"
function fancyGreeting(firstName, lastName) {
    return `Greetings, ${firstName} ${lastName}.`
};

fancyGreeting(me.firstName, me.lastName);
//console.log(fancyGreeting(me.firstName, me.lastName));


/////////////////
/////Slimer/////
///////////////

const monster = {
    name: "Slimer",
    color: "greenish",
    type: "plasm or ghost or something"
 };
//What would you write to access the name and console.log it?
//console.log(monster.name);
//What would you write to change the type to 'creature' (without changing it inside the object itself)
monster.type = 'creature'
//What would you write to add a key to the object called age, and set the age to 6?
monster.age = 6;
//console.log the object to make sure type is creature, and age is 6
//console.log(monster);

//can't figure put this part out will review later
////////////////
/////Ogres/////
//////////////


const adventurer = {
    name: 'Zelda',
    hitpoints: 10,
    medicine: 'Pepto Bismol',
    sword: 10
};

const ogre = {
    name: 'Shrek',
    hitpoints: 10,
    medicine: 'Swamp Soup',
    sword: 10
};

function fight() {
    let input = prompt ('You spy an Ogre that is ready to battle... Run or fight?');
    if (input === 'fight') {
        ogre.hitpoints - adventurer.sword;
        alert(`${adventurer.name} spots the orgre and uses her sword. You win!`);
    } else if (input === 'run'); {
        alert(`You chose to run. You have lost the game.`);
    }
};

//can't figure put this part out will review later
/////////////////////////
/////Cat Combinator/////
///////////////////////

//Mama Cat
const cat1 = {
    name: 'Iris',
    breed: 'bengal',
    age: 8
}
//console.log(cat1.age);
//console.log(cat1.breed);

//Papa Cat
const cat2 = {
    name: 'Bob',
    breed: 'abyssinian',
    age: 10
}

function comnbineCats(mama, papa) {
    return mama + papa;
}

comnbineCats(cat1, cat2);
console.log(comnbineCats(cat1, cat2));