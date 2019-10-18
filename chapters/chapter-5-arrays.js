//CHAPTER 5: ARRAYS 

//////Creating an array 
function createAnArray() {
    var cars = new Array("Saab", "Volvo", "BMW");
    var cars2 = [
        "Saab",
        "Volvo",
        "BMW"
    ];

    var arrayWithTwoElements = new Array(40, 100);  // Creates an array with two elements (40 and 100)
    var fortyUndefinedElements = new Array(40);  // Creates an array with 40 undefined elements !!!!!
}


//////Finding an item in an array

function findItemsInArray() {
    var array = [10, 20, 30, 40, 50];

    var found = array.find(function (element) {
        return element > 20;
    });

    console.log(found);
}

function findItemInArray2() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var a = fruits.indexOf("Apple");

    if (a != -1) {
        return true
    } else {
        return false
    }
}

function findItemInArray3(myFruit) {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];

    for (let index = 0; index < fruits.length; index++) {
        const element = array[index];

        if (element == myFruit) {// if an element in the array matches our parameter then return it 
            return element
        }

    }
}

////////Removing elements from array 

function removeItemFromArray(myFruit) {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    var removed = arr.splice(2, 2);

    /*
    removed === [3, 4]
    arr === [1, 2, 5, 6, 7, 8, 9, 0]
    */
}


function removeItemFromArray(myFruit) {
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    var filtered = array.filter(function (value, index, arr) {
        return value > 5;
    });

    //filtered => [6, 7, 8, 9]
    //array => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
}


//////Comparing arrays 

function areArraysIdentical() {
    var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    if (arr1.length !== arr2.length) {
        return false;
    }
    for (var i = 0, len = arr1.length; i < len; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}


function findMatchingElementsInArray() {
    var matches = [];
    var a = ["dr.phil", "hulk hogan", "kim k", "obama"];
    var b = ["oprah", "hulk hogan", "trump", "kim k"];

    for (var i = 0; i < a.length; i++) {
        for (var e = 0; e < b.length; e++) {
            if (a[i] === b[e]) matches.push(a[i]);
        }
    }
    return matches;
}