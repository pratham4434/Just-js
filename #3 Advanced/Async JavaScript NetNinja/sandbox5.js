// async and await
// https://www.youtube.com/watch?v=CWjNefiE47Y&list=PL4cUxeGkcC9jx2TTZk3IGWKSbtugYdrlu&index=10&ab_channel=TheNetNinja

const getTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    
    if (response.status !== 200){
        throw new Error('cannot fetch the data');
    }

    const data = await response.json();
    return data;

};

getTodos()
    .then(data => console.log ('resolved:', data))
    .catch(err => console.log ('rejected:', err.message));