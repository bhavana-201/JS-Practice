//Convert an array of numbers into their squares
    const arr = [1,2,3]
    const newArr = arr.map((ele) => ele*ele)
    console.log(newArr) 

// const obj = [{name:'a', age:20}, {name:'b', age:30}]
const new_arr = obj.map( (user) => `${user.name} (${user.age})`)
console.log(new_arr);

//.at(index) - returns the ele at that index
const c = [1,2,3,44,2]
console.log(c.at(4))//2  undefined if index>arr.length

//.concat(value1, value2, /* …, */ valueN) = return new array
const arr1 = [1,2,3]
const arr2 = ['a',, 'b']
const arr3 =["x any no of values"]
console.log(arr1.concat(arr2,arr3))

//.copyWithIn(tar, start,[end]) - shallow copies part of arr to another loc within the same arr
const ab = [0,1,2,"a","b"]
ab.copyWithin(0,1,5)
console.log(ab)// (5) [1,2,"a","b","b"]

/* arr.every(callbackfn,[thisArg]) //returns true if all the eles statisfy the test function 
false - even if 1 ele doens't satisfy test fn */
function isEven(ele){
    return (ele%2===0)?true:false;
}
const Arr = [2,4,6]
Arr.every((ele) => isEven(ele)); //true as all the items are even

//.fill()
console.log(arr2.fill("lol",1, NaN)); //ToIntegerOrInfinity(NaN) = 0

//.filter() - makes a shallow copy of the array ele tht pass the callback fn
function prac(arr){
    const newarr = arr.filter((ele) => ele > 10);
    return newarr;
}
console.log(prac([1,2,34,10,33,100,4,5]));

//.entries() - returns iterator that yields arrays
const array =[1,2]
for(const [ind,val] of array.entries()){
    console.log(ind,val)
}

//.keys() - returns an array iterator obj that contains the keys of each index
const ar = ['a','b']
for(const k of ar.keys()){
    console.log(k)
}//0 1

//.values() - returns an array iterator obj that contains the values of each index
const arrval = ['a','b']
for(const val of arrval.values()){
    console.log(val)
}//a b

//.splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
const a1 = [1,2,3,4,5]
const rem = a.splice(1,2,0,0)//returns the removed ele 
console.log(rem); //(2) [2, 3]
console.log(a);//(5) [1, 0, 0, 4, 5]

//.slice() - returns a new arr with a copy of ele frm st to end(not inc)
const a2 = [1,2,3,4,5]
const res = arr.slice(1,-1)//start at 1 -> end at 4(not inc)(-1+5 = 4)
console.log(res);//(3) [2, 3, 4]

// .forEach() - calls a fn for each ele in arr
['a','b','c'].forEach( (val,ind,arr) => {
    console.log(`${val} position is ${ind} in ${arr}`)
})

// .indexOf() - return the index of the ele given - looks from left to right
[1,2,3].indexOf(2)//1
[1,2,1,1,3].indexOf()//-1

//.lastIndexOf() - same as indexOf() but looks from right to left - lst occurance
[1,2,1,1,3].lastIndexOf(1)// 3

//.includes() - looks for item from index (start) & return true if found
let b = [1,0,false]
arr.includes(1) //true

//.find() - returns the 1st ele that satisfies the function
let user = [
    {id:1, name:"bhvana"},
    {id:2, name:"full"}
]
let u = user.find((ele) => ele.id == 2)
console.log(u);//{id:2, name:"full"}

//.findIndex() - returns the index of the ele instead of element which satisfies the fn
//.findLastIndex() - similar to findIndex but finds the last occurance
let us = [
    {id:1, name:"bhavana"},
    {id:2, name:"full"},
    {id:3, name:"bhavana"}
]
let us1 = us.findIndex((ele) => ele.name == 'bhavana')
let us2 = us.findLastIndex((ele) => ele.name == 'bhavana')
console.log(us1);//0
console.log(us2);//2

// .join(delimiter) - joins the ele with given delimi and returns a new string
const fruits = ["orange","is","good"]
const str = fruits.join(" ");//default delim -> , comma
console.log(str) //"orange is good"
console.log(fruits)// (3) ["orange","is","good"]

// .pop() - removes the last ele & returns it - no paramters
const months = ['jan','feb','dec']
months.pop()//dec removed
console.log(months)//(2) ['jan','feb']

// .push() - adds an ele at the end of array and return length of the new array
const abc = ['a','b','c']
console.log(abc.push('d')) // 4 - len
console.log(abc)//['a','b','c','d']

// .shift() - removes an ele from the beg of an arr
const shft = ["first", "second"]
console.log(shft.shift())//first

// . unshift() - adds an ele at the beg of the arr, returns the new len
const unshft = ["second","third"]
unshft.unshift("first")
console.log(unshft);//(3) ['first', 'second', 'third']

// .reverse() - reverses the array - no parameters - mutating method
const rev = ["a",22,null]
console.log(rev.reverse());//(3) [null,22,"a"]

// .sort(fn) - sorts the ele based on the fn
const st = ['b', 'c','a']
console.log(st.sort())// ['a','b','c']
const no = [1,2,10]
no.sort((a,b) => a-b)
console.log(no)// (3) [1, 2, 10]




