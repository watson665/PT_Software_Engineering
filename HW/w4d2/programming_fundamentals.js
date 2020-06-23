/*
////////////////////////////////////////
// Section 1: Programming Fundamentals//
///////////////////////////////////////

Read this article on programming principles: 
Write a ~1 sentence summary for each one; 

1. DRY (Don't Repeat Yourself) - Avoid repetition in code.
2. KISS (Keep It Simple Stupid) - Avoid complexity in code (simple code is the goal).
3. Avoid creating a YAGNI (You Aren't Gonna Need It) -Only implement things in code when you actually need them not just because you forsee you will need it.
4. Do the simplest thing that could possibly work - Use simplicity in code.
5. Don't make me think - Code should be easy to read and understood by everyone.
6. Write code for the maintainer - Write code that can be easily read and updated by someone performing maintenance on the already completed code.
7. Single responsibility principle - A component should perform a single & well-defined task.
8. Avoid premature optimization - Avoid attempting to make code more efficient without proper data that it is necessary.
9. Separation of concerns - Coding designed for orgnization (separates applications into distinct sections, so each section addresses a separate concern).

Which ones surprise you (if any)?
Avoid premature optimization surprised me because I was under the impression that most software engineers want their program to function as most efficiently as possible.

Which one is currently giving you the most struggle?
Do the simplest thing that could possibly work is giving me the most struggle because I am still learning the basics of coding and I don't know if there are simpler methods to get the same result.

/////////////////////////////////
////////Commenting Code/////////
///////////////////////////////

1. Comment each line of this code and describe what it is doing. */
// Creating a function named "f" with a parameter placeholder of "l"
const f = l => {
  //"es", "p", "n" variables in the function are set to equal 0, "c" variable is set to equal 1
  let es = 0, p = 0, c = 1, n = 0
  //While the value of "c" is less than or equal to the value of parameter "l" complete the whileloop
  while (c <= l) {
    // The value of variable "n" is equal to "c" + "p"
    n = c + p;
    //The variables "c" & "p" are equal to variables "n" & "c"
    [c, p] = [n, c]
    //Filter to get the even numbers of the expression 
    es += (c % 2 === 0) ? c : 0
  }
  //Return the even sum
  return es
}
//Log the value of 
console.log(f(55))

//Compare the same solution with more semantic variable names (feel free to use this one to help you figure out what is happening in this function:
const f2 = (limit) => {
    let evenSum = 0;
    let previous = 0;
    let current = 1;
    while (current <= limit) {
      let next = current + previous;
      previous = current;
      current = next;
      if (current % 2 === 0) {
        evenSum += current;
      }
    }
    return evenSum;
  }
  
  
  console.log(f2(55)) 
/* 
2. What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?
A more semantic name would have been evenFibonacciNumbers. 
I beleive changing the variable names from letters to words would have made this easier to read (ES to evenSum; p to previousNumber; and c to currentNumber). I also think that each variable should've been initialized on their own line. The let term should have been used on line n = c + p to let the reader know that a new variable was being initialized. 

3. If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?
I would rather start working with f2 because it is a lot easier to read and understand what is going on.

4. Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
Yes, the semi-colon is necessary. If the semi-colon is removed and the code is ran you get a SyntaxError: Invalid left-hand side in assignement.
*/


