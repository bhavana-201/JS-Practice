const str = "hello"

// 1. str.at(index)
console.log(str.at(9)); // undefined

// 2. str.charAt(index)
console.log(str.charAt(10)) // ""

// 3. str.charCodeAt(index) 4. str.codePointAt(ind)
const em = "😔"
console.log(em.charCodeAt(0))//55357
console.log(em.charCodeAt(1))//56852
console.log(em.codePointAt())//128532

// 5. str.concat(str1,...,strN)
const greetList = ["Hello", " ", "Venkat", "!"];
"".concat(...greetList); // "Hello Venkat!"

"".concat({}); // "[object Object]"
"".concat([]); // ""
"".concat(null); // "null"
"".concat(true); // "true"
"".concat(4, 5); // "45"

// 6. str.endsWith(searchstr, endPos)
const str2 = "Is this a question?";
console.log(str2.endsWith("question")); // false 
console.log(str2.endsWith("?")); // true 
console.log(str2.endsWith("a",9)); //true

// 7. str.includes(searchstr, startpos)
console.log(str.includes("e")); //true

// 8. str.indexOf(searchstr, stpos) - -1 if stpos is > str.length
'hello world hello'.indexOf('world', 12) // -1

// 9. str.lastIndexOf(substr, endpos)
'hello world hello'.lastIndexOf('hello', -5)// 0 occurs at 
'hello world hello'.lastIndexOf('hello', 99) // 12

// 10. str.padEnd(tarlen, val) - returns a string with padded str
"abc".padEnd(5,"123") // 'abc12'
// 11. str.padStart(tarlen, val) 
"4976".padStart(8,"*") // "****4976"
"abc".padStart(6, "123465"); // "123abc"

// 12. str.repeat(count) - repeats the string n times.(new string)
"abc".repeat(0)//""
"abc".repeat(2.3)//"abcabc"

// 13. str

