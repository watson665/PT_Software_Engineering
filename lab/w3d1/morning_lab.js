//Activity
//Write a program that implements your pseudo coded waffles with syrup process.
// 2. BONUS As an extension, create an interactive application in your browser.

//Open freezer -function
function openFreezer() {
    const input = prompt (
        "You are in the kitchen and need to get to the freezer. Please type 'open' to open the freezer."
    );
//Search for box of waffles - Conditionals
    //Take out the box of waffles - Assertions
    //The instructions to make the waffles in the toaster - Assertions
    if (input === 'open') {
        searchForwaffle();
    } else {
        alert ("the waffles are in the freezer please enter 'open' in the text field.");
        openFreezer();
    };
};
function searchForwaffle() {
    const input = prompt(
        'You see 2 boxes that appear to be waffles, but you are unsure. One box is blue the other is beige. Which one do you select?'
    );
    if (input === 'blue') {
        alert ("you found the box of blueberry waffles! Please read the instructions and got to the toaster.");
        toastWaffles();
    } else if  (input === 'beige') {
        alert ("you selected a box of pancakes, you are looking for waffles. Please try again!");
        searchForwaffle();
    } else {
        alert ('invalid input!');
        searchForwaffle();
    }
}
//Take 2 waffles out of the box - Assertions
    //Place both waffles in the toaster - For Loop
    //Turn on the toaster for the time and temp stated in the directions - Assertions
function toastWaffles() {
    const input = prompt ('the instructions say to toast 2 frozen waffles on medium for 3 minutes. How many minutes will you toast your waffles?');
    if (input === '2') {
        alert ('waffles have been toasted to perfection!');
        warmSyrup();
    } else {
        alert ('you did not heat the waffles per the instructions, please try again');
        toastWaffles();
    }
};
//Open the fridge - function
    //Get the syrup from the fridge - conditionals
    //Put the container in the microwave for 30 seconds - assertions
function warmSyrup() {
    const input = prompt ('Now that your waffles are toasted to perfection it is time to get your syrup. Enter "warm" to heat up syrup or "cold" to not warm syrup.');
    if (input === 'warm') {
        alert ('Congratulations your syrup is warm!');
        waffleComplete();
    } else if (input === 'cold') {
        alert ('Your syrup is cold, you wanted warm syrup please try again.');
        warmSyrup();
    } else {
        alert ('Invalid choice, please try again.');
        warmSyrup();  
    }
}

function waffleComplete() {
    alert ('Now you can enjoy your waffles and warm syrup. Bon Appetit!');
}

openFreezer();