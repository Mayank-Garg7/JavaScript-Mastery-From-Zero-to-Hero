// hoisting is the part of memroy creation in js before executing the code js create a structure for memory like time of memory create functions are fully hoisted and fully stored var is assigned as undefined and let and const are also hoisted but they are still in tdz(temporal dead zone) so if you will access the value of them they will give you:- 
// var = undefined
// let and const = ReferenceError
// function = result // because functions are fully hoisted

// example: -


console.log(a)
// console.log(b)
// console.log(c)
console.log(greet())
var a = 5;
let b = 10;
const c = 7;
function greet(){
    return "good morning!"
}

// line 9 will execute correctly and give us undefined line 10 & 11 will give ReferenceError and line 12 will print good morning!