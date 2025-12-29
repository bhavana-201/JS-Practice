/* Given an integer n, return a counter function. 
This counter function initially returns n and 
then returns 1 more than the previous value every subsequent time 
it is called (n, n + 1, n + 2, etc). */
function counter(n){
    return function(){
        return n++;
    }
    
}
const f = counter(-2);
console.log(f());
console.log(f());
console.log(f());
console.log(f());
// -2 -1 0 1 