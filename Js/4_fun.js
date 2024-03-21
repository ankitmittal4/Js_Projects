function Avg(x, y){
    let z = (x+y) / 2;
    return z;
}
console.log(Avg(4,5));


let Factorial=(x)=>{
    let fact = 1;
    while(x){
        fact *= x;
        x--;
    }
    return fact;
}
console.log("Factorial of " , 5, "is : ", Factorial(5));