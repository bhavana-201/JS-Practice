/* Map is a collection of keyed data items, just like an Object. 
But the main difference is that Map allows keys of any type. 
Map() can only be constructed with new. 
Attempting to call it without new throws a TypeError.*/

//creates a new map object new Map(iterable(opt))
const m = new Map();

//with iterable - each ele should have 2 vals - key & value
const map = new Map([
    [0,"one"],
    [1,"two"]
])
map //Map(2) {0 => 'one', 1 => 'two'}


/*static methods Map.groupBy(item, callback fn)
groups the elements of a given iterable using the callback function values
*/
const arr = [
    {age: 20},
    {age: 21},
    {age: 22},
]
const m1 = Map.groupBy(arr, ({age}) => age>=20)
m1 /* Map(1) {true: Array(3)}. the callback fn return T/F as results 
so this res is used as keys for grouping */

//instance prop -> .size() returns the no of elements in Map

const maps = new Map();
maps.set("a", "alpha");
maps.set("b", "beta");
maps.set("g", "gamma");
console.log(maps.size);
// Expected output: 3