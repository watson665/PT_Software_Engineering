/* let cartTotal = 16.07;
let roundedUpCart = Math.round(cartTotal);
console.log(roundedUpCart);

let cartTotal = 16.07;
let roundedUpCart = Math.ceil(cartTotal);
let donation = (roundedUpCart - cartTotal).toFixed(2);
console.log(donation);


//conditionals
isMMColorGreen = true;

if (isMMColorGreen = true) {
    console.log('Eww!');
} else {
    console.log('Yum');
}

console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean('hi'));
console.log(Boolean(1));
console.log(Boolean(true));

console.log(!!1)
console.log(!!0)
console.log(!!-1)
console.log(!![])
console.log(!!{})
console.log(!!null)
console.log(!!"")

console.log(1 === 1);
console.log("beans" === "Beans");
console.log((5 + 5 * 3) === ((5 + 5) * 3));
console.log(9 !== false);
console.log(NaN === NaN);

if (5 % 2 === 0) {
    console.log('Number is even');
} else {
    console.log('Number is odd');
}

//Booleans, Conditionals & Loops
for (let step = 0; step < 5; step++) {
    console.log('Walking east one step', step)
}

//Add all even numbers from 0-10
let sumEven = 0;
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
       sumEven = sumEven + i;
        console.log(sumEven);
    }
}
//Or
*/
let sumEven = 0;
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
       sumEven += i;
        console.log(sumEven);
    }
}