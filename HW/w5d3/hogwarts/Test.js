/*
  $(() => {
    //Query for your div with the id of container and set it to a variable named $container
    const $container = $('#container');
    console.log($container);
    //Create an <h1> element and set it to a variable called $h1 and console log it
    const $h1 = $('<h1>');
    $('body').append($h1);
    console.log($h1);
    //Add some text inside the h1 element. Example text: 'Hogwarts'
    $('h1').text('Hogwarts');
    //Test yourself
    console.log(document);
});


///////////////////////
/////// Year 2 ///////
/////////////////////

$(() => {
  //Query for your div with the id of container and set it to a variable named $container
  const $container = $('#container');
  //console.log($container);
  //Create an <h1> element and set it to a variable called $h1 and console log it. Add some text inside the h1 element. Example text: 'Hogwarts'
  const $h1 = $('<h1>').text('Hogwarts');
  $('body').append($h1);
  //console.log($h1);
  //Test yourself
  console.log(document);
  //h2 element with your name
  const $h2 = $('<h2>').text('De\'Amber Watson');
  $('body').append($h2);
  //h3 element with your house
  const $h3 = $('<h3>').text('Gryffindor');
  $('body').append($h3);
  //h4 element with your pet's name, his h4 element should have a class with a value of your pet type
  //h4 element with your wand 
  const $h4 = [ 
    $('<h4>').addClass('owl').text('Starlight'),
    $('<h4>').text('Holly Wand with Unicorn Hair Core'),
  ];
  $('body').append($h4);
  console.log(document);
});
*/

///////////////////////
/////// Year 3 ///////
/////////////////////
/*
Following what you did in previous years, add the following into an unordered list (with the attribute of storage and a value of trunk):

list items of

butter beer
invisibility cloak (add a class of secret)
magic map (add a class of secret)
time turner (add a class of secret)
leash (for your pet, be sure to give this list element the same class as you gave your pet)
Bertie Bott's Every Flavor [Jelly] Beans.
append the unordered list to your container div
In your main.css file, give the items with a class of secret an attribute of opacity: 0.5;

In your main.css file, remove the bullet points from the list items
*/


/*
$(() => {
    let container = $("#container");
    let h1 = "<h1>Hogwarts</h1>"+
              "<h2>Jules C</h2>"+
              "<h3>Slytherin</h3>"+
              "<h4>Peekay</h4>"+
              "<h4>Hornbeam wand with Dragon's breath</h4>"
      container.append(h1)
    
    let list = '<ul storage="trunk">'+
                '<li> Butter Beer </li>'+
                '<li> Invisibilty Cloak </li>'+
                '<li> Magic Map</li>'+
                '<li> Time Turner</li>'
                '<li> Leash</li>'+
                '<li> Bertie Bott\'s Every Flavor[Jelly] Beans </li>'+
                '</ul>'
    container.append(list)
    $('li:eq(1)').addClass('secret')
    $('li:eq(2)').addClass('secret')
    $('li:eq(3)').addClass('secret')
    $('li:eq(4)').addClass('Owl')
    //Test yourself
    //console.log(document);
      
    });
    
    ///////////////////////
    /////// Year 4 ///////
    /////////////////////
    
    /*You want to show off how many classes you are taking. Make a table
    Right above your table add an h5 that says 'Spring 2017'
    Inside the table add a thead element
    Inside the thead element add two th elements
    in the first th add the text Day
    in the second th add the text Classes
    Create a tr element and add two td elements inside.
    in the first td add the day Monday
    in the second td add the classes you are taking ( Herbology, Divination, History of Magic, Charms, Potions, Transfiguration, Defense Against the Dark Arts, Quidditch practice, etc.)
    Create more tr elements with tds inside so that you have Monday - Friday and classes each of those days */
    
    //Added this portion in HTML & CSS
    
    
    ///////////////////////
    /////// Year 5 ///////
    /////////////////////
    
    /*
    Things get interesting..
    */
    //Break your wand! (select the element that contains your wand and remove it)
    ($h4Wand).remove('<h4>');
    //Class was hard! Drink all your butter beer! (remove just the butter beer from your list)
    (list).remove("li:eq(0)");
    
    //Get a new wand (add the same element back with new text describing your new wand. Be sure to insert it after your pet in the DOM)
    
    //Make your new wand stand out by adding a color of indigo (or whatever color you like). But do it with magic (jQuery): Don't add this css in your main.css file
    
    //Send your pet on a spy mission (remove your pet from the DOM, put it somewhere else in your HTML). Make sure your pet's leash stays in your trunk (list item with the same class as your pet inside unordered list)
    
    //Have your pet come back (remove your pet from the DOM, put it back in its original location)
    
    
    ///////////////////////
    /////// Year 6 ///////
    /////////////////////
    
    ///////////////////////
    /////// Year 7 ///////
    /////////////////////


//css code

body {background-color: #4730db;
    text-align: center; 
}
.Owl {
    font-family: fantasy;
}
.secret {
    opacity: 0.5;
}
li {
    list-style: none;
}
table.center {
    margin-left:auto; 
    margin-right:auto;
}
table {
    border: 1px solid 
}
th {
    border: 1px solid;
}
td {
    border: 1px solid
}

//html file
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JQuery Magic</title>
    <script src="https://code.jquery.com/jquery-3.2.0.min.js" integrity="sha256-JAW99MJVpJBGcbzEuXk4Az05s/XyDdBomFqNlM3ic+I=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="app.js"></script>
    <link rel="stylesheet" href="main.css">
</head>
<body>
    <div id="container">
    </div> 
    <div>
        <h5>Spring 2017</h5>
        <table class="center">
            <thead>
               <tr>
                <th>Day</th>
                <th>Classes</th>
               </tr> 
            </thead>
            <tr>
                <td>Monday</td> 
                <td>History of Magic, Charms, Care of Magical Creatures</td>
            </tr>
            <tr>
                <td>Tuesday</td> 
                <td>Potions, Herbology, Astronomy</td>
            </tr>
            <tr>
                <td>Wednesday</td> 
                <td> Defense Against the Dark Arts, Muggle Art</td>
            </tr>
            <tr>
                <td>Thursday</td> 
                <td>Quidditch Practice, Earth Magic</td>
            </tr>
            <tr>
                <td>Friday</td> 
                <td>Transfiguration, Flying</td>
            </tr>
        </table>
    </div>
</body>
</html>
</meta>


//---------------Year 1-----------------------------------
//Query for your div with the id of container and set it to a variable named $container
//console.log $container
const container = document.querySelector('#container');
console.log(container);
// Create an <h1> element and set it to a variable called $h1 and console log it
let h1 = document.createElement('H1');
//console.log(h1);
//Add some text inside the h1 element. Example text: 'Hogwarts'
let h1Text = document.createTextNode('Hogwarts');
h1.appendChild(h1Text);
//Append your $h1 to your $container
container.appendChild(h1);
//Test yourself
//console.log(document)

//---------------Year 2-----------------------------------
//h2 element with your name
let h2 = document.createElement('H2');
container.appendChild(h2);
let h2Text = document.createTextNode('DeAmber Watson');
h2.appendChild(h2Text);
//h3 element with your house (Hufflepuff, Gryffindor, Ravenclaw or Slytherin )
let h3 = document.createElement('H3');
container.appendChild(h3);
let h3Text = document.createTextNode('Gryffindor');
h3.appendChild(h3Text);
//h4 element with your pet's name
let h4Pet = document.createElement('H4');
container.appendChild(h4Pet);
let h4PetText = document.createTextNode('Starlight')
h4Pet.appendChild(h4PetText);
    //this h4 element should have a class with a value of your pet type (owl, cat, toad, etc)
h4Pet.classList.add('owl');
//h4 element with your wand (You can make it whatever you want.
let h4Wand = document.createElement('H4');
container.appendChild(h4Wand);
let h4WandText = document.createTextNode('Holly Wand with Unicorn Hair Core');
h4Wand.appendChild(h4WandText);

//test yourself
//console.log(document);


//---------------Year 3-----------------------------------
/*Following what you did in previous years, add the following into an unordered list (with the attribute of storage and a value of trunk):
list items of

butter beer
invisibility cloak (add a class of secret)
magic map (add a class of secret)
time turner (add a class of secret)
leash (for your pet, be sure to give this list element the same class as you gave your pet)
Bertie Bott's Every Flavor [Jelly] Beans.
append the unordered list to your container div */

let ul = document.createElement('UL');
container.appendChild(ul);
document.querySelector('UL').setAttribute('storage', 'trunk');
//console.log(document);

function createLi(str) {
    let ul = document.querySelector('UL')
    let li = document.createElement('LI');
    li.appendChild(document.createTextNode(str));
    if (str === 'Invisibility Cloak' || 'Magic Map' || 'Time Turner') {
        li.classList('secret');
    } else if (str === 'Leash') { 
            li.classList('owl'); 
     } else {
            li.classList('');
    ul.appendChild(li);
  }
let butterBeer = createLi('Butter Beer');
let invisibilityCloak = createLi('Invisibility Cloak');
let magicMap = createLi('Magic Map').classList.add('secret');
let timeTurner = createLi('Time Turner').classList.add('secret');
let leash = createLi('Leash').classList.add('owl');
let jellyBeans = createLi('Bertie Bott\'s Every Flavor [Jelly] Beans');
console.log(document);

function createLi(str) {
    let ul = document.querySelector('UL')
    let li = document.createElement('LI');
    li.appendChild(document.createTextNode(str));
    for (let i = 0; i < li.length; i++) {
        if (str === 'Invisibility Cloak'||'Magic Map'||'Time Turner'){
            li.classList.add('secret');
            ul.appendChild(li);
        } else if (str === 'Leash') {
            li.classList.add('owl');
            ul.appendChild(li);
        } else {
            ul.appendChild(li);  
        }
    }
}