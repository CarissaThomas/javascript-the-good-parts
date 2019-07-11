//CHAPTER 1: STATEMENTS

//////////////////Logic statements///////////////////////

//if statement
function ifStatement(x) {
    if (x == 3) {
        console.log("ifStatement: true");
    } else {
        console.log("ifStatement: false");
    }
}

//if else statement
function elseIfStatement(x) {
    if (x == 3) {
        console.log("ifElseStatement: x equals 3");
    } else if (x == 2) {
        console.log("ifElseStatement: x equals 2");
    }
}

//case switch statement
function switchStatement(animal) {
    switch (animal) {
        case "dog":
            console.log("disruptiveBreakStatement found: ", 'woof woof');
            break;
        case "cat":
            console.log("disruptiveBreakStatement found: ", 'meow');
            break;
        case "bird":
            console.log("disruptiveBreakStatement found: ", 'chirp chirp');
            break;
        default:
    }
}

//////////////////Loop statements///////////////////////

//for loop
function forLoopStatement(array) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log("forLoopStatement: ", element);
    }
}

//while loop
function whileLoopStatement() {
    var x = 0;

    while (x < 5) {
        x++;
        console.log("whileLoopStatement: x is still smaller than 5");
    }
    console.log("whileLoopStatement: x is larger than 5");
}

//do while loop
function doWhileLoopStatement() {// do executes before the while, will always be executed at least once, even if the condition is false
    var i = 0;
    do {
        console.log("doWhileLoopStatement: ", i);
        i++;
    }
    while (i < 5);
}

//foreach loop
function foreachLoopStatement(array) {
    array.forEach(element => {
        console.log("foreachLoopStatement :", element);
    });
}

//////////////////Disruptive statements///////////////////////

//break statement 
function disruptiveBreakStatement() {
    for (i = 0; i < 10; i++) {
        if (i === 3) {
            break;
        }
    }
}

//continue statement 
function disruptiveContinueStatement() {
    for (i = 0; i < 10; i++) {
        if (i === 3) {
            continue;
        }
    }
}

//return statement
function disruptiveReturnStatement(x) {
    console.log("disruptiveReturnStatement: ", x);
    return x;
}

//////////////////Erroring statements///////////////////////

//throw statement - used for erroring
function disruptiveThrowStatement() {
    if (x === 3) {
        throw "x must equal 3"
    }
}

//try and catch - used for erroring
function disruptiveTryCatchStatement() {
    try {
        nonExistentFunction();
    }
    catch (error) {
        console.error(error);
        // expected output: ReferenceError: nonExistentFunction is not defined
        // Note - error messages will vary depending on browser
    }
}
