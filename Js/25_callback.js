function loadScript(src, callBack){
    let script = document.createElement("script")
    script.src = src
    console.log("Heelo")
    // script.onload=()=>{
    //     console.log("Loaded")
    //     callBack(src)
    // }
    script.onload=function(){
        console.log("Loaded")
        callBack(src)
    }
    script.onerror=function(){
        console.log("Not Loaded")
        callBack(src)
    }
    console.log("Hi")
    document.body.appendChild(script)
}
function Fname(source){
    alert("Ankit" + source)
}
function Lname(source){
    alert("MIttal" + source)
}
loadScript("https://cdn.jsdelivr.net/npm/es-module-shims@1/dist/es-module-shims.min.js", Lname)
// loadScript("./1_hello2.js")