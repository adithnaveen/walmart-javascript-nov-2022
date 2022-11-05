// function inside a function in javascript, we can pass a function as an argument to another function 

// named function 
function outer() {
    let country = "India";
    function fnInnerFunction() {
        return country.toUpperCase();
    }
    return fnInnerFunction();
}

console.log(outer());


// anonymous function 
function fnRefFunction(val1) {
    return function (val2) {
        return val1 + val2;
    }
}

let ref1 = fnRefFunction(100);
console.log(ref1)
let ref2 = ref1(200);
console.log(ref2);

///////////////////////////////////


// anonymous function, 
function sumNumbers(val1) {
    return function (val2) {
        return function (val3) {
            return val1 + val2 + val3;
        }
    }
}

// currying 
let result = sumNumbers(100)(200)(300);
console.log(result);

///////////functional sytle ///////////

let sumNumbers1 = (val1) => (val2) => (val3) => val1 + val2 + val3;
console.log(sumNumbers1);
let result1 = sumNumbers1(200)(200)(300);
console.log(result1);

// building an counter application 

function fnCounter() {
    let count = 0;
    return {
        increment: function () {
            count++;
        },
        decrement: function () {
            count--;
        },
        getCount: function () {
            return count;
        }
    }
}

let func = fnCounter();
console.log(func);
func.increment();
func.increment();
console.log(func.getCount());
func.decrement();
console.log(func.getCount());


//////////////////////////////////// 



function fnCounter1() {
    let count = 0;
    return {
        increment: () => count++,
        decrement: () => count--,
        getCount: () => count
    }
}



let func1 = fnCounter1();
console.log(func1);
func1.increment();
func1.increment(); func1.increment(); func1.increment(); func1.increment(); func1.increment();
console.log(func1.getCount())
func1.decrement();









