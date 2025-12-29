/* Given an integer array arr and a mapping function fn, 
return a new array with a transformation applied to each element.
The returned array should be created such that returnedArray[i] = fn(arr[i], i).
Please solve it without the built-in Array.map method. */


var map = function(arr, fn) {
    const newarr = [];
    let i =0;
    for(let ele of arr){
        newarr[i] = fn(ele,i );
        i++
    }
    return newarr;
    
};

/* function fun(ele, i){
    return ele+i;
}
function solve(arr){
    let index =0 ;
    return arr.reduce((newArr, ele, index) => {
        newArr[index] = fun(ele,index);
        return newArr
    }, []);//newArr = []
}
solve([1,2,3]);
 */
