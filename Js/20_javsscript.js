// console.log(document.getElementsByTagName("ul")[0].firstElementChild.style.color = "red")
// console.log(document.getElementsByTagName("ul")[0].firstElementChild.style.color = "green")
// console.log(document.getElementsByTagName("ul")[0].lastElementChild.style.color = "green")

// Array.from(document.getElementsByTagName("li")).forEach((ele) =>{
//     ele.style.background = "red";
// })

// console.log(document.getElementsByTagName("div")[0]);
// console.dir(document.getElementsByTagName("div")[0]);

// console.dir(document.body.firstChild.nodeName);
// console.dir(document.body.firstElementChild.nodeName);

// console.dir(id1.innerHTML = "Ankit Mittal");
// console.dir(id1.outerHTML);
// console.dir(id1.outerHTML = "Hello Whats up");
// console.log(document.body.firstElementChild.data)
// console.log(document.body.textContent)

let first = document.getElementById("id1");
console.log(first.getAttribute("class"))
console.log(first.getAttribute("hidden"))

console.log(first.hasAttribute("class"))
console.log(first.hasAttribute("id"))
console.log(first.hasAttribute("style"))
console.log(first.hasAttribute("hidden"))

console.log(first.setAttribute("hidden" , "true"))
console.log(first.setAttribute("class" , "Ankit"))

// console.log(first.removeAttribute("class" , "Ankit"))

console.log(first.attributes)

console.log(first.dataset)
console.log(first.dataset.lname)
console.log(first.dataset.class)
console.log(first.dataset.name)

