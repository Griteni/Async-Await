//1) create a normal function and reurn some text
function Text(){
    console.log('Proviamo questo task');
}
Text();

//2) convert this function to promise with "async"
async function TextTwo(){
    return Promise.resolve('Another Text to return with async');
}
TextTwo().then(console.log);

//3) create another function with async
//4)Return a promise object obviously. This object will contain same message.
async function Math(){
    if (2+5 ===7){
        return Promise.resolve('true');
    }else{
        console.log('error');
    }
}
Math().then(console.log);

//5)Compare these 2 functions. To do this log to console what returned from functions
let firstFun = TextTwo();
let secondFun = Math();
console.log(firstFun, secondFun);

//6)Create a function and into this create a promise. Assign this promise to a variable. This promise on resolve should contain a timeout function to return a message after 3 seconds.
//9)Use await on number 6 and check the change on console.
async function Message(){
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('Ciao!'), 2000);
    }) 
    let result = await promise;
    alert(result);
}
Message();

//7)Define a new variable into function. Assign output of promise on number 6.
 async function anotherPromise(){
    let secondPro = await Message();
    return alert.secondPro;
}
anotherPromise('sono enrica');

//10)Take off async from last function and check console again.
//Error

//Create again show avatar without looking your code. Just use these information: fetch(https://api.github.com/users/{&username}); create an img on html file yourself and give an id set src for this img from JS file like this: img.src = githubUser.avatar_url;
async function gitAvatar(){
    let askGithub= await fetch('http://api.github.com/users/enri-git');
    let githubUser = await askGithub.json();
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = 'promise-avatar';
    document.body.append(img);

    return githubUser;
}
gitAvatar();

//12) Create a function with "async" and into that create try & catch blocks. On try, try to fetch data from "http://no-such-url" On catch, alert this message: "There is no such a url!"
async function tryCatch(){
    try{
        let dataTake = await fetch('http://no-such-url');
    }catch(error){
        alert('There is no such a url!');
    }
}
tryCatch();




