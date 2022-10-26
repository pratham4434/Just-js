console.log("Callbacks Function");

 const students = [
     {name : "Pratham" , stream: "DS"},
     {name : "Nikhil" , stream: "AIML"}
 ];

 function enrollStudent (student, callback){
    setTimeout(function(){
        students.push(student);
        console.log("Student has been enrolled");
        callback();
    }, 1000);
 }

 function getStudents (){
    setTimeout(function(){
        let str = "";
        students.forEach(function(student){
            str += `<li>${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students has been fetched")
    }, 5000);

 }

 let newStudent = { name : "Vatsa", stream :"DS"}

 enrollStudent(newStudent, getStudents);
//  getStudent();


///////////////////////////////////////////////////////////////////////////
// ul class people wala callback part frm net ninja

// get a reference to ul
 const ul = document.querySelector(".people");
 const people = ['mario','luigi','ryu','shaun','chun-li'];

 let html = ``;

 people.forEach(function(person){
    html += `<li style="color: purple">${person}</li>`
 });

 ul.innerHTML = html;