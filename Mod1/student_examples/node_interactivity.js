//console.log('hola mundo');

const car = {
    color: 'blue',
    hp: 4000,
    year: 1989
}
console.log(car);
console.log(car.color);


const house = {
    doors: 9
}
console.log(house);
house.windows = 30;
console.log(house);
house.hasGarden = true;
console.log(house);
house.windows = 40;
console.log(house);

What data types would you use to model:
Name of cat - string
Age of cat - number
Cat's favorite things - array
If cat can speak French - boolean
If cat can solve a Rubik's cube - boolean
Your cat - object

const mogwai = {};
console.log(mogwai);
mogwai.name = 'Gizmo';
console.log(mogwai);


const borough = {
    name: 'Brooklyn',
    name: 'The Bronx'
}
console.log(borough);


const shoppingCart = {
    coupon: 'buy more',
    itemCount: 4,
    freeShipping: true,
    cartTotal: 3489,
}
if (shoppingCart.coupon === 'buy more') {
    console.log('ok, let\'s give you a discount');
}
for (let i = 0; i < shoppingCart.itemCount; i++) {
    console.log(i);
}

