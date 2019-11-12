//CHAPTER 3: OBJECT EXERCIES

//1. Write a function that creates an object with 3 properties that holds values for a person's weight, height, and eye color
function propertiesObject() {
    let propObj = {
        weight: "", 
        height: "", 
        eyeColor: ""
    };
    return propObj;
}

//2. Write a function that dynamically creates an object's properties and values using parameters.
function createObject(key, value) {
    let propObj = {};
    propObj[key] = value;

    return propObj;
}

//3. Write a function that updates an existing value of an object with a new value based on if the input is NOT a blank string

function thisOneIsJustNotCool() {
    let propObj = {
        dogName: "", 
        catName: "", 
        birdName: "Freddie"
    };

    Object.keys(propObj).forEach(function(value) {
        if (propObj[value].length >= 1) {
            propObj[value] = "New Value"
        }
    });

    return propObj;
}

console.log(thisOneIsJustNotCool());

//4. Write a function that iterates through an object and delete a key if it matches with a passed in parameter

function thisIsHard(passedInParameter){
    let propObj = {
        firstName: "Gabrielle", 
        lastName: "Gulczynski"
    };

    Object.keys(propObj).forEach(function(value) {
        if (passedInParameter === propObj[value]) {
            delete propObj[value];
        }

    });

    return propObj;
}

//5. Write a function that creates an object that holds 5 integer values.  Iterate through the object and return the sum of those values.

function stillHard() {
    let propObj = {
        keyOne: 1, 
        keyTwo: 2, 
        keyThree: 3, 
        keyFour: 4, 
        keyFive: 5
    };

    let total = 0;

    Object.keys(propObj).forEach(function(value) {
        total = total + propObj[value]
    });

    return total;

}

