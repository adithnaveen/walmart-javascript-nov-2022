
// version 1, synchronous way 


function divide(n1, n2) {

    return new Promise((resolve, reject) => {
        if (typeof n1 != 'number') {
            reject("Please Enter first arg as number");
        }

        if (typeof n2 != 'number') {
            reject("Please enter second arg as number");

        }

        if (n2 === 0) {
            reject("Pls dont divide by zero");
        }

        resolve(n1 / n2);
    })
}

console.log("Start ");
let a = 10;
let b = 0;

divide(a, b)
    .then(result => console.log("Result : " + result))
    .catch(err => console.log("Error processing " + err));
console.log("End ")