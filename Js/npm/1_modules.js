//Simple Modules
// const hello = (name) =>{
//     console.log("Hello I am " + name)
// }

// const greeting = (greet) => {
//     console.log("Good " + greet);
// }
// // module.exports = hello;
// module.exports = {hello, greeting};

//ES6 Modules
export const hello = (name) =>{
    console.log("Hello I am " + name)
}

export const greeting = (greet) => {
    console.log("Good " + greet);
}
const ankit=()=>{
    console.log("How are you Ankit")
}
export default ankit;