function sum (a, b) {
    return a + b
}

let sum2 = (a,b) => {
    return a+b;
}



function isPositive(number) {
    return number >= 0
}

let isPositive2 = (number) => {
    return number >= 0
}

function randomNumber(){
    return Math.random
}

let randomNumber2 = () => {
    return Math.random;
}

document.addEventListener('click', function(){
    console.log('click')
})

document.addEventListener('click', () => {
    console.log('click')
})

//--------------------------------------------

greet();  // this will run completely fine as function declarations are hoisted at the top.
speak();  // This will throw an error as function expressions are not hoisted at the top.



// function declaration
function greet(){
    console.log('Hello there!');
}

// function expression
const speak = function(){
    console.log('good day');
}

const speak2 = function(name){
    console.log(`good day${name}`);
}


// difference between methods and functions
const name = 'shaun';

// functions
const greet2 = () =>'hello';
let resultOne = greet2();
console.log(resultOne);

// methods
let reultTwo = name.toUpperCase();
console.log(resultTwo); 


