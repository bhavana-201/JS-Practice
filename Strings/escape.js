const str1 = "outside\(inside\)"
console.log(str1)//outside(inside)

// 1. backslash escape character
const c = "C:\\Users\\Data";
console.log(c) //C:\Users\Data

const mul_lines = `\`"line 1
    line 2"\``
console.log(mul_lines)

console.log("A C\vB"); //A CB
// encodings
console.log("\x41"); // A = hexcode
console.log("\u0041"); // A = unicode
console.log("\u{1F600}"); // 😀 unicode code point

// 6 other escape sequences in JS
/* 
The backslash indicates that the next character should be treated as a literal character
rather than as a special character or string delimiter.
    \b : Backspace
    \f : Form Feed
    \n : New Line
    \r : Carriage Return
    \t : Horizontal Tabulator
    \v : Vertical Tabulator
    \0 : null character
    \' " \\ 
*/