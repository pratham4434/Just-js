
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
console.log(ulEl);

/*The main difference between a const and a let variable is
that value for a const variable cannot be reassigned*/

inputBtn.addEventListener("click",function(){
  myLeads.push(inputEl.value)
  renderLeads();
  inputEl.value = "";
})

function renderLeads(){
  let listItems = ""
  // forloop that logs out all the data in myLeads array.
  // Here, we call the i as the iterator.
  for(let i = 0; i < myLeads.length; i++ ){
  //  listItems += "<li><a  target = '_blank' href ='" + myLeads[i] + "'>"  + myLeads[i] + "</a></li>";
  listItems += `
                <li>
                  <a target = '_blank' href ='${myLeads[i]}'>
                      ${myLeads[i]}
                  </a>
                </li>
                `

  console.log(listItems)
  }
  ulEl.innerHTML = listItems;
}
