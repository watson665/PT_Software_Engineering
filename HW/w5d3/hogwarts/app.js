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

function createLiClass1(str) {
    let ul = document.querySelector('UL')
    let li = document.createElement('LI');
    li.appendChild(document.createTextNode(str));
    li.classList.add('secret')
    ul.appendChild(li);
}

//Can't figure out how to get the classes for each li in 1 function. I've tried switch statements, for loops, & if else statements
function createLiClass2(str) {
    let ul = document.querySelector('UL')
    let li = document.createElement('LI');
    li.appendChild(document.createTextNode(str));
    li.classList.add('owl')
    ul.appendChild(li);
}

function createLi(str) {
    let ul = document.querySelector('UL')
    let li = document.createElement('LI');
    li.appendChild(document.createTextNode(str));
    ul.appendChild(li);
}

let butterBeer = createLi('Butter Beer');
let invisibilityCloak = createLiClass1('Invisibility Cloak');
let magicMap = createLiClass1('Magic Map')
let timeTurner = createLiClass1('Time Turner')
let leash = createLiClass2('Leash')
let jellyBeans = createLi('Bertie Bott\'s Every Flavor [Jelly] Beans');

console.log(document);
