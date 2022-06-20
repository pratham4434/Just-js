randomNumber1 = Math.floor(Math.random() * 6)+ 1;
randomNumber2 = Math.floor(Math.random() * 6)+ 1;

console.log(randomNumber1)
console.log(randomNumber2)


let x = "images/dice" + randomNumber1 + ".png";
let y = "images/dice" + randomNumber2 + ".png";
    
// window.onload = function() {
//     document.getElementById("myImg").src = x;
// }

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", x )
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", y )

if (randomNumber1 > randomNumber2){
   let text1 = document.querySelector("h1")
   text1.innerText ="Player 1 won"
}
else if (randomNumber1 === randomNumber2){
    let text2 = document.querySelector("h1")
    text2.innerText ="Try again"
}
else {
    let text3 = document.querySelector("h1")
    text3.innerText ="Player 2 won"
}