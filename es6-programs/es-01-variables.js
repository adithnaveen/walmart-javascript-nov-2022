// variable scope (scalar)
// i = 100; - global variable, stores in window scope 
// var i = 100; - local to function 
// let - es6 - let i =100; instance scope mutable 
// const - es6 - const i = 100; instance scope immutable 


function test() {
    for (let i = 0; i < 10; i++) {
        console.log("Hello my values is " + i);
    }

    // since the variable declared is let the scope is only within the for loop / block 
    // console.log("I'm exiting and value is " + i);
}

test();
