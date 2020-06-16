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


// Crazy Object!

const crazyObject = {
    taco: [{meat: 'steak',
           cheese: ['panela', 'queso', 'chihuahua']},
           {meat: 'chicken',
            salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
          ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [{
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
      ]
    }
  }

//Use crazy Object to log the following.
//1. "omg my mouth is burning"
console.log(crazyObject.taco[1].salsa[5]);
//2. "Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0]);
//3. "Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favourtieHobby);
//4. Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1]);
//5. The object the contains the name funkhauser
console.log(crazyObject.larry.characters[1].name);
//6. Add the quote "I'm trying to elevate small talk to medium talk" to Larry's quote array. Confirm that it was added.
crazyObject.larry.quotes.push('I\'m trying to elevate small talk to medium talk');
console.log(crazyObject.larry.quotes);


//Object-ception
const inception = {
    reality: {
        dreamLayer1: {
            dreamLayer2: {
                dreamLayer3: {
                    dreamLayer4: {
                        dreamLayer5: {
                            dreamLayer6: {
                                limbo: "Joseph Gordon Levitt"
                           }
                        }
                    }
                }
            }
        }
    }
 }
 inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;
 console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);
