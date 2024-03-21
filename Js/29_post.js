const createTodo = async(Todo)=>{
    let option={
        method: "POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(Todo)
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/todos/1' )
    let response = p.json()
    return response
}
const getTodo = async(id)=>{
    let res = await fetch('https://jsonplaceholder.typicode.com/todos/1' + id)
    let r = await res.json()
    return r
}
const mainFun = async()=>{
    let Todo={
        title:"Ankit",
        body:"Mittal",
        userId: 252202151
    }
    let todor = await createTodo(Todo)
    console.log(todor)
    console.log(await getTodo(999))

}
mainFun()