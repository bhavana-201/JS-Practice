//1. creation of objects using object literals
const user = {
    name: "abc",
    age :20,  
};
//2. creation of object using new Object()
const user2 = new Object({name : "abf"})
console.log(user2);
/* The constructed form and the literal form result in exactly the same sort of object. 
The only difference really is that you can add one or more key/value pairs to the literal declaration, 
whereas with constructed-form objects, you must add the properties one-by-one. */

//if the value is non obj then it returns the value with its corresponding obj wrapper  
const obj1 = Object(1n);
console.log(obj1);
//op - BigInt {1n}

//3. using Object.create
//paramater cannot be empty if empty - TypeError
const obj = Object.create(Object.prototype)//or null

//4. using Object.assign()
const obj3 = Object.assign({});
//creates a new object {} with properties of source
const source = {a:1};
const obj4 = Object.assign({}, source);

//5. using Object.defineProperties()
const obj5 = Object.defineProperties({}, {
    sayHi : {  // property:{descriptor}
        value : function(){
            return "hie!!";
        },
        writable:true,
        enumerable:true,
        configurable:true
    }
});
console.log(obj5.sayHi());//prints "hie!!"