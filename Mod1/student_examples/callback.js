/*
const practiceFunction = (farewell) => {
    //console.log(farewell);
    return;
};
practiceFunction('Bye');

const secondFunction = () => {
    //console.log('hi');
    return;
}
practiceFunction(secondFunction);
//console.log(practiceFunction(secondFunction));
*/

setTimeout(() => {
    //console.log('oh....hai!');
},0)

const socky = () => {
    console.log('I will happily iron your socks!');
}

//socky();

const foodie = () => {
    console.log('I will sort your M&Ms so that you never encounter a green one!');
}
//foodie();

const pr = () => {
    console.log('I will make sure everyone knows that you are the best boss ever');
}
//pr();

const boss = employee => {
    console.log('I am the boss and you will do as I say!');
    employee();
}

//boss(socky);
boss(foodie);
//boss(pr);

boss(() => {
   // console.log('I\'ll still hand grind your coffee beans even though you never remember my name');
})