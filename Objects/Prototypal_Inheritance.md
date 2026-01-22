**JavaScript** implements inheritance by using objects. Each object has an internal link to another object called its **prototype.**

- By definition, null has no prototype and acts as the final link in this prototype chain.
- It is possible to mutate any member of the prototype chain or even swap out the prototype at runtime
- The [[Prototype]] internal slot can be accessed and modified with the Object.getPrototypeOf() and Object.setPrototypeOf() functions respectively. 
- The top-end of every normal [[Prototype]] chain is the built-in Object.prototype

We will now examine three scenarios for the myObject.foo = "bar" assignment when foo is not already on myObject directly, but is at a higher level of myObject's [[Prototype]] chain:
1. If a normal data accessor (see Chapter 3) property named foo is found anywhere higher on the [[Prototype]] chain, and it's not marked as read-only (writable:false) then a new property called foo is added directly to myObject, resulting in a shadowed property.
2. f a foo is found higher on the [[Prototype]] chain, but it's marked as read-only (writable:false), then both the setting of that existing property as well as the creation of the shadowed property on myObject are disallowed. If the code is running in strict mode, an error will be thrown. Otherwise, the setting of the property value will silently be ignored. Either way, no shadowing occurs.
3. If a foo is found higher on the [[Prototype]] chain and it's a setter (see Chapter 3), then the setter will always be called. No foo will be added to (aka, shadowed on) myObject, nor will the foo setter be redefined.

## Most developers assume that assignment of a property ([[Put]]) will always result in shadowing if the property already exists higher on the [[Prototype]] chain, but as you can see, that's only true in one (#1) of the three situations just described.

## If you want to shadow foo in cases #2 and #3, you cannot use = assignment, but must instead use Object.defineProperty(..) to add foo to myObject.

pre-ES6
throws away default existing `Bar.prototype`
Bar.prototype = Object.create( Foo.prototype );

// ES6+
// modifies existing `Bar.prototype`
Object.setPrototypeOf( Bar.prototype, Foo.prototype );