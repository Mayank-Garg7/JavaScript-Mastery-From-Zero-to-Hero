// lexical environment means scope of a function is determine from where it is declared instead of where it is called for example: - 
var x = 100 
function outer(){
    var x = 150;
    inner()
}
function inner(){
    console.log(x)
}
outer()

// in the above example it will print 100 instead of 150 because its scope will be determine from where it is declared instead of where it is called so it will check the varibale in local then it will check in gloabal scope but it will not check in sibling's scope

