
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

/*The main differnce between a const and a let variable is
that value for a const variable cannot be reassigned*/

inputBtn.addEventListener("click",function(){
  myLeads.push("www.awesomelead.com")
  console.log(myLeads);
})
