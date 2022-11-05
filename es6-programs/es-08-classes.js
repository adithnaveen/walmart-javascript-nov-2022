// working with class 


class Person {

    static companyName = "Walmart";
    static count = 1;

    // implicitly it shall have the constructor 
    // in javascript there is no concept of overloaded constructor 
    // you can have max/min of 1 constructor 
    constructor(name, city) {
        this.id = Person.count++;
        this.name = name;
        this.city = city;
    }

    get getname() {
        return this.name;
    }
    get getcity() {
        return this.city;
    }

    set setname(name) {
        this.name = name.toUpperCase();
    }
    set setcity(city) {
        this.city = city;
    }

    display() {
        console.log("Id " + this.id);
        console.log("Name " + this.name);
        console.log("City " + this.city);
    }

    static commonFunction() {
        console.log("company Name " + Person.companyName);
    }

}


class Employee extends Person {
    constructor(name, city, designation) {
        // if you have super usage then it has to be first statement in the 
        // function 
        super(name, city);
        this.designation = designation;
    }

    display() {
        super.display();
        console.log("Designation " + this.designation);
    }
}




// p1, p2 are instatance scope 
let p1 = new Person("Rajesh", "Chennai");
p1.display();
p1.setname = "Rajesh Ramakrishnan";
p1.setcity = "Bengaluru New";
p1.display();
Person.commonFunction();


let p2 = new Person("Kumar K", "Bengaluru");
p2.display();
console.log("========================================");

let e1 = new Employee("Babu", "Mysuru", "Manager");
e1.display();
