//1. Write a for loop that multiplies every value in an array and returns the total
let arrayForEach = [1, 2, 3, 4, 5, 6];

function forEachLoopsWooHoo(array) {
    let total = 1;
    array.forEach(element => {
     total = total*element; //this can also be written as total*=element
            
    })
    console.log(total)
    return total
}
//2. Write a function that tests if a parameter is even using the remainder (%) operator

function isEven(x) {
    if(x % 2 === 0) {
        console.log(x + ' is even!');
    } else {
        console.log(x + ' is NOT even!');
    }
}


//3. Write a function that returns true if the 1st parameter is greater than or equal to the 2nd paramter AND the 1st paramter is not greater than 5

function usingAndOperator(x,y) {
    if((x >= y || x === y) && x < 5) {// GREATER THAN OR EQUAL IS EXPRESSED WITH >=  YOU DO NOT NEED THE OTHER || X === Y STATEMENT
        console.log('That is true!'); // you can also just write this as return true
    } else {
        console.log('That is false!');
    }
}

//4. Write a function that returns false if the 1st parameter is less than or equal to the 2nd paramter OR the 1st paramter is greater than 21
function usingOrOperator(x,y) {
    if(x <= y || x > 21) {
        console.log('That is false!'); // you can also just write this as return true
    } else {
        console.log('That is true!'); // you can also just write this as return true
    }
}

//5. Write a function using a ternary operator that checks if a string's length is longer than 5
function usingTernary(input) {
    let isLonger = (input.length > 5) ? console.log(input + ' is longer than 5') : console.log(input + ' is shorter than 5');
}

//6. Write a function with a while loop that runs as long as y is less than 3 (tip: dont let the loop run forever)
function whileLoopsYay() {
    let y = 0;

    while (y < 3) {
        y++;
        console.log(y + ' is less than 3');
    }
    console.log(y + ' is greater than or equal to 3, the loop is over!');
}


//7. Write a function that iterates through an array of integers and checks if each integer has a remainder.  If there is a remainder add it to a total.  Return the total.

let testArray = [1, 2, 3, 4, 5, 6, 7];
console.log(remaindersAreHard(testArray));
// function remaindersAreHard(integerArray) {
//     let total = 0;
//     for(i=0; i <= integerArray.length; i++) {
//         if (i %2 !== 0) {
//             total = i++;
//         }

//     }

//     console.log(total)
// }

function remaindersAreHard(integerArray) {
    var total = 0;

    for(var i = 0; i < integerArray.length; i++) {//be careful, you need to use a < in your for loop not <= 
        if (integerArray[i] % 2 !== 0) {//integerArray[i] gives us the actual value in the array vs i is just the index number (i.e. 0, 1, 2, 3, 4, 5) no matter the values inside the arrays
            total += integerArray[i];// use += syntax to add a number to an existing value insted of overwriting it 
            //total = i++; be careful messing with i will change the order of your loop.  i is the counter in your loop if you do i++ you are manually incrementing it 
        }
    }

    return total;
}




// I did the above because I wasn't sure what I was supposed to be checking each integer with. Example: 1 % ???