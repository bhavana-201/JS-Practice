//.assign()
const target = { a:0, b:1}
const source = { b:6, c:9}
const newTargert = Object.assign(target, source);
console.log(newTargert)

//.create()
const User = {
    printIntroduction() {
    console.log("My name is ALICE");
  }
};
const o = Object.create(User);
o.printIntroduction(); //My name is ALICE

//Object.keys()
const Obj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.keys(Obj)); // ['2', '7', '100']
//on primitives
console.log(Object.keys("foo")); // ['0', '1', '2']
