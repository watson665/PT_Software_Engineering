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
*/

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
  const $h4 = [ 
    $('<h4>').addClass('owl').text('Starlight'),
    $('<h4>').text('Holly Wand with Unicorn Hair Core'),
  ];
  $('body').append($h4);
  console.log(document);


///////////////////////
/////// Year 3 ///////
/////////////////////

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