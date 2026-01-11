f(); // fully hoisted
exp(); //only variable is hoisted

//function statement or function declaration
function f(){
    console.log("hi");
}

/* function expression a function can be anonymous; 
it does not have to have a name. */
var exp = function(){
    console.log("function expression");
};

// Named function expression - you cannot use named() to call the function outside
var expp = function named(){
    console.log("names function expression");
};
expp()
named() // - Ref error

//parameter vs arguments
function p(param1, param2){ ///parameters
    console.log("parameters")
} 
p(arg1, arg2); // values which we send to fn are called arguments

/* first class functions
because we can assign function as a value to a variable,
we can send fn as an argument
we can return fn from a function
*/

// Arrow functions - 