/*
//// synchronous ////

console.log(" I ");
console.log(" eat ");
console.log(" ice cream ");
console.log(" with a ");
console.log(" spoon ");


//// asynchronous ////

console.log(" I ");
console.log(" eat ");
setTimeout(() => {
    console.log(" ice cream ");
}, 4000);
console.log(" with a ");
console.log(" spoon ");

*/

// we are going to make an object
let stocks = {
Fruits : ["strawberry","grapes","banana","apple"],
liquid : ["water", "ice"],
holder : ["cone","cup","stick"],
toppings : ["chocolate", "peanuts"],
};

let order = ( Fruit_name, call_production) => {
    setTimeout(()=>{
console.log(`${stocks.Fruits[Fruit_name]}`);
    },2000);

    
    call_production();
};

let production = () => {
    
};


order("0",production)