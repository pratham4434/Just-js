
let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

// // 1. Turn the myLeads string into an array.
// myLeads = JSON.parse(myLeads)
// // 2. Push a new value to the array.
// myLeads.push("www.lead2.com")
// // 3. Turn the array into string again.
// myLeads = JSON.stringify(myLeads)
// // 4. Console.log the string using typeof to verify that it's a string.
// console.log(typeof myLeads)

tabBtn.addEventListener("click", function(){

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    localStorage.setItem( "myLeads", JSON.stringify(myLeads) )
    myLeads.push(tabs[0].url)
    render(myLeads)
  })

})


deleteBtn.addEventListener("dblclick",function(){
  localStorage.clear()
  myLeads = []
  render(myLeads)
})

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
console.log(leadsFromLocalStorage)

if (leadsFromLocalStorage){
  myLeads = leadsFromLocalStorage
  render(myLeads)
}

function render(leads){
  let listItems = ""
  // forloop that logs out all the data in myLeads array.
  // Here, we call the i as the iterator.
  for(let i = 0; i < leads.length; i++ ){
  //  listItems += "<li><a  target = '_blank' href ='" + myLeads[i] + "'>"  + myLeads[i] + "</a></li>";
  listItems += `
                <li>
                  <a target = '_blank' href ='${leads[i]}'>
                      ${leads[i]}
                  </a>
                </li>
                `
  }
  ulEl.innerHTML = listItems;
}
/* The main difference between a const and a let variable is
that value for a const variable cannot be reassigned*/

/* The addEventListener() method attches an event handler to an
 element without overwriting existing  event handlers. You can
 add many event handlers of the same type to one element, eg.
 two click events*/

inputBtn.addEventListener("click",function(){
  myLeads.push(inputEl.value)
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads);

  console.log( localStorage.getItem("myLeads"))
})
