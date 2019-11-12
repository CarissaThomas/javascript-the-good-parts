//CHAPTER 4: FUNCTION EXERCIES

//1. Write a function that uses a variable in the global scope

let carissa = 'greatest person ever';

function coolPeople() {
    console.log('Carissa is the ' + carissa);
}

//2. Write a function that uses a variable in the local scope

function trashPeople() {
    let trash = 'Trump';

    console.log('The trashiest person ever is ' + trash);
}

//3. Write a recursive function that starts with 0 and adds a variable up to 10

function recursiveFunk(value) {
    if (value < 10)
        return recursiveFunk(value + 1)
    else {
        return value;
    }
}

//4. Write a cascading function that reverses a string and makes it uppercase

function cascadeYo(input){
    return input.split('').reverse().join('').toUpperCase();
}

//5. Write a function that concatenates two string parameters store the return in a variable

function concatThat() {
    let firstName = 'carissa';
    let lastName = 'thomas';
     return firstName.concat(lastName);
}
