/*
let arr = ["I", "go", "home"];

delete arr[1]; // deleting "go"

alert( arr[1] ); // undefined

// now arr = ["I",  ,"home"];
alert( arr.length ); // still 3, which is not ideal for when we're working with arrays

// arr.splice(start[, deleteCount, elem1, ..., elemN]) is a universal syntax to work with arrays

let arr = ["I'm", "learning", "JavaScript"];

arr.splice(1, 1); // starting from index 1, remove 1 element

alert( arr ); // ["I", "JavaScript"] is left


// now let's remove 3 elements and replace them with 2 others
let arr = ["I'm", "learning", "JavaScript", "right", "now"];

arr.splice(0, 3, "Let's", "dance");

alert( arr ); // now it's [ "Let's", "dance", "right", "now"]


let arr = ["I'm", "learning", "JavaScript", "right", "now"];

// let's remove the first two elements
let removed = arr.splice(0, 2);

alert( removed ); // "I'm", "learning" <-- array of deleted elements

// we can also just add elements without deleting any by putting 0 in the deleteCount
let arr = ["I'm", "learning", "JavaScript"];

// from index 2
// remove 0 elements
// add "hard", "language"
arr.splice(2, 0, "a hard", "language");

alert( arr ); // "I'm", "learning", "a hard", "language", "JavaScript"


let arr = [1, 2, 5];

// starting from index -1 (in front of the last element)
// delete 0 elements
// then add numbers 3 and 4
arr.splice(-1, 0, 3, 4);

alert( arr ); // 1, 2, 3, 4, 5


// arr.slice is much more simple than arr.splice
arr.slice([start], [end])

let arr = ["t", "e", "s", "t"];

alert( arr.slice(1, 3) ); //e,s (copying from 1 to 3)

alert(arr.slice(-2) ); // s,t (copying from -2 to the end)

// we can call arr.slice() without any argument to create a copy of the array


// arr.concat(arg1, arg2...) creates new array, and copies other arrays into it

let arr = [1, 2];

// creates array from: arr and [3, 4]
alert( arr.concat([3, 4]) ); // 1, 2, 3, 4

// creates array from: arr and [3, 4] and [5, 6]
alert( arr.concat([3, 4], [5, 6]) ); // 1, 2, 3, 4, 5, 6

// creates array from: arr, [3, 4], then adds values 5 and 6 
alert( arr.concat([3, 4], 5, 6) ); // 1, 2, 3, 4, 5, 6


let arr = [1, 2];

let arrayLike = {
    0: "something",
    length: 1
};

alert( arr.concat(arrayLike) ); // 1, 2, [object Object]


let arr = [1, 2];

let arrayLike = {
    0: "something",
    1: "else",
    [Symbol.isConcatSpreadable]: true,
    length: 2
};

alert( arr.concat(arrayLike) ); // 1,2,something,else

arr.forEach(function(item, index, array) {
    // doing something with item
})

// this code will display each of the elements through alert
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

// this one will also reveal the position of the element in an array
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    alert(`${item} has an index ${index} in an ${array}`);
});


let arr = [1, 0, false];

alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1

alert( arr.includes(1) ); // true

// arr.lastIndexOf is similar to indexOf, but is searching from right to left

let fruits = ['Apple', 'Orange', 'Apple']

alert( fruits.indexOf('Apple') ); // 0 (first 'Apple')
alert( fruits.lastIndexOf('Apple') ); // 2 (last 'Apple')


const arr = [NaN];
alert( arr.indexOf(NaN) ); // -1 (not correct, since it has to be 0)
alert( arr.includes(NaN) ); // true (correct)

let result = arr.find(function(item, index, array) {
    // if true - the current element is returned and the iteration is interrupted.
    // if all iterations are false, returns undefined
})

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Alex"},
    {id: 3, name: "Jimmy"}
];

let user = users.find(item => item.id == 1);

alert(user.name); // John


let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Alex"},
    {id: 3, name: "Jimmy"},
    {id: 4, name: "John"},
];

// let's find the index of the first John
alert(users.findIndex(user => user.name == "John")); // 0

alert(users.findLastIndex(user => user.name == "John")); // 3


let results = arr.filter(function(item, index, array) {
    // if `true` -- element will be added to the results and iteration continues
    // returns an empty array if nothing has been found
});

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Alex"},
  {id: 3, name: "Jimmy"}
];

// returns an array consisting of the first two users
let someUsers = users.filter( item => item.id < 3);

alert(someUsers.length); // 2


let result = arr.map(function(item, index, array) { 
    // returns a new value instead of the element
});

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 6,8,6


let arr = [1, 2, 15];

// this method is sorting whatever is in arr
arr.sort();

alert( arr ); // 1, 15, 2 (since we're comparing these numbers as strings)


function compare(a, b) {
    if (a > b) return 1; // if the first value is bigger than the second one
    if (a == b) return 0; // if they're equal
    if (a < b) return -1; // if the first value is smaller than the second one
}

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

let arr = [ 1, 2, 15 ];

arr.sort(compareNumeric);

alert(arr); // 1, 2, 15

[1, -2, 15, 2, 0, 8].sort(function(a, b) {
    alert( a + " <> " + b);
    return a - b;
});


// shorter variant of how to write a numeric comparison function
let arr = [ 1, 2, 15 ];

arr.sort(function(a, b) { return a - b; });

alert(arr); // 1, 2, 15

// we can also use arrow function to simplify it even more
arr.sort( (a, b) => a - b );

// let's sort out a couple of countries in German
let countries = ['Österreich', 'Andorra', 'Vietnam'];

alert( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (incorrect)

alert( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,Österreich,Vietnam (correct!)


// arr.reverse is a method to reverse the order of elements in an array
let arr = [1, 2, 3, 4, 5];
arr.reverse();

alert( arr ); // 5,4,3,2,1


// str.split(delim) splits a string into an array following delim

let names = 'John, Alex, Jim';

let arr = names.split(', ');

for (let name of arr) {
    alert( `The message will be received by: ${name}.` ); // The message will be received by: John (and other names)
}


// we can also put a limit on the amount of elements in the array using the split method
let arr = 'John, Alex, Jim, Max'.split(', ', 2);

alert(arr); // John, Alex

let str = "test";

alert( str.split('') ); // t,e,s,t


// arr.join(glue) is the opposite of the split method
let arr = ['John', 'Alex', 'Jim'];

let str = arr.join(';'); // combines the array into a string split by ;

alert( str ); // John;Alex;Jim


//arr.reduce and arr.reduceRight are similar to other methods above, but they're a little more...
//...complicated

let value = arr.reduce(function(accumulator, item, index, array) {
    // ...
}, [initial]);

let arr = [1, 2, 3, 4, 5];

let results = arr.reduce((sum, current) => sum + current, 0);

alert(result); // 15

// arr.reduceRight works the same but walks through the array from right to left

alert(typeof {}); // object
alert(typeof []); // also object

// however we can still check if the object is an array or not

alert(Array.isArray({})); // false

alert(Array.isArray([])); // true

let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
        return user.age >= this.minAge && user.age < this.maxAge;
    }
};

let users = [
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 30}
];

// let's find the users that army.canJoin will return true
let soldiers = users.filter(army.canJoin, army); 
          // = users.filter(user => army.canJoin(user)) is another, more often used way




function camelize(str) {
    return str
        .split('-') // splits 'my-long-word' into an array ['my', 'long', 'word']
        .map(
            // Converts the first letter of all array elements except the first to uppercase
            // converts ['my', 'long', 'word'] to ['my', 'Long', 'Word']
            (word, index) => index == 0 ? word: word[0].toUpperCase() + word.slice(1)
        )
        .join(''); // combines ['my', 'Long', 'Word'] into 'myLongWord'
}

function filterRange(arr, a, b) {
    
    return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (no changes)


function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];

        // delete if it's out of bounds of the interval
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }

}


let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b -a );

alert( arr );


function copySorted(arr) {
    return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted );
alert( arr );


function Calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = function(str) {

        let split = str.split(' '),
          a = +split[0],
          op = split[1],
          b = +split[2]
        
        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}

let john = { name: "John", surname: "Smith", id: 1 };
let adam = { name: "Adam", surname: "Newel", id: 2 };
let grace = { name: "Grace", surname: "Watson", id: 3 };

let users = [ john, adam, grace ];

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));

alert( usersMapped[0].id ); // 1
alert( usersMapped[0].fullName ); // John Smith


function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
}

let john = { name: "John", age: 25 };
let adam = { name: "Adam", age: 30 };
let grace = { name: "Grace", age: 28 };

let arr = [ john, adam, grace ];

sortByAge(arr);

// now sorted: [john, grace, adam]
alert(arr[0].name); // John
alert(arr[1].name); // Grace
alert(arr[2].name); // Adam


function shuffle(array) {
    for (let i = array.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// counting the possibility of each option
let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
}

// showing the amount of all possibilities
for (let key in count) {
    alert(`${key}: ${count[key]}`);
}
*/

function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let john = { name: "John", age: 25 };
let adam = { name: "Adam", age: 30 };
let grace = { name: "Grace", age: 29 };

let arr = [ john, adam, grace ];

alert ( getAverageAge(arr) ); // 28


function unique(arr) {
    let result = [];
    
    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    
    return result;
}

let strings = ["krishna", "krishna", "hare", "hare",
"hare", "hare", "krishna", "krishna", ":-O"
];

alert( unique(strings) ); // krishna, hare, :-O


function groupById(array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}
