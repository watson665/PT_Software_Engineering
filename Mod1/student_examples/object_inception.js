/*
const adventurer = {
    name: 'Timothy',
    hitpoints: 10,
    belongings: ['sword', 'potion', 'tums'],
    companion: {
        name: 'Velma',
        type: 'Bat',
        companion: {
            name: 'Tim',
            type: 'Parasite',
            belongings: ['scuba tank', 'rogan josh', 'health insurance'],
        }
    }
}
//console.log(adventurer.name);
//console.log(adventurer.hitpoints);
//console.log(adventurer.belongings);
//console.log(adventurer.belongings[0]);
//console.log(adventurer.belongings[1]);
//console.log(adventurer.belongings[2]);

for (let i = 0; i < adventurer.belongings.length; i++) {
    //console.log(adventurer.belongings[i]);
}
//console.log(adventurer.belongings[2])

adventurer.belongings.push('Vogue Magazine');
//console.log(adventurer.belongings)

for (let i = 0; i < adventurer.belongings.length; i++) {
    //console.log(adventurer.belongings[i]);
}

//console.log(adventurer.companion);
//console.log(adventurer.companion.name);
adventurer.companion.name = 'Susan';
//console.log(adventurer.companion.name);
adventurer.companion2 = 'insect';
//console.log(adventurer.companion2);
//console.log(adventurer.companion.companion.type);
//console.log(adventurer.companion.companion.belongings[2]);

//Array of Objects
const movies = [
    {title: 'Tokyo Story'},
    {title: 'Paul Blart: Mall Cop'},
    {title: 'L\'Avventura'},
];

//console.log(movies[0]);
//console.log(movies[0].title);

for (let i = 0; i < movies.length; i++) {
    //console.log(movies[i].title);
}

//User variables to Store a Key - did not work slide 19
const monster = {
    name: 'slimer',
    age: 6,
}
const someVar = 'slimer';

//console.log(monster[someVar]);

//Loop over an Object
const movie = {
    title: 'L\'Avventura',
    director: 'Michelangelo Antonioni',
    year: 1960,
}
for (let key in movie) {
    //console.log(key);
}

for (let key in movie) {
    //console.log(movie[key]);
}

//console.log(Object.keys(movie));
//console.log(Object.values(movie));

const keys = Object.keys(movie);
for (let i = 0; i <keys.length; i++) {
    //console.log(movie[keys[i]]);
}
*/
const movie2 = {
    title: 'Eraserhead',
    director: 'David Lynch',
    year: 1978,
}
/*
const keys2 = Object.keys(movie2);
for (let i = 0; i < keys2.length; i++) {
    console.log(movie2[keys2[i]])
}
*/
const values2 = Object.values(movie2);
for (let i = 0; i < values2.length; i++) {
    cconsole.log(movie2[values2[i]])
}
