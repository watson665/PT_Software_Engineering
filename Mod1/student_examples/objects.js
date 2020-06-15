//Me, Me, Me
const me = {
    firstName: 'DeAmber',
    lastName: 'Watson',
    age: 27,
    email: 'deamberwatson@gmail.com',
}
//console.log(me);
//console.log(me.firstName);
me.age = 1000;
//console.log(me.age);
me.placeOfResidence = 'Columbus, OH.';  
//console.log(me);
//console.log(me.placeOfResidence);

//Fancy Greeting
const fancyGreeting = (me) => {
    return`Greetings, ${me.firstName} ${me.lastName}`;
}
//console.log(fancyGreeting(me));

//Slimer
const monster = {
    name: "Slimer",
    color: "greenish",
    type: "plasm or ghost or something"
 }
 // Given the slimer object:
 // 1. What would you write to access the name and console.log it?
 //console.log(monster.name);
// 2. What would you write to change the type to 'creature' (without changing it inside the object itself)
monster.type = 'creature';
//console.log(monster.type);
//What would you write to add a key to the object called age, and set the age to 6?
monster.age = 6;
//console.log(monster);

//Ogres
const adventurer = {
    name: 'Iron Fist',
    hitpoints: 10,
    weapon: 'steel fist',
    restorativeMedicine: 'Pepto Bismol'
}

const ogre = {
    name: 'Shrek',
    hitpoints: 10,
    weapon: 'slime'
}

