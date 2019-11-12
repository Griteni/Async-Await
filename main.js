//Chapter 1: Async
/*Async changes behavior of normal function to promises
'async' keyword directs Javascript to automatically wrap that value in a resolved promise.
*/

/* In particolare, la parola chiave async consente di dichiarare 
una funzione come asincrona */

async function f() {
    return 'Hello world'    
}
//without 'async', next line throws error.
f().then(console.log);

//with async we can return obviously Promise.
async function fx(){
    return Promise.resolve('hello');
}
fx().then(console.log);


//Chapter 2: "await"

/* La parola chiave AWAIT sospende l’esecuzione di una funzione in attesa 
che la Promise associata ad un’attività asincrona venga risolta o rigettata. */
async function myFirstAwait(){
    let promise = new Promise((resolve,reject) => {
        setTimeout(()=> resolve('done!'), 2000);
    });

    let result = await promise;
    alert(result);
}
myFirstAwait();


/*ASYNC e AWAIT si basano sul meccanismo delle Promise 
e il loro risultato è compatibile con qualsiasi API che utilizza le Promise.*/

// function testAwait(){
//     let promise = Promise.resolve('New Dome');
//     let result = await promise;
//     console.log(result);
// }
// testAwait();  //without async can not work

async function showAvatar(){
    let githubResponse = await fetch('https://api.github.com/users/enri-git');
    let githubUser = await githubResponse.json();

    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = 'promise-avatar-example';
    document.body.append(img);

    await new Promise((resolve, reject)=> setTimeout(resolve,3000));

    //img.remove();
    return githubUser;
}
showAvatar();

/* async()=> {
    let githubResponse = await fetch('https://api.github.com/users/enri-git');
    let githubUser = await githubResponse.json();
} //It works also like that using a call-back*/ 


//Error Handling
async function awaitWithError(){
    await Promise.reject(new Error('Whooops!'));
}
awaitWithError();

async function awaitError(){
    throw new Error('Whoops 2!');
}
awaitError();

async function errorTryCatch(){
    //Js will try to run 'try' block. If there is an error on any line.Catch block will run
    try{
        let response = await fetch('http://no-such-url');
    }catch(error){
        console.log(error);
    }
    
}
errorTryCatch();


async function errorCatch(){
    let response = await fetch('http://no-such-url');
}
errorCatch().catch(alert);

/* 
wait for the array of results
let result  = await Promise.all([
    fetch(url1),
    fetch(url2),
    ...
]);
*/