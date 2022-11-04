const todos = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
    }
];

// in will give the index 
for (let temp in todos) {
    console.log(todos[temp]);
}
console.log("...............................")
// of will give the value 
for (let temp of todos) {
    if (temp.id === 2) {
        console.log(temp);
    }
}
// better way, fast 

const todo = todos.find(p => p.id === 1);
console.log(todo);

const todoFindByTitleIdx = todos.findIndex(p => p.title === "et porro tempora");
console.log("Index Position is " + todoFindByTitleIdx);

console.log("============for each=======================")

todos.forEach(function (p) {
    console.log(p.title);
})

console.log("============for each (=>)=======================")
todos.forEach(p => console.log(p.title));

console.log("============with map first char upper case=======================")

todos.map(p => p.title.charAt(0).toUpperCase()).forEach(val => console.log(val));