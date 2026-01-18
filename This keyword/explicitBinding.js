// we can change the value of this using the following methods

// 1. func.call(thisObj, arg1.....,argn)
function greet(){
    console.log(this.a); 
}
const obj1 = {
    a :100
}
greet.call(obj);//100

// without the 1st parameter
function noObj(param1, param2){
    console.log(param1);
}
noObj.call(null,"hello","bye"); //hello



// 2. fn.apply(thisObj, argumentsArray)
// .apply() spreads the second argument into function parameters.
function add(arr){//[1,2,3]
    this.result =  arr.reduce((acc,sum) => acc+sum,0);
}
const obj2 = {
    res: 0,
}
add.apply(obj2,[[1,2,3]]); //6

// 3. fn.bind(thisObj, arg1...argn);
function foo(something) {
	console.log( this.a, something );
	return this.a + something;
}
var obj = {
	a: 2
};
var boundfn = foo.bind( obj ); //new fn where this of foo is obj

var b = boundfn(3); // 2 3 - call foo with obj as this so this.a = obj.a = 2
console.log(b); // 5