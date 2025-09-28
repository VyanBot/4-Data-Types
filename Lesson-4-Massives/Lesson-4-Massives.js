/* 
let arr = new Array();
let arr = [];


let fruits = ["Apple", "Orange", "Plum"];

alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Plum

fruits[2] = "Pear"; // now ["Apple", "Orange", "Pear"]

fruits[3] = "Lemon"; // now ["Apple", "Orange", "Pear", "Lemon"]

alert( fruits.length ); // 3

let fruits = ["Apple", "Orange", "Plum"];

alert( fruits ); // Apple, Orange, Plum

// we can store different types in arrays
let arr = ['Apple', { name: 'John' }, true, function() { alert('Hi'); } ];

// let's receive element with index 1 (object) and then show its property
alert( arr[1].name ); // John

// let's receive element with index 3 (function) and then complete it
arr[3](); // Hi

let fruits = ["Apple", "Orange", "Plum"];
alert( fruits[fruits.length-1] ); // Plum

// looks messy huh?, here's an alternative
let fruits = ["Apple", "Orange", "Plum" ];
alert( fruits.at(-1) ); // Plum


let fruits = ["Apple", "Orange", "Pear"];

alert( fruits.pop() ); // removing "Pear"

alert( fruits ); // Apple, Orange


let fruits = ["Apple", "Orange"]

fruits.push("Pear");

alert( fruits ); // Apple, Orange, Pear


let fruits = ["Orange", "Pear"];

fruits.unshift('Apple');

alert( fruits ); // Apple, Orange, Pear

let fruits = ["Apple"];

fruits.push("Orange", "Pear");
fruits.unshift("Pineapple", "Lemon");

// [ "Pineapple", "Lemon", "Apple", "Orange", "Pear"]
alert( fruits );

let fruits = ["Banana"];

let arr = fruits; // Copying following the link (two variables are linked to the same massive)

alert( arr === fruits ); // true

arr.push("Pear"); // massive is changed by the link

alert( fruits ); // Banana, Pear -> now we have two elements


let arr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr.length; i++ ) {
    alert( arr[i] );
}

// there's another loop possible for massive (for...of)
let fruits = ["Apple", "Orange", "Plum"];

for (let fruit of fruits) {
    alert( fruit );
}


// since massive is an object we can also use for...in (but there are a lot of disadvantages)
let arr = ["Apple", "Orange", "Pear"];

for (let key in arr) {
    alert( arr[key] ); // Apple, Orange, Pear
}

let fruits = [];
fruits[123] = "Apple";

alert( fruits.length ); // 124


let arr = [1, 2, 3, 4, 5];

arr.length = 2; // shortening to 2 elements
alert( arr ); // [1, 2]

arr.length = 5; // returning length to the same value
alert( arr[3] ); // undefined: value did not restore


let arr = new Array("Apple", "Pear", "etc."); // another syntax, but we usually use [] instead

let matrix = [
    [1, 2, 3]
    [4, 5, 6]
    [7, 8, 9]
];

alert( matrix[1][1] ); // 5

*/

let arr = [1, 2, 3];

alert( arr ); // 1, 2, 3
alert( String(arr) === '1, 2, 3' ); // true

alert( [] + 1 ); // "1"
alert( [1] + 1 ); // "11"
alert( [1,2] + 1 ); // "1,21"

alert( "" + 1 ); // "1"
alert( "1" + 1 ); // "11"
alert( "1,2" + 1 ); // "1,21"  

let styles = ["Jazz", "Blues"]

styles.push("Rock-n-roll")

styles[Math.floor((styles.length-1) / 2)] = "Classic"  

alert( styles.shift() );
styles.unshift("Rap", "Raggy");

function sumInput() {
    let numbers = [];

    while (true) {
        let value = prompt("Enter a number", 0);

        if (value === "" || value === null || !isFinite(value)) break;

        numbers.push(+value);
    }

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

alert( sumInput() );
