
// // HTTP request
//  //- Make HTTP requests to get data from another server
//  //- We make these requests to API endpoints
// //////////////////////////////////////////////////////////////////////////
 

// // We have CREATED a request for data #1
//   const request = new XMLHttpRequest();

  


//  request.addEventListener('readystatechange', () => {
//     // console.log(request, request.readyState);
//     if(request.readyState === 4 && request.status === 200){
//         console.log(request.responseText)
//     }
//     else if( request.readyState === 4 )
//     console.log('could not fetch the data')
//  });


//  // We have CREATED a request for data #2
//  request.open('GET','https://jsonplaceholder.typicode.com/todos/')
//  // We have SENT the request for the data
//  request.send();

//  /* 

//   // We are now adding an event listener to listen to any steady state change
//   // and the console log it out (there are 5 state changes starting from 0 to 4)

//  Event listener me ham bas steady state check kr rhe hai
//  jo ki kaafi nahi hai ye batane ke liye ki data fetch hua hai
//  ya nahi, isiliye hmlog uske saath me ab uska status bhi check
//  krenge taaqi pata chale ki fetching successful tha ya nahi
 
//  100 range wla - processing and information responses
//  200 range wla - success
//  300 range wla - redirection messages
//  400 range wla - client  ke taraf se error
//  500 range wla - server ketaraf se error

//  */

const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange',() => {
      console.log(request, request.readyState)
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            // console.log(request.responseText);
            callback(undefined,data);
        }
        else if (request.readyState === 4){
            // console.log('Could not fetch data');
            callback('could not fetch data', undefined);
        }
    });
    
    // request.open('GET',"todos2.json");
    request.open('GET','https://jsonplaceholder.typicode.com/todos/');
    
    request.send();
}

getTodos((err, data) => {
    if(err){
    console.log(err); 
    }
    else{
    console.log(data);
    }
})