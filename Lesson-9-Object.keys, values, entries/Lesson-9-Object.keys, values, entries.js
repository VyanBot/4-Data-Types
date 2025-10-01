let user = {
    name: "John",
    age: 30
};

// Object.keysA(user) = ["name", "age"]
// Object.values(user) = ["John", 30]
// Object.entries(user) = ["name", "John"], ["age", 30]

// here's an example of using Object.values to iterate values of properties in a loop

for (let value of Object.values(user)) {
    alert(value); // John, then 30
}

let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};

let doublePrices = Object.fromEntries(
    // converting into an array, then map, then fromEntries (back to the object)
    Object.entries(prices).map(([key, value]) => [key, value * 2])
);

alert(doublePrices.meat); // 8

