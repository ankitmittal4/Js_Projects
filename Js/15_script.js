console.log("Javascript")
console.log("Javascript")
console.log("Javascript")
console.log("Javascript")
console.log("Javascript")
console.error("Some Error has been Occured")
console.assert(22>32)
// console.clear()
const obj = {
    Ankit : 12,
    Amit : 122,
    Mittal : 65
}
console.table(obj)
console.table(console)
console.warn("Some Warning has been Occured")
console.info("Namaste JavaScript")
console.time("Time")
console.timeEnd("Time")
console.time("Time for loop")
for(let i=0; i<2; i++){
    console.info(i*i)
}
console.timeEnd("Time for loop")


//alert prompt confirm
alert("Enter a Number")
const num = prompt("Enter a Number", "12344")
const num2 = Number.parseInt(num)
alert(typeof(num2))
const yorn = confirm("Do you want write number in HTML")
if(yorn){
    document.write(num2)
}
else{
    document.write("Please! press Ok")
}



