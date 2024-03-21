// //IIFE
// function sayHello(){
//     console.log("Hello This is Ankit")
// }
// sayHello()


//Destructing
// const array = [3, 4, 6, 7, 32]
// const [a, b, c, d, e] = array
// console.log(a, b, c, d, e)
// const [a, b, c, d, e, f] = array
// console.log(a, b, c, d, e, f)
// const [a, b, c, d] = array
// console.log(a, b, c, d)
// const [a, b, c, ...rest] = array
// console.log(a, b, c, rest)

// let {a, b} = {
//     a: 1,
//     b: 2
// }
// console.log(a, b)


// {
//     let name = "ankit"
//     console.log(name)
// }
// console.log(name)



// console.log(a)
// sayGreeting()
// function sayGreeting(){
//     console.log("Good Morning")
// }
// const a = 10;
// var a = 10;
// console.log(a)

// sayGreeting()
// var sayGreeting = function(){
//     console.log("Good Morning")
// }
// // sayGreeting()

// function sayHello(name){
// // const sayHello = (name) => {
//         console.log("My name is : " + name)
// }
// sayHello("Ankit")

const obj = {
    naam: "Ankit",
    role: "FrontEnd",
    exp: 22,
    show:function(){
        let that = this
        console.log(this.naam)
        // setTimeout(function(){
        //     console.log(that.naam)
        // }, 3000)
        setTimeout(()=>{
            console.log(`${that.naam}`)
        }, 3000)
    }
}
obj.show()