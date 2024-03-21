//Map
console.log("Map")
const arr = [2, 3, 4, 5]
const arr2 = arr.map((value, index, array) => {
    console.log(value, " : ", index, " : ", array)
    return value<5
})
console.log(arr2)
console.log("--------------------------------")

//filter
console.log("Filter")
const arr3 = [20, 33, 40, 5]
const arr4 = arr3.filter((value, index) => {
    return value%10 == 0 
})
console.log(arr4)
console.log("--------------------------------")

//Reduce
console.log("Reduce")
const arr5 = [2, 3, 4]
const arr6 = arr5.reduce((n1, n2, n3) => {
    return n1+n2+n3
})
console.log(arr6)
console.log("--------------------------------")
