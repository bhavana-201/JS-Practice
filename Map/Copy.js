// Ways to copy elements from 1 map to anonther
const map1 = new Map();
map1.set("user1",{name:"bhavana"})
map1.set("user2",{name:"JavaScript"})

// using spread operator - only shallow copy of elements
const map2 = new Map([...map1])
map2.get("user1").name = "React"
console.log(map1.get("user1")) //{name:"React"}

//using .entries() 
//Anything iterable is read step-by-step using the iterator protocol,
const mp2 = new Map(map1.entries());


// using constructr function - only shallow copy
const m = new Map(map1)
console.log(m)

// using forEach() - only if you need logic while copying:
const map3 = new Map();
map1.forEach((val,k,map1) => map2.set(k,val))
console.log(map3)

