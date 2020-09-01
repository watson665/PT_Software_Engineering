//the user should see two columns and an input field.
//the user should be able to type a to-do item into an input box.
//the user should be able to click an add button next to this input
//Hint: consider adding the new information into an array of to-dos and display all of the items in that array.
//buttons: add, done (completed) and remove
//The user should be able to click 'done' on a todo and have it move to the completed column.
//When the button 'COMPLETED' is clicked, set the background color of the target to-do-item to #ED6495
//The user should be able to delete a to-do item from the completed list.

$(() => {



    const list = [];

 $('button').on('click', (event) =>{


  let input = $('#input-box').val();
      console.log(input);
      list.push(input);


      event.preventDefault();
      $(event.currentTarget).trigger('reset');
      render();
});


const render = () => {
  console.log('list:', list);

  $('ul').empty();

  list.forEach((item) => {
       console.log(item);
      $('#to-do-list').append('<li>' +  item +  '<button id = "done" val = "complete" </button> Completed'  +  '</li>');                    

  });


  $('li').on('click', (event) => {
      $(event.currentTarget).css('text-decoration', 'line-through');


});

}


const completedArr =[];

$('button').on('click', (event) =>{



  let doneInput = $('#complete').val();
      console.log(doneInput);
      completedArr.push(doneInput);

      event.preventDefault();           
     $(event.currentTarget).append(doneInput);    

      completeFunc();
});



const completeFunc = () => {    

  $('button').on('click', (event) =>{

      $(event.currentTarget).css('background-color', '#ED6495');

      console.log('Secondlist:', completedArr);    
      $('ul').empty();        
      completedArr.forEach((item) => {
           console.log(item);
          $('#completed').append('<li>' +  item +  '<button id = "deleted" </button> delete'  +  '</li>');

               // this function removes the delete button on the  things are done right section
      $( "button" ).click(function() {
          $('li' ).remove();
        });        


     });     

      });


}


}); 