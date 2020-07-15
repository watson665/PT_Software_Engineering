//---------------Year 1-----------------------------------
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
console.log(document);