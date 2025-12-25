/*Convert an array of numbers into their squares
    const arr = [1,2,3]
    const newArr = arr.map((ele) => ele*ele)
    console.log(newArr) 
*/ 

/* const obj = [{name:'a', age:20}, {name:'b', age:30}]
    const new_arr = obj.map( (user) => `${user.name} (${user.age})`)
    console.log(new_arr);
*/

//concat(value1, value2, /* …, */ valueN) = return new array
const arr1 = [1,2,3]
const arr2 = ['a',, 'b']
const arr3 =["x any no of values"]
console.log(arr1.concat(arr2,arr3))

//fill
console.log(arr2.fill("lol",1, NaN)); //ToIntegerOrInfinity(NaN) = 0

//filter
function prac(arr){
    const newarr = arr.filter((ele) => ele > 10);
    return newarr;
}
console.log(prac([1,2,34,10,33,100,4,5]));