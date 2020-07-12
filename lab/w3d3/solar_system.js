/////////////////////////////
////The Milky Way Galaxy////
///////////////////////////

//1. Create an object called milkyWay
//2. Assign it properties for type, age, containsEarth with the following corresponding values (in order): barred spiral, 13,600,000,000, false
const milkyway = {
    type: 'barred spiral',
    age: 13600000000,
    containsEarth: false
}
//3. Using dot notation, access the containsEarth property in your object
milkyway.containsEarth;
//4. Wait a second, that's not right! The Milky Way does contain earth, let's fix that! Without directly changing the milkyWay object, update the value of containsEarth to be true
milkyway.containsEarth = true;
//5. Verify that the value has been updated using dot notation
//console.log(milkyway.containsEarth);
//6. Add a key to the object called number of stars and give it a value of "100-400 billion"
milkyway['number of stars'] = "100-400 billion";
//console.log(milkyway);


////////////////////////////////////////
///////The Solar System, Part 1////////
//////////////////////////////////////

const solarSystem = [
	{ name: "Mercury", ringSystem: false, moons: [] },
	{ name: "Venus", ringSystem: false, moons: [] },
	{ name: "Earth", ringSystem: false, moons: ["The Moon"] },
	{ name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },
	{ name: "Jupiter", ringSystem: true, moons: ["Europa", "Ganymede", "Io", "Callisto"] },
	{ name: "Saturn", ringSystem: true, moons: ["Titan", "Enceladus", "Rhea", "Mimas"] },
	{ name: "Uranus", ringSystem: true, moons: ["Miranda", "Titania", "Ariel", "Umbriel"] },
	{ name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] }
];

//1. Print the array of Jupiter's moons to the console (no for loop, just print the entire array).
//console.log(solarSystem[4].moons);
//2. Print the name of Neptune's moon "Nereid" to the console.
//console.log(solarSystem[7].moons[1]);
//3. Add a new moon called "Endor" to Venus' moons array.
solarSystem[1].moons[0] = 'Endor';
//4. Add a Pluto object to the solarSystem array using .push. The object should contain Pluto's name, ringSystem boolean, and moons array (which includes "Charon").
solarSystem.push({name: 'Pluto', ringSystem: false, moons: ['Charon']});
//5. Add a new key value pair to the the Earth object: the key should be 'diameter', and the value should be Earth's diameter in miles represented as a string.
solarSystem[2].diameter = '7,917.5 miles';
//6. Change Mercury's ringSystem boolean to true.
solarSystem[0].ringSystem = true;
//7. Change Uranus' moon "Umbriel" to "Oberon"
solarSystem[7].moons[3] = 'Oberon';
//8. Iterate through the solarSystem array and print only the objects that have a ringSystem (where ringSystem: true), and ignore the others. You want to make a loop that goes over each item in the array, and include an if statement.
for (let i = 0; i < solarSystem.length; i++) {
    if (solarSystem[i].ringSystem === true) {
        //console.log(solarSystem[i]);
    } 
}

///////////////////////////////////
/////The Solar System, Part 2/////
/////////////////////////////////

const system = { 
    Mercury: 
     { radiusp: 'same ',
       name: 'Mercury',
       density: 5.43,
       tilt: 2,
       image: 'textures/mercury.gif',
       rotationperiod: 1408,
       period: 0.24,
       radiuse: 2439,
       satellites: 0,
       au: 0.3871,
       eccentricity: 0.206,
       velocity: 47.89,
       mass: 0.06,
       inclination: 7 },
    Venus: 
     { radiusp: 'same ',
       name: 'Venus',
       density: 5.25,
       tilt: 177.3,
       image: 'textures/venus.gif',
       rotationperiod: 5832,
       period: 0.62,
       radiuse: 6052,
       satellites: 0,
       au: 0.7233,
       eccentricity: 0.007,
       velocity: 35.04,
       mass: 0.82,
       inclination: 3.4 },
    Earth: 
     { radiusp: 6357,
       name: 'Earth',
       density: 5.52,
       tilt: 23.45,
       image: 'textures/earth.gif',
       rotationperiod: 23.93,
       period: 1,
       radiuse: 6378,
       satellites: 1,
       au: 1,
       eccentricity: 0.017,
       velocity: 29.79,
       mass: 1,
       inclination: 0 },
    Mars: 
     { radiusp: 3380,
       name: 'Mars',
       density: 3.95,
       tilt: 25.19,
       image: 'textures/mars.gif',
       rotationperiod: 24.62,
       period: 1.88,
       radiuse: 3397,
       satellites: 2,
       au: 1.524,
       eccentricity: 0.093,
       velocity: 24.14,
       mass: 0.11,
       inclination: 1.85 },
    Jupiter: 
     { radiusp: 66854,
       name: 'Jupiter',
       density: 1.33,
       tilt: 3.12,
       image: 'textures/jupiter.gif',
       rotationperiod: 9.92,
       period: 11.86,
       radiuse: 71490,
       satellites: 69,
       au: 5.203,
       eccentricity: 0.048,
       velocity: 13.06,
       mass: 317.89,
       inclination: 1.3 },
    Saturn: 
     { radiusp: 54360,
       name: 'Saturn',
       density: 0.69,
       tilt: 26.73,
       image: 'textures/saturn.gif',
       rotationperiod: 10.66,
       period: 29.46,
       radiuse: 60268,
       satellites: 30,
       au: 9.539,
       eccentricity: 0.056,
       velocity: 9.64,
       mass: 95.18,
       inclination: 2.49 },
    Uranus: 
     { radiusp: 24973,
       name: 'Uranus',
       density: 1.29,
       tilt: 97.86,
       image: 'textures/uranus.gif',
       rotationperiod: 17.24,
       period: 84.01,
       radiuse: 25559,
       satellites: 24,
       au: 19.19,
       eccentricity: 0.046,
       velocity: 6.81,
       mass: 14.53,
       inclination: 0.77 },
    Neptune: 
     { radiusp: 24340,
       name: 'Neptune',
       density: 1.64,
       tilt: 29.6,
       image: 'textures/neptune.gif',
       rotationperiod: 16.11,
       period: 164.79,
       radiuse: 25269,
       satellites: 8,
       au: 30.06,
       eccentricity: 0.01,
       velocity: 5.43,
       mass: 17.14,
       inclination: 1.77 },
    Pluto: 
     { radiusp: 'same',
       name: 'Pluto',
       density: 2.03,
       tilt: 122.46,
       image: 'textures/pluto.gif',
       rotationperiod: 153.3,
       period: 248.54,
       radiuse: 1160,
       satellites: 1,
       au: 39.48,
       eccentricity: 0.248,
       velocity: 4.74,
       mass: 0.002,
       inclination: 17.15 } 
  }

//1. console.log the mass of Mercury
//console.log(system.Mercury.mass);
//2. console.log the eccentricity of Venus
//console.log(system.Venus.eccentricity);
//3. console.log the sum of the number of satellites of Jupiter, Saturn, Uranus, and Neptune (131)
jupiterSatellite = system.Jupiter.satellites;
saturnSatellite = system.Saturn.satellites;
uranusSatellite = system.Uranus.satellites;
neptuneSatellite = system.Neptune.satellites;
//console.log(jupiterSatellite + saturnSatellite + uranusSatellite + neptuneSatellite);
//4. Write a conditional that checks if Mercury's radiusp is a string (remember the typeof command). 
if (typeof system.Mercury.radiusp === 'string') {
    //if Mercury's radiusp is a string, change the value to be the same as its radiuse value. (radiusp is radius at the poles, radiuse is radius at the equator).
    system.Mercury.radiusp = system.Mercury.radiuse; 
}
//5. console.log Mercury's radiusp (should be 2439, not 'same').
//console.log(system.Mercury.radiusp);
//6. Find the difference between Jupiter's momentum and Pluto's momentum. (To get momentum, you'll want the product of velocity and mass).
let difference = (system.Jupiter.velocity * system.Jupiter.mass) - (system.Pluto.velocity * system.Pluto.mass);
//console.log(difference);

//Planet X
//Outside of any of these predefined solar system objects, make your own object called PlanetX. Give PlanetX the same properties as a planet within system (eg. density, tilt, mass) and give it made-up values.
const PlanetX = {
    adiusp: 'same ',
    name: 'PlanetX',
    density: 22.5,
    tilt: 7,
    image: 'textures/planetx.gif',
    rotationperiod: 2000,
    period: 0.37,
    radiuse: 7269,
    satellites: 3,
    au: 0.5678,
    eccentricity: 0.971,
    velocity: 13.678,
    mass: 10.974,
    inclination: 16,
}

system.PlanetX = PlanetX;
console.log(system);