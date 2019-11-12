/* 

I generators calcolano i loro valori solo quando vengono effettivamente richiesti, il che gli permette di rappresentare sequenze che sono troppo onerose da calcolare, o perfino sequenze infinite.

Il metodo next() accetta anche un valore che può essere utilizzato per modificare lo stato interno di un generatore. Un valore passato a next() sarà trattato come il risultato dell'ultima espressione yield che ha messo in pausa il generator.
*/

function* generator(){
    yield 1;
    yield 2;
    return 3;
} 

let result = generator();
let first = result.next();
console.log(first);

let second = result.next();
console.log(second);

let third = result.next().value;
console.log(third);

let forth = result.next();
console.log(forth);


//We can use all benefit of iterables with generators. 
function* secondGenerator(){
    yield 1;
    yield 2;
    yield 3; // If you use return it does not seen on for..of 
}

let secondResult = secondGenerator();

for(let value of secondResult){
    console.log(value);
}

//We can use spread operators with generators, because of it´s iterable
let thirdResult = [...secondGenerator(),4,5]; //the ... => are the spread 
console.log(thirdResult);

//You can use 'generators' instead of 'iterables'.

function* generateSequence(start,end){
    for(let i = start; i <= end; i++){
        yield i;
    }
}

function* generatePassword(){
    //0-9
        yield* generateSequence(48, 57);
        yield* generateSequence(65, 90);
}

let password = '';

for(let code of generatePassword()){
    password += String.fromCharCode(code);
}
console.log(password);

//Send parameter to next()

function* myGenerator(){
    let result = yield '5 + 6?'

    console.log(result);
}
let myResult = myGenerator();

let question = myResult.next().value; //yield returns the value (question)
console.log(question);

myResult.next(12);// pass parameter into generator

//throw error
function* gen()
{
    try{
        let result = yield '2+3?';
        console.log('this is not executed');
    } catch(error){
        console.log('An error ocurred', error);
    }
}

let lastGenerator = gen();
let q = lastGenerator.next().value;

lastGenerator.throw(new Error('there is no answer'));
