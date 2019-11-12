//1)Create a basic generator. It will return 1,2 and 3. With last one done will be true.
function* generator(){
    yield 1;
    yield 2;
    return 3;
}

//2)Create a variable to assign generator.
let final= generator();

//3)Call next() and assign it to variable. Log variable to console.
let secondStep = final.next();
console.log(secondStep);

//4)Do same thing on number 3 with different names 2 times more.
let threeTime = final.next().value;
console.log(threeTime);

let forthTime = final.next();
console.log(forthTime);

//5)Create another generator with same content.
function* generatorTwo(){
    yield 'a';
    yield 'b';
    yield 'ab';
}
//6)Create a variable to assign this generator.
let letter = generatorTwo();

//7)Create for...of and use this variable as source.
for (let value of letter){
    console.log(value);
}
//8)Change return with yield on last generator and check again the console.
    //a
    //b
    //ab

//9)Create array typed variable and assign last generator to this array with spread operators.
let letterArray= [...generatorTwo()];
//10)Log to the console last variable.
console.log(letterArray);

//11)Create a generator function with these 2 parameters: start and end.
function* generatorPar(start,end){
    for(i=start; i<= end; i++){
        yield i;
    }
}
//12)Create another generator. This will use last generator as yield 2 times. First time, start: 48, end end:52 Second time, start: 97, end end:110
function* generatorTimer(){
    yield* generatorPar(48,52);
    yield* generatorPar(97,110);
}

//13) create a variable and name it password. Define it empty as default.
let password = '';

//14)Create a for...of use last generator as source.
    for(let code of generatorTimer()){
        password += String.fromCharCode(code);
    }
//15)Add all yields to password.
console.log(password);