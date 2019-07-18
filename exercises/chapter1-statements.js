//CHAPTER 1: STATEMENT EXERCIES

//1. Write a function that takes a string as a parameter and console logs whether or not the parameter is equal to 'cat'

function cats(text) {
    if (text === 'cat') {
        console.log('correct!')
    }
}

//2. Write a function that takes a song name and console logs the corresponding artist (3 possible cases)

function whoIsTheArtist(song) {
    switch (song) {
        case "Cuz I Love You":
            console.log('The artist who sings that song is Lizzo!');
            break;
        case "Money":
            console.log('The artist who sings that song is Cardi B!');
            break;
        case "Work It":
            console.log('The artist who sings that song is Missy Elliott!');
            break;
        default:
            console.log("I'm sorry, I don't know who sings that song.");
    }
}

//3. Write a function with a for loop that takes an array of integers as a paramter and console logs every array integer + 1
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function forLoopsAreSoCool(array) {
    for (i = 0; i < array.length; i+1) {
        const number = array[i];
        console.log(number);
    }
}

//4. Write a function with a while loop that breaks once a string reaches a length bigger than 6 

function whileLoopsYay() {
    let x = 0;

    while (x < 6) {
        x++;
        console.log(x + ' is less than or equal to 6');
    }

    console.log('x is larger than 6');
}

//5. Write a function with a for each loop that takes an array of integers as a parameter.  Add together every element in the array and return the sum. 

let arrayForEach = [1, 2, 3, 4, 5, 6];

function forEachLoopsWooHoo(array) {
    let total = 0;
    array.forEach(element => {
     total = total+element; //this can also be written as total+=element
            
    })
    console.log(total)
    return total
}

//6. Write a function with a for loop that takes an array of strings as a parameter that breaks once a specific string is found

let textArray = ['one', 'two', 'three', 'four', 'five'];

function forLoopBreak(array) {
    for (i = 0; i < array.length; i++) {
        const number = array[i];
        console.log(number);

        if (number === 'four') {
            break;
        }
    }

}

//7. Write a function that throws an error if two string parameters are exactly the same

function throwError(string1, string2) {
    if(string1 === string2) {
        throw "these strings are the same"
    }
}
