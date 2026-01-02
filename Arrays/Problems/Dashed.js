// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

function camel(str){
    let arr = str.split("-");
    let newstr = arr[0];
    for(let ele = 1; ele <arr.length; ele++){
        newstr += (arr[ele].charAt(0).toUpperCase() + arr[ele].slice(1));
        
    }
    return newstr;
}
console.log(camel("bg-color"));

// we can compress the above code 
/*  return str = str.split("-").map((word, index) => index == 0?word : word[0].toUpperCase() + word.slice(1)).join(""); 
*/