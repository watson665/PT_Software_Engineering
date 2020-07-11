////////////////////////////
////////EXERCISES//////////
//////////////////////////

//Easy Does It
// 1. Create an array that contains three quotes and store it in a variable called quotes.
const quotes = ['When you have a dream, you\'ve got to grab it and necer let go.', 'Nothing is impossible. The word itself says "I\'m possible"', 'A champion is not defined by their wins but by how they can recover when they fall.'];

//Random
const randomThings = [1, 10, "Hello", true];

//1. how do you access the 1st element in the array?
randomThings[0];
//console.log(randomThings[0]);
//2. Change the value of "Hello" to "World".
randomThings[2] = 'World';
//3. Check the value of the array to make sure it updated the array.
//console.log(randomThings);

//We've Got Class 
const ourClass = ["Ada", "Zoom", "Github", "Slack"];

//1. What would you write to access the 3rd element of the array?
ourClass[2];
//console.log(ourClass[2]);
//2. Change the value of "Github" to "Octocat"
ourClass[2] = 'Octocat';
//3. Add a new element, "Cloud City" to the array.
ourClass[4] = 'Cloud City';
//console.log(ourClass);


//Mix It Up
const myArray = [5 ,10 ,500, 20]

//1. using the push method, add the string "Egon" to the end of the array.
myArray.push('Egon');
//console.log(myArray);
//2. using a method, remove the string from the end of the array.
myArray.pop();
//console.log(myArray);
//3. using the unshift method, add the string "Bob Marley" to the beginning of the array
myArray.unshift('Bob Marley');
//console.log(myArray);
//4. using a different method, remove the string from the beginning of the array
myArray.shift();
//console.log(myArray);
//5. use the reverse method on this array
myArray.reverse();
//console.log(myArray);

//Biggie Smalls

/*Write an if..else statement that iterates over the myArray array declared above:
console.log little number if the number is less than 100
If the number entered is 100 or more, alert big number.*/
for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] < 100) {
        //console.log('little number');
    } else {
        //console.log('big number');
    }
}

//Monkey in the Middle
/*Write an if...else if...else statement:
console.log little number if the number is less than 5.
If the number is more than 10, log big number.
Otherwise, console.log "monkey". */
for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] < 5) {
        //console.log('little number');
    } else if (myArray[i] > 10) {
        //console.log('big number');
    } else {
        //console.log('monkey');
    }  
}

//What's in Your Closet?

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  //1. What's Kristyn wearing today? Loop over the array and use bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
  for (let i = 0; i < kristynsCloset.length; i++) {
      //console.log(`Kristyn is rocking that ${kristynsCloset[i]} today!`);
  };
  //2. Kristyn can't find her left shoe. Remove this item from her closet and save it to a variable named kristynShoe.
  const kristynShoe = kristynsCloset[0];
  //console.log(kristynShoe);
  kristynsCloset.splice(0, 1);
  //console.log(kristynsCloset);
  //3. Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
  kristynsCloset.splice(5,0,'raybans');
  //console.log(kristynsCloset);
  //4. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
  kristynsCloset[4] = 'stained knit hat';
  //console.log(kristynsCloset);
  //5. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
  thomsCloset[0][0];
  //console.log( thomsCloset[0][0]);
  //6. In the same way, access one item from Thom's pants array.
  thomsCloset[1][0];
  //console.log(thomsCloset[1][0]);
  //7. Access one item from Thom's accessories array.
  thomsCloset[2][2];
  //console.log(thomsCloset[2][2]);
  //8. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
  //console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][0]}, and ${thomsCloset[2][2]}.`);
  //9. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
  thomsCloset[1][2] = 'Footie Pajamas';
  //console.log(thomsCloset)