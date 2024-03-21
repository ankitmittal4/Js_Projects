//Simple for loop
for(let i=0; i<5; i++){
    console.log(i);
}

//for in loop : Used in object as key value pair
let student = {
    Name : "Ankit",
    Class : "B.Tech",
    RollNo : 252202151,
    Phone : 7206058627  
}
for(let i=0; i < 4; i++){
    console.log(Object.keys(student)[i], " : " , student[Object.keys(student)[i]]);
}
// for(let i in student){
//     console.log(i, " : ", student[i]);
// }
// for(let i in student){
//     console.log(i + " : " + student[i]);
// }