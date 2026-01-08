// .clear() instance method removes all elements from the map.
const m = new Map();
m.set(1,"val1");
m.set(2,"val2");
m.set(3,"val3");
m.clear();
m //Map(0) {size: 0}

// . delete() - removes the entry of the specified key return True/ False
const mp = new Map();
mp.set(1,"val1");
mp.set(2,"val2");
console.log(mp.delete(1));// true

/* const m = new Map();
m.set({a:10},"object");
m.set(2,"val2");
m.set(3,"val3");
console.log(m.delete({a:10})); //false Map compares obj keys by ref not value
*/

// .entries() - returns a map iterator object
const m_entries = new Map();
m_entries.set("key1", 1)
m_entries.set("key2", 2)
for(const [k,v] of m_entries.entries()){
    console.log(`key: ${k} values: ${v}`)
}
// or u can use .next().value or ele = iteratorres.next() and access ele.value or ele.done

// .keys() - returns a map iterable object that contains the keys of each element
const k = new Map();
k.set("key1", 1)
k.set("key2", 2)
const iterator = k.keys();
console.log(iterator.next()); // {value: "key1" done: false}   iterates over 1 map ele's key
console.log(iterator.next().value); // key2 iterates over 2nd map ele's key

// .values() - returns a map iterable object that contains the values of each element
const v = new Map();
v.set(1,"value1")
v.set(2,"value2")
const ite = v.values();
console.log(ite.next()); // {value: "value1" done: false}   iterates over 1 map ele's value
console.log(ite.next().value); // value2 iterates over 2nd map ele's value

// .forEach() - executes a callback function once per each ele i.e key-value pair
const fr = new Map();
fr.set(1,"value1")
fr.set(2,"value2")
const mop = new Map();
fr.forEach((val,k,v) => mop.set(k,val))
mop

// .get - to retrieve the value of the given key
let map = new Map();
map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key
console.log(map.get(1)); // 'num1'
console.log(map.get('1')); // 'str1'

// .set - to add new entry or update existing using the given key and value
const st = new Map();
st.set(2,20).set(3,20) // Map(2) {2 => 20, 3 => 20} return the map object
