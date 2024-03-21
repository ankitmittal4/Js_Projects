// class employee{
//     setName(name){
//         this.name = name;
//         // console.log("Name is "+ this.name);
//         console.log(`Name is ${this.name}`);
//     }
//     setId(id){
//         this.id = id;
//         console.log("Id is " + this.id);
//     }
// }
// let e = new employee();
// e.setName("Ankit");
// e.setId(23);


//Using constructor
// class employee{
//     constructor(name, id){
//         this.name = name;
//         this.id = id;
//     }
//     print(){
//         console.log(this.name);
//         console.log(this.id);
//     }
// }
// let e = new employee("Ankit", 98);
// e.print();


//inheritance
// class employee{
//     constructor(name, id){
//         this.name = employee.capitalize(name);
//         this.id = id;
//     }
//     static capitalize(name){
//         return name.charAt(0).toUpperCase() + name.substr(1, name.length); 
//     }
//     print(){
//         console.log(this.name)
//     }
//     festival(x){
//         console.log(x+" Festivals");
//     }
// }
// // class specialEmp extends employee{
//     //     festival(x){
//         //         super.festival(x);
//         //         // console.log("12 Festivals");
//         //     }
//         // }
//         let e1 = new employee("ankit", 101);
//         e1.print();
//         let e2 = new employee("Hello", 101);
//         e2.print();
//         let e4 = new employee("ghi", 101);
//         e4.print();
//         let e3 = new employee("CHIRAG", 101);
//         e3.print();
        // e1.festival(5);
// let e2 = new specialEmp("Amit", 102);
// e2.festival(12);


//getter and setter
class employee{
    constructor(name, id){
        this._name = name;
        this.id = id;
    }
    get name(){
        return this._name; 
    }
    set name(newName){
        this._name = newName; 
    }
}
let e1 = new employee("Ankit", "11");
let e2 = new employee("ggg", "555");
console.log(e1.name);
e1.name = "Amit";
console.log(e1.name);
console.log(e1 instanceof employee)
console.log(e2 instanceof employee)