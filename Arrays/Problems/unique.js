/* Let arr be an array.
Create a function unique(arr) that should return an array with unique items of arr.
*/
function unique(arr) {
    let newarr = [];
   for(const str of arr){
       if(!newarr.includes(str))
           newarr.push(str);
   }
    return newarr;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings) );
