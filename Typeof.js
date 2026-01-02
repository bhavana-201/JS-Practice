/* typeof Operator returns a STRING indicating the operand's value
typeof operand */
console.log(typeof undefined) //undefined
console.log(typeof null) //object
console.log(typeof Number) //function.  constructor functions 
console.log(typeof Symbol) //function
console.log(typeof BigInt) //function
console.log(typeof String) //function
console.log(typeof Boolean) //function
console.log(typeof Function) //function
console.log(typeof Object) // function
console.log(typeof Array) //function
//Using () without new → primitives || Using new → object wrappers
console.log(typeof Number()) //number.  
console.log(typeof Symbol()) //symbol
console.log(typeof BigInt()) //bigint
console.log(typeof String()) //string
console.log(typeof Boolean()) //boolean

console.log(typeof Array())  // "object"
console.log(typeof Object())  // "object"
console.log(typeof {a:1}) //object
console.log(typeof new Date())// object
console.log(typeof function(){})// function
console.log(typeof {})//object
console.log(typeof NaN) // number
console.log(typeof Number('1')) //number
console.log(typeof let) //undefined
console.log(typeof document) // object
console.log(typeof window) //object
console.log(typeof document.all) //undefined
console.log(typeof (a=n=10))//number
console.log(typeof Infinity) //number
console.log(typeof (typeof null)) //string



