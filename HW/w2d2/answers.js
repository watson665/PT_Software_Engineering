//Write a for loop that will log the numbers 1 through 20
for(i = 1; i <= 20; i++);
console.log(i);

//Write a for loop that will log only the even numbers in 0 through 200
for(i = 0; i <= 200; i++) {
   if (i % 2 === 0);
    console.log(i);
};

//Fizz Buzz
//Write a javascript application that logs all numbers from 1 - 100
for(i = 1; i <= 100; i++){
//If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number
    if (i % 5 && i % 3 === 0) {
        console.log('FizzBuzz');
    }
//If a number is divisible by 3 log "Fizz" instead of the number
    else if (i % 3 === 0){
        console.log('Fizz');
//If a number is divisible by 5 log "Buzz" instead of the number
    } else {
        (i % 5 === 0);
        console.log('Buzz');
    }
};

// Wild Wild Life - Use the following arrays to answer the questions below (name,species ,age, hometown).
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant",  5000 , "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"];
//Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2] = 5001;
console.log(plantee);
//Change Wolfy's hometown from "Yukon Territory" to "Gotham City"
wolfy[3] = 'Gotham City';
console.log(wolfy);
//Give D'Art a second hometown by adding "Hawkins"
dart[dart.push('Hawkins')];
console.log(dart);
// Remove "Wolfy" from the wolfy array and replace it with "Gameboy"
wolfy[0] = 'Gameboy';
console.log(wolfy);

//Yell at the Ninja Turtles
//Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
const ninja = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
for (let i = 0; i < ninja.length; i++) {
    ninja[i] = ninja[i].toUpperCase();
    console.log(ninja[i]);
}

//Methods, Revisited
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

//Console log: the index of Titanic
console.log(favMovies.indexOf('Titanic'));

//use the .sort method
favMovies.sort();
console.log(favMovies);

//push "Guardians of the Galaxy"
favMovies.push('Guardians of the Galaxy');
console.log(favMovies);

//Reverse the array
favMovies.reverse();
console.log(favMovies)
//Use the shift method to remove "Fast and Furious"
favMovies[0] = 'Fast and Furious'
favMovies[15] = 'Guardians of the Galaxy'
favMovies.shift();
console.log(favMovies);
 
//unshift - what does it return? - adds a new movie to the beginning of array
favMovies.unshift();
console.log;
//splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) 
console.log(favMovies.indexOf('Django Unchained'));
favMovies.splice(15, 1,'Avatar');
console.log(favMovies);
//slice the last half of the array (challenge yourself and try to programmatically determine the middle of the array rather than counting it and hard coding it)
const half = Math.ceil(favMovies.length/2);
favMovies.splice(-half);
console.log(favMovies);
//store the value of your slice in a variable, console.log it
const firstHalf = favMovies.splice(-half);
//console.log your final results
console.log(firstHalf);
//After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
console.log(favMovies.indexOf('Fast and Furious'));
//Value = -1 for an element not listed in an array.
