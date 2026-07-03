// Hoisting is JavaScript's behavior during the memory creation phase (before code execution), where declarations are processed and added to memory. Different kinds of declarations are hoisted differently.like at the time of memory create Function declarations are fully hoisted, meaning their complete function definition is stored in memory before execution begins. var is assigned as undefined and let and const are also hoisted but They are not initialized during the memory creation phase. From the beginning of their scope until their declaration is reached, they stay in the Temporal Dead Zone (TDZ). so if you will access the value of them they will give you:- 
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