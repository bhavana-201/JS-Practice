//Object.assign()
const target = { a:0, b:1}
const source = { b:6, c:9}
const newTargert = Object.assign(target, source);
console.log(newTargert)

//Object.create()
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

//Object.values()
const obj = { 100:"a", 2:"b", 3:"c"}
Object.values(obj)//op - (3) ['b', 'c', 'a']

//Object.entries()
const ob = { 100:"a", 2:"b", 3:"c"}
for(const [k,v] of Object.entries(ob)){
    console.log(`${k}:${v}`)
}

//Object.freeze - (read only) -> ( writable+config+change value = false)
const an = {prop:29}
Object.freeze(an);
an.prop = 2//silently does ntg
//throws err in strict mode

//Object.hasOwn() - T if prop exists else false
const element = {prop:"yes"}
console.log(Object.hasOwn(element, "prop"));//true
//even if prop:null/undefined the op is true

//Object.defineProperty() - define or modify 1 prop at once
const person={}
Object.defineProperty(person,"name",{
  value:"bhavana",
  writable:true,
  configurable:true,
  enumerable:true
});

//Object.defineProperties() - define/modify multiple props at once
const object = {};
Object.defineProperties(object, {
  property1 : {
    value:"prop1 data",
    writable:true,
    enumerable:true,
    configurable:true
  }
})
console.log(object.property1);

//Object.getOwnPropertyDescriptor() - displays only its own properties not inherited ones
let user = {
    name:"bhavana"
}
Object.getOwnPropertyDescriptor(user,"name");//undefined if prop doesn't exist

//Object.fromEntries() - creates an obj with props from the ip iterable
const arr =[[0,'a'],[1,'b']]
const obje = Object.fromEntries(arr)
console.log(Object.getOwnPropertyDescriptor(obje,0));
//3 {value: 'a', writable: true, enumerable: true, configurable: true}


//Object.is() - whether are same or not
Object.is(NaN, NaN) //true

//Object.groupBy() - groups the items from an iterable using the callback func
const array = [1,2,3]
const newss = Object.groupBy(array, (ele) => ele < 2?"low":"high");
newss //{low: Array(1), high: Array(2)}

//Object.seal() - locks the structure of the object (config = false) + non extensible
const o1 ={name:"bhavana"}
Object.seal(o1)//all props become non-configurable
o1.name = "newname"
Object.defineProperty(o1,"name",{
  enumerable: false
})
//Type error - we cant change propDesc after sealing it


//Object.isExtensible & Object.preventExtension()
const smtg = {no:2}
Object.isExtensible(smtg)//true
Object.preventExtensions(smtg)
Object.isExtensible(smtg)//false

//Object.isSealed()  - checks whether object is sealed or not
const sl = {no:10}
Object.isSealed(sl)//false
Object.seal(sl)//config:false + no delete + non-extensible
Object.isSealed(sl)//true

//Object.isFrozen()  - checks whether object is Frozen or not
const fr = {no:10}
Object.isFrozen(fr)//false
Object.freeze(fr)//config:false writable:false  + no delete + non-extensible
Object.isFrozen(fr)//true

//Object.getOwnPropertyNames() - return all the prop names directly owned by the object
const arr1 = [1,2]
Object.getOwnPropertyNames(arr1)
/* (3) ['0','1','2']
returns an array of strings
*/

//Object.getPrototypeOf() - returns the prototype of the obj
const an = []
console.log(Object.getPrototypeOf(an) == Array.prototype);//true