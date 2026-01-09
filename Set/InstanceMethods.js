const mySet = new Set();

// set.add(value) – adds a value, returns the set itself.
mySet.add(5).add("some text"); // chainable.  set(2) {5,"some text"}

// set.forEach(callbackfn) - executes the callbackfn for every ele in the set
new Set([1,2,3]).forEach((ele,ele2)=> console.log(`${ele} ${ele2}`)) // 1 1 2 2 3 3 why? coz k & v are same

//set.keys() || set.values() || set.entries() - return an iterable object with values
mySet.add(1).add(2).add(3);
mySet.keys(); //SetIterator {1,2,3}
mySet.values();//SetIterator {1,2,3}
mySet.entries();//SetIterator {1 => 1, 2 => 2, 3 => 3}

// set.has(val) - returns a boolean indicating whether the  value exists in Set or not.
mySet.has(2); //true

// set.clear - removes all the elements from the array
mySet.clear(); //no return type

// set.delete(val) - removes the specified value from the set - obj are compared using reference not value
mySet.delete(1); //true  - Boolean return type