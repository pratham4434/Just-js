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
