/* Write a function expect that helps developers test their code. 
It should take in any value val and return an object with the following two functions.
toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
*/

function expect(value){
    return {
        toBe : function(v1){
            if(v1 === value)
                return true;
            else throw new Error("Not Equal");
        },
        notToBe :function(v2){
            if(v2 !== value)
                return true;
            else throw new Error("Equal");
        }
    }
}
console.log(expect(5).toBe(5)); //true
console.log(expect(5).toBe(null));//Not Equal
console.log(expect(5).notToBe(null));//true

//we can also be concise and write the below solution
//return v1 === val || function(){ throw new Error("Not Equal") }();