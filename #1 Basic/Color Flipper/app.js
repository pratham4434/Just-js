const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

/* Now we are going to add an event listener for the
   button so that whenever the button has been clicked, 
   it targets the body*/

   btn.addEventListener("click", function(){
    /*Here we are trying to generate a random number, jo ki 
      color.length ke range me lie krta ho, and then we are
      changing the color*/ 

      const randomNumber = Math.floor(Math.random() * colors.length);
       document.body.style.backgroundColor = colors[randomNumber];
       color.textContent = colors[randomNumber];

   })