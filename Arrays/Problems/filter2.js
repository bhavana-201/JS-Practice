/*Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
The function should not modify the array. It should return the new array */
function fil(arr, a, b){
    let newarr;
    return newarr = arr.filter((val) => (val>= a && val<=b))
}
console.log(fil([1,20,77,9,33], 10,60));