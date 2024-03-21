const num = Math.floor((Math.random() * 100 )+ 1)
let ch
let attempt = 0;
do{
    ch = prompt("Enter a Number")
    if(ch<num){
        alert("please enter greater Number")
    }
    else if(ch>num){
        alert("please enter smaller Number")
    }
    attempt++
}while(ch != num);

console.log("You guessed in ",attempt, "attempts")
console.log("Your score is ", 100-attempt)
