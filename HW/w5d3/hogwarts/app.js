/*if (typeof jQuery == 'undefined'){
    console.log('oops! I still have to link my jQuery properly!');
  } else {console.log('I did it! I linked jQuery and this js file!')}; */

  ///////////////////////
  /////// Year 1 ///////
  /////////////////////
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
$(() => {
  let container = $("#container");
  let h1 = '<h1> Hogwarts </h1>'+
 		 '<h2> De\'Amber Watson </h2>'+
 		 '<h3> Gryffindor </h3>'+
 		 '<h4> Starlight </h4>'+
 		 '<h4> Holly Wand with Unicorn Hair Core </h4>'
container.append(h1)
$("h4:eq(0)").addClass("Owl")

let list = '<ul storage="trunk">'+
			'<li> Butter Beer </li>'+
			'<li> Invisibilty Cloak </li>'+
			'<li> Magic Map</li>'+
			'<li> Time Turner</li>'
			'<li> Leash</li>'+
			'<li> Bertie Bott\'s Every Flavor[Jelly] Beans </li>'+
			'</ul>'
container.append(list)
$("li:eq(1)").addClass("secret")
$("li:eq(2)").addClass("secret")
$("li:eq(3)").addClass("secret")
$("li:eq(4)").addClass("Owl")
//Test yourself
//console.log(document);
  
});


///////////////////////
/////// Year 4 ///////
/////////////////////

///////////////////////
/////// Year 5 ///////
/////////////////////

///////////////////////
/////// Year 6 ///////
/////////////////////

///////////////////////
/////// Year 7 ///////
/////////////////////