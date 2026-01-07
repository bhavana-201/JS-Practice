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