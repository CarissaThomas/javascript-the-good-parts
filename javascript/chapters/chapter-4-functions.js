  //CHAPTER 3: Functions

//Storing the return value of a function in a variable
var add = function (a, b) {
    return a + b;
}

//anonymous function 

function getGuidForSearch() {
    return browser.getCurrentUrl().then(async (url) => {
        let splitUrl = url.split("/")[4];

        return splitUrl;
    });
}

function getGuidForSearch() {
    getGuidForSearch2();
}

function getGuidForSearch2() {
    return browser.getCurrentUrl().then(async (url) => {
        let splitUrl = url.split("/")[4];

        return splitUrl;
    });
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

//Recursion (when a functin calls itself8)
function withRecursion(value) {
    if (value > 0) {
        return withRecursion(value - 1);
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

