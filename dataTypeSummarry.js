// There are 2 types of dataTypes 

// 1. Primitive type dataTypes :

// String, Number, Boolean, null, undefined, Symbol

const name = "rohan"        //String

const score = 100           //Number
const scoreValue = 100.5    //Number

const isLoggedIn = false    //Boolean

const outsideTemp = null    //null

let userEmail;              //undefined

const id = Symbol('111')       // Symbol
const anotherId = Symbol('111') // Symbol

//id and anotherId has deferrent/unique values
// lets see -
//console.log(id == anotherId);

// 2. Non-Primitive dataTypes : 

// Array, Object, Function

const arr = ["rohan", "anil", "deepak"]; // Array

const myObj ={
            name : "rohan",
            email : "r@google.com"
}   

const myFun = function(){
    console.log("Hello worls")      // define function
}

myFun();                            //call the function


// how to check data type of any variable : 
console.table([typeof name, typeof score, typeof scoreValue, typeof isLoggedIn, typeof outsideTemp, typeof userEmail, typeof id, typeof arr, typeof myObj, typeof myFun])