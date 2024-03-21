//For Each loop
const arr = [1, 2, 3, 4]
arr.forEach((element) => {
    console.log(element*element)
})
console.log("------------------------- ")

//array.from
const name1 = "Ankit"
console.log(name1)
const nameArray = Array.from(name1)
console.log(nameArray)
console.log(typeof(nameArray))
console.log("------------------------- ")

//for in loop
const arr3 = [11, 22, 553, 54, 95]
for(const i in arr3){
    console.log(i)
}
console.log("------------------------- ")

//for of loop
const arr4 = [18, 27, 341, 41, 35]
for(const i of arr4){
    console.log(i)
}