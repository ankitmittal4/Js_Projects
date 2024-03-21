// let promise = new Promise(function(resolve, reject){
//     alert("Ankit")
//     // resolve()
//     // resolve(22)
//     // reject()
//     reject(new Error("Error has Occured"))
//     // reject(2)
// })
// console.log(promise)
// let p1 = new Promise((resolve, reject)=>{
//     console.log("Pending p1")
//     setTimeout(()=>{
//         resolve(true)
//     },1000)
// })
// let p2 = new Promise((resolve, reject)=>{
    //     console.log("Pending p2")
    //     setTimeout(()=>{
        //         reject(new Error("Some error has Occured"))
        //     },1000)
        // })
        // p1.then(alert);
        // p1.catch(alert);
        // p2.then(alert);
        // p2.catch(alert);
        
        // p1.then((alert)=>{
            //     console.log("No error : " + alert)
// })
// p2.then((value)=>{
//     console.log("No error p2 : ")
// })
// p2.catch((error)=>{
//     console.log("Error in p2")
// })
// p2.then((value)=>{
    //     console.log("No Error in p2" + value)
    // },(error)=>{
        //     console.log("Error in p2")
        // })
        // p1.then((value)=>{
            //     console.log("No Error in p1" + value)
// },(error)=>{
    //     console.log("Error in p1")
    // })
    
    //promises chaining

    

// let p = new Promise((resolve, reject)=>{
//     // console.log("Pending p1")
//     setTimeout(()=>{
//         resolve(true)
//     },1000)
// })
// p.then((value)=>{
//     console.log(value)
//     console.log("p done")
//     let p1 = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(23)
//         },1000)
//         // resolve(23)
//     })
//     return p1;
// }).then((value)=>{
//     console.log(value)
//     console.log("p1 done")
//     // return 10;
// }).then((value)=>{
//     console.log(value)
//     console.log("Final done")
// })


//Promise API's
// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve(1)
//     }, 2000)
// })
// let p2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve(2)
//     }, 2000)
// })
// let p3 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         // resolve(3)
//         reject(3)
//     }, 1000)
// })
// // let p_all = Promise.all([p1, p2, p3])
// // let p_all = Promise.allSettled([p1, p2, p3])
// // let p_all = Promise.race([p1, p2, p3])
// // let p_all = Promise.any([p1, p2, p3])
// let p_all = Promise.resolve([p1, p2, p3])
// // let p_all = Promise.reject([p1, p2, p3])
// p_all.then((value)=>{
//     console.log(value)
// })

//Async
// async function hello(){
//     return "Hi this is Ankit"
// }
// hello().then((value)=>{
//     console.log(alert(value))
// })

//Await
// async function weather(){
//     let knl = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("55 degres")
//         }, 1000)
//     })
//     let kuk = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("20 degres")
//         }, 3000)
//     })
//     let knlW = await knl
//     let kukW = await kuk
//     return [knlW, kukW]
// }
// weather().then((value)=>{
//     console.log(value)
// })

//errors
// Ankit
try{
    console.log(Ankit)
    // throw new Error("Error Line 1")
    // throw new Reference("Error Line 2")
    // console.log("Ankit")
}
catch(err){
    // console.log("Some Error has been occured")
    // console.log(err.name)
    // console.log(err.message)
    // console.log(err.stack)
    console.log(Amit)

}
finally{
    console.log("Finally")
}