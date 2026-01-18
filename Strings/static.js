const str = "Hello World! I'm Javascript"
// str.at(pos) - returns the char at that position(pos can be negative also)
console.log(str.at(0)); //H

//Strings are immutable - you cannot change the characters
str[0] = 'h'; // error
console.log(str[0]); // H
