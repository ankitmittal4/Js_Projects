const p = fetch("https://goweather.herokuapp.com/weather/dubai")
p.then((value)=>{
    console.log(value.status)
    console.log(value.ok)
    // return value.json()
    console.log(value.headers)
    return value.json()

}).then((value1)=>{
    console.log(value1)
})
