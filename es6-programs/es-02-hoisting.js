// hosting 

// you are invoking first 
helloWorld();

// then declaration 
function helloWorld() {
    console.log("hi i'm from hello world");
}

console.log(myVar);
var myVar = 100;
console.log(myVar);


// -------------------

class Emp { } // the class does not hoist 
new Emp();


//-------------- 

const fnAdd = (num1, num2) => num1 + num2;
console.log(fnAdd(10, 20));


//------------- function can be hoisted + it has an acces to this, functions are prototypal access 
function Employee(name) {
    this.name = name;
}
Employee.prototype.display = function () {
    console.log("Emp nmae " + this.name)
}
let employee1 = new Employee("Naveen");
employee1.display();