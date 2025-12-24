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
