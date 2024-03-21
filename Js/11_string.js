// let name = "Ankit's";
// let name = 'Ankit\'s';
// let name = 'Ankit\ns';
// let name = 'Ankit\ts';
// let name = 'Ankit\rsssssss';
let name = 'Ankit';
let lastName = 'Mittal';
// console.log(name + " is the " + lastName);
// console.log(name);
// console.log("The " +name +" is ankit ");

// console.log(`The First name is ${name}`);
// console.log('The First name is',name);

// for(let i=0; i<name.length; i++){
//     console.log(name[i]);
// }

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.slice(2,5));
console.log(name.replace("asnk", "Amity"));
console.log(name.concat("Mittal"));
console.log(name.concat(lastName, "Kumar", "B.Tech"));

let str = "             Amit  "+"         sAAA          ";
console.log(str.trim());

console.log(name.includes("Ankit"));
console.log(name);
name[1] = "m";//Immutable
name[0] = 'G';
console.log(name);