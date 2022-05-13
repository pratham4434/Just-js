let message = "";
let randomNumber1;


const inputEl = document.getElementById("input-el");
console.log(inputEl);

let messageEL = document.getElementById("message-el");
console.log(messageEL);

function generateRandomNum(){
  let randomNumber = Math.floor(Math.random()*100) + 1;
  console.log(randomNumber);
  randomNumber1 = randomNumber;
}

function checkNumber(){
  if (inputEl === randomNumber1 )
  {
    message = "Bingo! You've guessed it right!";
  }
  else if (inputEl > randomNumber1)
  {
    message = "Hint : The number is actually lesser than this";
  }
  else if (inputEl < randomNumber1)
  {
    message = "Hint : The number is actually greater than this";
  }
  messageEL.textContent = message;

}
