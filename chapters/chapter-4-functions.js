//CHAPTER 3: Functions

//Storing the return value of a function in a variable
var add = function (a, b) {
    return a + b;
}

//Scope: Controls the visibility and lifetime of variables and parameters

// code here can NOT use localScope
function myFunction() {
    var localScope = "Volvo";
    console.log(localScope);
    // code here CAN use localScope
}

var globalScope = "Volvo";
// code here can use globalScope
function myFunction() {
    // code here can also use globalScope
    console.log(localScope);
}

//Recursion
function withRecursion(value) {
    if (value > 0) {
        return countdown(value - 1);
    } else {
        return value;
    }
};

function withoutRecursion(value) {
    while (value > 0) {
        value - 1;
    }
    return value;
}

//Cascade functions
var string = 'string cheese';  
string.split('').reverse().join();

