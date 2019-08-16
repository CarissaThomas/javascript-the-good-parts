//CHAPTER 3: Objects
//Objects: A container of properties, where a property has a name and a value;
//Property (Key): can be any string including an empty one
//Value:  the value held by the object accessed using the key

////////Object Literals 

//Creating an empty object 
function emptyObject() {
    var emptyObj = {};
    return emptyObj;
}

//Creating an object with key and values
function propertiesObject() {
    var propertiesObj = {
        firstName: "Lil",
        lastName: "wayne"
    };
    return propertiesObj;
}

//Creating keys and values on an empty object 
function createEmptyObject(property, value) {
    var createMe = {};
    createMe[property] = value;

    return createMe;
}

//Assigning parameters to object values 
function parametersObject(fName, lName) {
    var propertiesObj = {
        firstName: fName,
        lastName: lName
    };
    
    return propertiesObj;
}

//Assiging/updating object values
function assignObject() {
    var propertiesObj = {
        firstName: "",
        lastName: ""
    };
    propertiesObj.firstName = "Benjamin";
    propertiesObj.lastName = "Franklin";
    
    //OR this method is good for dynamic selection i.e. if you want
    propertiesObj[firstName] = "Benjamin";
    propertiesObj[lastName]= "Franklin";

    return propertiesObj;
}

//Delete key and value from object 
function deletePropertyObject() {
    var propertiesObj = {
        firstName: "Lil",
        lastName: "wayne"
    };

    delete propertiesObj.firstName;

    return propertiesObj;
}

//Iterate through object  
function loopObject() {
    var propertiesObj = {
        firstName: "Lil",
        lastName: "wayne"
    };

    Object.keys(propertiesObj).forEach(function(key) {
        console.log(key);
        console.log(obj[key]);
    });
}









