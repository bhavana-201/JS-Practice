/*Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
Please solve it without the built-in Array.filter method. */
var filter = function(arr, fn) {
    const newarr = []
    arr.forEach((value, index) => {
        if(fn(value, index))
            newarr.push(value)
    })
    return newarr;
};
