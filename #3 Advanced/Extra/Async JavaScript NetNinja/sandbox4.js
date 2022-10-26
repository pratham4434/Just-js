// fetch api

fetch('https://jsonplaceholder.typicode.com/todos/').then((response) => {
    console.log('resolved', response);
    return response.json();
    /* We cannot equate this to any const variable as
    this method returns a promise which takes a while 
    to fetch its data */
    
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log('rejected',err);
});


// first of all we fetch the data
// then we take the response and change it to a promise
// we use .then method to fire the data