const person = {
    first: "Abdulla",
    last: "Shaik",
    location: {
        city: "Bengaluru",
        state: "KA"
    },
    age: 17
};


// const first = person.first;
// const last = person.last; 

const { first: firstName, last, age } = person;
console.log(firstName, last);


const { city, state } = person.location;
console.log(city, state);

console.log(`Hello i'm template string you can substitute something here`);
console.log(`${age > 18 ? "You can Vote" : "Sorry Your Cannot Vote"} `);

const names = ["Arun", "Venkata", "Prashanth", "Yadav"];

const [name1, , name2] = names;
console.log(name1, name2);

let numbers = [12, 344, 66, 88, 344, 562];
console.log(numbers);

let numbers1 = [100, 200, ...numbers];
console.log(numbers1);

numbers.unshift(1000);
console.log(numbers1);

