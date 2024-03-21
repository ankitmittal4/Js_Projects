// btn.addEventListener("click", function(e){
//     alert("Good Morning")
// })
// btn.addEventListener("click", function(e){
//     alert("Hello Ankit")
// })
// btn.removeEventListener("click", function(e){
//     alert("Hello Ankit")

// })

let x = function(e){
    alert("Good Morning")
    console.log("Good Morning")
    console.log(e)
    console.log(e.target)
    console.log(e.type)
    console.log(e.clientX,e.clientY)
}
btn.addEventListener("click", x);
// btn.removeEventListener("click", x);