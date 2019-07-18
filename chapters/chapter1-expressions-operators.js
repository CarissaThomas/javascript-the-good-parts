//CHAPTER 1: Operators and Expressions 
//Operators: the basic building blocks of code
//Expressions: An expression is any valid unit of code that resolves to a value.


////////Assignment Operators

function assignment() {
    var x = 3;
}

//Addition
function assignmentAddition(x, y) {
    var total = x += y; // x = x + y;
    console.log("assignmentAddition: ", total);
}

//Subtraction
function assignmentSubtraction(x, y) {
    var total = x -= y; // x = x - y;
    console.log("assignmentSubtraction: ", total);
}

//Multiplication
function assignmentMultiplication(x, y) {
    var total = x *= y; // x = x * y;
    console.log("assignmentMultiplication: ", total);
}

//Division
function assignmentDivision(x, y) {
    var total = x /= y; // x = x / y;
    console.log("assignmentMultiplication: ", total);
}

//Remainder 
function assignmentRemainder(x, y) {
    var total = x %= y; // x = x / y;
    console.log("assignmentRemainder: ", total);
}

////////Comparison Operators

//Equal 
function assignmentEqual(x, y) {
    if (x === y) {
        console.log("assignmentEqual: these parameters are the same");
    }
    console.log("assignmentEqual: these parameters are different");
}

//Not Equal 
function assignmentNotEqual(x, y) {
    if (x !== y) {
        console.log("assignmentNotEqual: these parameters are different");
    }
    console.log("assignmentNotEqual: these parameters are the same");
}

//Greater than less than
function assignmentGreaterThanLessThan(x, y) {
    if (x > y) {
        console.log("assignmentGreaterThanLessThan: x is greater than y");
    }

    if (x < y) {
        console.log("assignmentGreaterThanLessThan: x is less than y");
    }
}

//Greater than less than or equal to
function assignmentGreaterThanLessThanOrEqualTo(x, y) {
    if (x >= y) {
        console.log("assignmentGreaterThanLessThanOrEqualTo: x is greater or equal to y");
    }

    if (x <= y) {
        console.log("assignmentGreaterThanLessThanOrEqualTo: x is less than or equal to y");
    }
}

//and
function assignmentAnd(x, y) {
    if (x >= y && x != 0) {
        console.log("assignmentAnd: x is greater or equal to y and not equal to 0");
    }
}

//or
function assignmentOr(x, y) {
    if (x >= y || x == 0) {
        console.log("assignmentAnd: x is greater or equal to y or x is equal 0");
    }
}

//Ternary
function assignmentTernary(x, y) {
    var isGreater = (x > y) ? console.log("assignmentTernary: x is greater than y") : console.log("assignmentTernary: x is less than y");
}



