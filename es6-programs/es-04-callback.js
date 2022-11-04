
// version 1, synchronous way 


function divide(n1, n2, callback) {

    if (typeof callback != 'function') {
        throw "Callback should be a function or you did not pass";
    }
    setTimeout(() => {
        if (typeof n1 != 'number') {
            callback("Please Enter first arg as number");
            return;
        }
        if (typeof n2 != 'number') {
            callback("Please enter second arg as number");
            return;
        }
        if (n2 === 0) {
            callback("Pls dont divide by zero");
            return;
        }

        callback(null, n1 / n2);
    }, 0);

}

console.log("Start ");
let a = 10;
let b = 5;



let c = divide(a, b, (err, res) => {
    if (err) {
        console.log("Error  " + err);
    } else {
        console.log("Result " + res);
    }
});
console.log("Result ", c);
console.log("End ")