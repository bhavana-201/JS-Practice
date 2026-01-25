##strings

- String literals (double or single quotes) and strings returned from String calls in a non-constructor context (that is, called without using the new keyword) are primitive strings. 

- A String object can always be converted to its primitive counterpart with the valueOf() method.
```
    const s = new String("abc"); // object
    const str = s.valueOf()
    console.log(typeof str) #string
```
