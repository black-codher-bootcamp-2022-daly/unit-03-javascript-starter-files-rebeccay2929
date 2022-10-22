// // ****************************************************TASK 1 - OBJECTS****************************************************


const personA = {
    name: 'Bex',
    age: 50,
    location: 'London',
    likes: 'shopping'
};

const personB = {
    name: 'Harry',
    age: 23,
    location: 'Manchester',
    likes: 'fishing'
};

const personC = {
    name: 'TJ',
    age: 70,
    location: 'Bath',
    likes: 'walking'
};
const personD = {
    name: 'Oscar',
    age: 40,
    location: 'Northampton',
    likes: 'shopping'
};

function biography (person) {
return "Hi, my name is " + person.name + ". I am " + person.age + " years old, I live in " + person.location + " and I like " + person.likes + " in my kitchen. "

};

console.log(biography(personC));









// // // ****************************************************TASK 2 - MATHS OPERATORS****************************************************
// // // ***Uncomment the code below to begin the task***

const x = 9;
const y = 4;

const addition = x + y;

console.log("Addition: x + y = " + addition);

const subtraction = x - y;

console.log("Subtraction: x - y = " + subtraction);

const multiplication = x * y;

console.log("multiplication: x * y = " + multiplication);

const division = x * y;

console.log("Division: x + y = " + division);

const modulus = x % y;

console.log("modulus: x % y = " + modulus);

const exponentiation = x ** y;

console.log("exponentition: x ** y = " + exponentiation);

const comparision = x === y;

console.log("comparison: x === y = " + comparision);

const unevenComparision = x !== y;

console.log("unevenComparison: x !== y = " + unevenComparision);

const greaterOrLessThan = x > y;

console.log("Is X greater than Y: x > y = " + greaterOrLessThan);

let a = 3; 
let b = 7;

const increment = a++;

console.log ("increment : a++ = ", increment);

const decrement = b++;

console.log ("decrement : a++ = ", decrement);

// ****************************************************TASK 3****************************************************


const age = 21;
const minimunDrivingAge = 18;
const canIDrive = age > minimunDrivingAge;
console.log (canIDrive);













// // ****************************************************HMWKcalculator****************************************************


function addNumbers (x,y) {
    return x + y
};

function subtractNumbers (x,y) {
    return x - y
};

function multiplyNumbers (x,y) {
    return x * y
};

function divideNumbers(x,y) {
    return x / y
};


const calculator = {
add: addNumbers,
subtract: subtractNumbers,
multiply: multiplyNumbers,
divide: divideNumbers,

};

console.log(calculator.subtract(6,3))


// ****************************************************HMWKwhoIsOlder****************************************************

function whoIsOlder (personA , personB) {
    const aIsOlderThanB = personA.age > personB.age;
    const ageDifference = personA.age - personB.age;
   return `${personA.name} is  ${ageDifference}  years older than ${personB.name}`;

};
console.log (whoIsOlder (personA , personB));