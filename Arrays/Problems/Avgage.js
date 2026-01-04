/*Write the function getAverageAge(users) that gets an array of objects 
with property age and returns the average age. */



let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };
let arr = [ john, pete, mary ];
const len = arr.length;
function getAverageAge(arr){
    let age = arr.reduce( (accumulator,{age}) => accumulator+age, 0)
    return age/len;
}
console.log(getAverageAge(arr) ); 