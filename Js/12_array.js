let marks = [20,30,30,42,4,61];
marks[2] = 47;
marks[1] = "210";
console.log(marks);
let marks2 = ["Ankit Not Present",20,30,30,42,4,61];
console.log(marks2);
console.log(typeof marks2 ,"\t");
console.log(typeof marks);
for(let i=0; i<marks2.length; i++){
    console.log(marks2[i]);
}