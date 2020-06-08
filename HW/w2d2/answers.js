//Write a for loop that will log the numbers 1 through 20
for(i = 1; i <= 20; i++)
console.log(i)

//Write a for loop that will log only the even numbers in 0 through 200
for(i = 0; i <= 200; i++) {
   if (i % 2 === 0)
    console.log(i)
}

//Fizz Buzz
//Write a javascript application that logs all numbers from 1 - 100
for(i = 1; i <= 100; i++){
//If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number
    if (i % 5 && i % 3 === 0) {
        console.log('FizzBuzz')
    } 
//If a number is divisible by 3 log "Fizz" instead of the number
    else if (i % 3 === 0){
        console.log('Fizz')
//If a number is divisible by 5 log "Buzz" instead of the number
    } else {
        (i % 5 === 0) 
        console.log('Buzz')
    }
}

// Wild Wild Life - Use the following arrays to answer the questions below (name,species ,age, hometown).
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
//Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2] = 5001
console.log(plantee)
//Change Wolfy's hometown from "Yukon Territory" to "Gotham City"
wolfy[3] = 'Gotham City'
console.log(wolfy)
//Give D'Art a second hometown by adding "Hawkins"
dart[dart.push('Hawkins')]
console.log(dart)
// Remove "Wolfy" from the wolfy array and replace it with "Gameboy"
wolfy[0] = 'Gameboy'
console.log(wolfy)

//Yell at the Ninja Turtles
//Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
const ninja = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
for (let i = 0; i < ninja.length; i++) {
    ninja[i] = ninja[i].toUpperCase()
    console.log(ninja[i])
}
