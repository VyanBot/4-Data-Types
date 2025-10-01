/*
new Map() // creates a collection
map.set(key, value) // writes the value of "value" using "key"
map.get(key) // returns the value by "key" or undefined, if key is not defined
map.has(key) // returns true if key is defined in the collection, otherwise false
map.delete(key) // deletes element (pair of "key/value") by "key"
map.clear() // cleans out all of the elements from the collection
map.size // returns the current amount of elements

let map = new Map();

map.set("1", "str1"); // string in a form of a key
map.set(1, "num1"); // number as key
map.set(true, "bool1"); // boolean as key

// we need to remember that a regular Object converts its keys to strings
// Map stores types of its keys, so in this case 2 different values are going to be stored:
alert(map.get(1)); // "num1"
alert(map.get("1")); // "str1"

alert(map.size); // 3

// Map can also use objects as keys, which is the biggest upside of it, when compared to objects

let john = { name: "John" };

// let's store the amount of visits of each user
let visitsCountMap = new Map();

// object john - is a key for a value inside of the object Map
visitsCountMap.set(john, 123);

alert(visitsCountMap.get(john)); // 123

// we can write map.set in such a chain
map.set("1", "str1")
   .set(1, "num1")
   .set(true, "bool1");


let recipeMap = new Map([
    ["cucumber", 500],
    ["tomato", 350],
    ["onion", 50]
]);

// Iteration over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
    alert(vegetable); // cucumber, tomato, onion
}

// Iteration over values (numbers)
for (let amount of recipeMap.values()) {
    alert(amount); // 500, 350, 50
}

// Iteration over elements in a format [key, value]
for (let entry of recipeMap) { // the same thing as recipeMap.entries()
    alert(entry); // cucumber, 500 (etc.)
}

// completing the function for each of the pairs (key, value), similar to forEach in arrays
recipeMap.forEach((value, key, map) => {
    alert(`${key}: ${value}`); // cucumber: 500 and so on
});

// array of pairs [key, value]
let map = new Map([
    ['1', 'str1'],
    [1, 'num1'],
    [true, 'bool1']
]);

alert( map.get('1') ); // str1


// We can create Map from a normal object using Object.entries(obj)
let obj = {
    name: "John",
    age: 30
};

let map = new Map(Object.entries(obj)); // it returns an array of pairs [ ["name", "John"],
                                        // ["age", 30]], which is exactly what we need
alert( map.get('name') ); // John

// We can also do the opposite using Object.fromEntries

let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
]);

// prices = { banana: 1, orange: 2, meat: 4 }

alert(prices.orange); // 2


let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj = Object.fromEntries(map.entries()); // creating a normal object

// ready!
// obj = {banana: 1, orange: 2, meat: 4}

alert(obj.orange); // 2

// we can write it even shorter: let obj = Object.fromEntries(map); 

// now let's look at Set

new Set(iterable) // creates a set and copies the value of an array or other iterable object into it
set.add(value) // adds a value and returns the same object set
set.delete(value) // deletes a value and returns true, if value was in a multiple form, otherwise false
set.has(value) // returns true if value is in a multiple form, otherwise false
set.clear() // deletes all values
set.size // returns the amount of elements

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// counting guests, some of them come more than once
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set stores only 3 unique values
alert(set.size); // 3

for (let user of set) {
    alert(user.name); // John (then Pete and Mary)
}
*/

// let's look at the object set iteration
let set = new Set(["orange", "apple", "banana"]);

for (let value of set) alert(value);

// the same thing with forEach
set.forEach((value, valueAgain, set) => { // valueAgain is a "key" in ( map.forEach((value, key, mapItself) )
    alert(value); 
});

function unique(arr) {
    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert ( unique(values) ); // Hare, Krishna, :-O


/*
nap, pan -> anp
ear, era, are -> aer
cheaters, hectares, teachers -> aceehrst
*/

function aclean(arr) {
    let map = new Map();

    for (let word of arr) {
     // let's split the word into letters, sort and combine them again 
     let sorted = word.toLowerCase().split("").sort().join("");
     map.set(sorted, word);  
    }

    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );


