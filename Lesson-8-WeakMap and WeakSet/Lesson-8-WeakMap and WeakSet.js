/*
let john = { name: "John" };

// object is accessible, variable john - link to the object

// let's rewrite the link
john = null;

// object will be deleted from the memory


let john = { name: "John" };

let array = [ john ];

john = null; // rewriting the link to the object

// object john is stored in an array, therefore it will not be deleted by the trash collector
// we can display its value as array[0]


let john = { name: "John" };

let map = new Map();
map.set(john, "...");

john = null; // rewriting the link to the object

// object john is stored in an object 'Map'
// we can access it through map.keys()


// first key difference between Map and WeakMap, is that keys for WeakMap must be objects rather than primitives
let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok"); // works (object in a form of a key)

// we can't use a string in a form of a key
weakMap.set("test", "Whoops"); // Error, since "test" is not an object


let john = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(john, "...");

john = null; // rewriting the link to the object

// object john will be deleted from the memory!

weakMap.set(john, "secret documents");
// if john is going to die, "secret documents", will be automatically destroyed

// 📁 visitsCount.js
let visitsCountMap = new Map(); // map: user => amount of visits

// let's increase the counter
function countUser (user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}

// 📁 main.js
let john = { name: "John" };

countUser(john); // counting the amount of visits

// user left us (john must be deleted by trash collector, however he still remains in the memory, since it's 
// a key of visitsCountMap)
john = null

// we can clear visitsCountMap manually, however this might not be comfortable to do in terms...
//...of practicality, therefore we gotta use WeakMap

// 📁 visitsCount.js
let visitsCountMap = new WeakMap(); // map: user => amount of visits

// let's increase the counter
function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}

// now we don't need to clean visitsCountMap manually, whenever john as an object will be... 
//...unreachable in any other way but WeakMap, it will be deleted from memory, with all of the...
//...information
*/

// 📁 cache.js
let cache = new WeakMap();

// let's calculate and remember the result
function process(obj) {
    if (!cache.has(obj)) {
        let result = /* calculating the result for an object */ obj;

        cache.set(obj, result);
    }

    return cache.get(obj);
}

// 📁 main.js
let obj = {/* some sort of an object*/};

let result1 = process(obj);
let result2 = process(obj);

//... later on, when the object is no longer needed
obj = null;

// There is no way to get cache.size since it is a WeakMap,
// but it is equal to 0 or will soon be equal to 0
// When the garbage collector deletes obj, the data associated with it from the cache is also deleted


// we can user WeakSet to add users, who visited our website
let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); // John visited our website
visitedSet.add(pete); // then Pete
visitedSet.add(john); // then John again

// visitedSet now has two users

// let's check if John visited
alert(visitedSet.has(john)); // true

// let's check if Mary visited
alert(visitedSet.has(mary)); // false

john = null;

// data structure of visitedSet will be automatically cleared (object john will be deleted)

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

// two messages were read
readMessages.add(messages[0]);
readMessages.add(messages[1]);
// readMessages now contains two elements

alert(" Read message 0: " + readMessages.has(messages[0])); // true

messages.shift();
// now readMessages contains 1 element

