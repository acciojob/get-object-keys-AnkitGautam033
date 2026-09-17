function getKeys(obj) {
    return Object.keys(obj);
}

// Single key
const student1 = {
    name: "John"
};

console.log(getKeys(student1));
// ["name"]


// Multiple keys
const student2 = {
    name: "John",
    age: 22,
    city: "Agra",
    course: "B.Tech"
};

console.log(getKeys(student2));
