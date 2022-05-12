let cards = [];
let sum = 0;
isAlive = false
hasBlackJack = false
let message = ""
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let messageEL = document.querySelector("#message-el");
/*You can use querySelector instead of getElementsById but make
sure to use a # or . for an id or a class as querySelector is not
specifying that.*/
let playerName = "Yash";
let playerChips = 145

let playerEl = document.getElementById("player-el");
playerEl.textContent = playerName + ": $ " + playerChips;

function getRandomCard(){
  let randomNumber = Math.floor( Math.random()* 13 ) + 1;
  console.log(randomNumber)
  if (randomNumber > 10){
    return 10;
  }else if (randomNumber === 1) {
    return 11;
  } else{
    return randomNumber
  }
}

/* These types of declaration functions no matter written
where in the code are automatically hoisted to the top.
Hence you do not quite have to worry abt using the function
before declaring it.*/

function startGame(){
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  let cards = [firstCard, secondCard]; //array - ordered list of items
  let sum = firstCard + secondCard

 renderGame();
}

function renderGame() {
    if (sum <= 20) {
      message = "Do you want to draw another card?"
    } else if (sum === 21) {
      message = "You have got BlackJack."
      hasBlackJack = true
    } else {
      message = "You're out of the game"
      isAlive = false
    }
    messageEL.textContent = message;
    sumEl.textContent = "Sum: "+ sum;

    cardsEl.textContent = "Cards: "

    for (let i = 0 ; i < cards.length ; i++){
      cardsEl.textContent += cards[i] + " "
    }
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {

  console.log("Drawing a new card from the deck!");
  let card = getRandomCard()
  cards.push(card);
  sum += card
  renderGame()
}

}
