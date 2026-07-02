// execution in js is done in two phases 
// 1. memory creation phase
// 2. code execution phase

// before execute the code js scan it to create memory 
// for example:-

// code:- 
let a = 10;
function product(x){
    return x*x
}
let b = 20
console.log(product(a+b))

// memory creation phase:- 

// a = undefined
// add = function(){...}
// b = undefined

// code execution phase:-
// a = 10   // in memory a = 10
// ad function // nothing changed because already stored entire function in memory
// b = 20    // b = 20

// Interview Questions
// javaScript first create an execution context. It perform memory creation phase where memory is allocated to the variables and functions, followed by code exection phase where code run line by line.