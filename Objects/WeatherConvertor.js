const convertor = {
    C : 0,
    get fahrenheit(){ // C x 1.8 + 32
        return (this.C * 1.8 + 32);
    },
    set celsius(temp){
        if(typeof temp !== "number") 
            throw new Error("not a number")
        this.C = temp;
    }
}
console.log(convertor.fahrenheit)
convertor.celsius = 32.7
console.log(convertor.fahrenheit)
