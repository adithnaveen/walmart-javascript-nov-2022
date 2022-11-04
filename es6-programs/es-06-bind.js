const person = {
    first: "Abdulla",
    last: "Shaik",
    location: {
        city: "Bengaluru",
        state: "KA"
    },
    age: 17,
    fullName: function () {
        return this.first + ", " + this.last;
    }
};

const newPerson = {
    first: "Koneti",
    last: "Yadav"
}

let newFullName = person.fullName.bind(newPerson);
console.log(newFullName());