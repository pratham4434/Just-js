//  document.getElementById("count-el").innerText = 5
//---------------------------------------------------------

// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let welcomeEl = document.getElementById("welcome-el")

let count = 0;

function increment() {
  count = count + 1;
  countEl.innerText = count;
  // console.log("The button was clicked")
}

function save() {

  let countStr = count + " - ";
  saveEl.textContent += countStr; // saves the existing content
  // saveEl.innerText = countStr; // doesn't save the existing content

  console.log(count);
  // to initialize from zero again we can do this
  count = 0;
  countEl.textContent = 0;
  // 1. for 'prev entries' create a variable that contains both the count and the dash separator.
  // 2. Render the variable in the saveEl using innerText.
  // Make sure to not delete the existing content of the paragraph.

}

let name = "Pratham Sharma"
let greeting = "Welcome Back "
welcomeEl.innerText = greeting + name;
// welcomeEl.innerText += " 👀";
