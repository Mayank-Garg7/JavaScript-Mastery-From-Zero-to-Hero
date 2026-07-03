// closure in js is nothing but an inner function remember the variable from outer function even after the execution of outer function is closure. 
// Example:-

var a = 10;
function outer(){
    var b = 20;
    function inner(){
        console.log(b)
    }
     inner()
}
outer()
console.log(a)

// in the aobove example the outer function has removed from the call stack but inner function has remember the reference of that variable and can acess the value of b so instead of printin undefined in the console it will print 20. so the final output will be:-
// 20 
// 10