//Reduce
const classArray = ['Javascript', 'HTML', 'CSS', 'Data Analysis', 'Marketing', 'Database Design', 'Visual Design'];

const numberArray = [31, 203, 30, 84, 5, 62, 770, 8, 99, 10, 0];

const sum = numberArray.reduce((a, c) => {
    return a + c;
})

console.log(sum);

const classArray2 = classArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 'something to show')

console.log(classArray2);