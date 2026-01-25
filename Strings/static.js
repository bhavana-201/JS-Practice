// String.fromCharCode(num1...numN) - returns a string of len N
console.log(String.fromCharCode(121,122,99)) // "yzc"

// String.fromCodePoint(num1,....,numN) - returns a string from specified seq of code points
// Range Error - if param is not a number or < 0 or > 0x10FFFF
console.log(String.fromCodePoint(9731)) // '☃'

// String.raw - tag fn for template literal 
const s = String.raw`C:\Users\Bhavna\Js.html`
console.log(s) // C:\Users\Bhavna\Js.html
s // 'C:\\Users\\Bhavna\\Js.html'
