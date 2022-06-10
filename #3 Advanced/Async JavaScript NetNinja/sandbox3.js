
// const getSomething = (() => {
//     return new Promise (( resolve, reject ) => {
//              // // fetch something
//         resolve('some good data');
//              // // reject('some err data');
//     });
// });

            //     // getSomething().then((data) => {
            //     //     console.log(data);
            //     // },(err) => {
            //     //     console.log(err);
            //     // });

//     getSomething().then(data => {
//         console.log(data);
//     }).catch(err => {
//         console.log(err);
//     });


    const getTodos = (callback) => {

        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
    
            request.addEventListener('readystatechange',() => {
            console.log(request, request.readyState)
                if(request.readyState === 4 && request.status === 200){
                    const data = JSON.parse(request.responseText);
                    // console.log(request.responseText);
                    resolve(data);
                }
                else if (request.readyState === 4){
                    // console.log('Could not fetch data');
                    reject('error getting resource');
                }
            });
            
            // request.open('GET',"todos2.json");
            request.open('GET','https://jsonplaceholder.typicode.com/todos/');
            
            request.send();
        });
        
    };
    
    getTodos((err, data) => {
        if(err){
        console.log(err); 
        }
        else{
        console.log(data);
        }
    })