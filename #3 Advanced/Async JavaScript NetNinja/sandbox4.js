// fetch api

fetch('https://jsonplaceholder.typicode.com/todos/').then((response) => {
    console.log('resolved', response);
    return response.json();
}).catch(err => {
    console.log('rejected',err);
});