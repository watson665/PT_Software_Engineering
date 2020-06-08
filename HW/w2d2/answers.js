
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
