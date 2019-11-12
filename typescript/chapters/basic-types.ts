//CHAPTER 1: TYPES/VARIABLE DECLARATIONS

//Booleans
let isDone: boolean = false;

//Numbers
let decimal: number = 6;

//String
let color: string = "blue";

//Array
let list: number[] = [1, 2, 3];

//Any
let notSure: any = 4;

//Type assertions/cast
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

let someValue2: any = "this is a string";
let strLength2: number = (someValue as string).length;

//Variable Declarations
const neverChanges = "This string never changes";
