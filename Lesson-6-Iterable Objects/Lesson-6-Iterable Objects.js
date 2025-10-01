/*
let range = {
    from: 1,
    to: 5
};
// we want for..of to work
// for(let num of range)...num=1,2,3,4,5

//1. for..of callout, first calls out this function
range[Symbol.iterator] = function() {

    // ...it returns object iterator:
    // 2. then, for..of works only with this iterator,
    // asking it for new values
    return {
        current: this.from,
        last: this.to,

        // 3. next() is called out on each iteration of the for..of loop
        next() {
            // 4. it has to return the value in a form of an object {done:.., value:...}
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        }
    };
};

// now it works!
for (let num of range) {
    alert(num); // 1, then 2, 3, 4, 5
}

// technically object iterator is separated from the iterated object itself, which allows us...
// ...to combine them and write this down in a shorter way:

let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next () {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return {done: true };
        }
    }
};

for (let num of range) {
    alert(num); // 1, then 2, 3, 4, 5
}
// the only disadvantage of writing it down this way is that, we won't be able to use this...
//...object in two parallel loops for..of (however we rarely have to do that)

for (let char of "test") {
    // works 4 times: 1 per each symbol
    alert( char ); // t, then e, s, t
}

let str = '𝒳😂'
for (let char of str) {
    alert( char ); // 𝒳, then 😂
}

// let's try explicit iterator invocation
let str = "Hello";

// does the same thing as: for (let char of str) alert(char);
let iterator = str[Symbol.iterator]();

while (true) {
    let result = iterator.next();
    if (result.done) break;
    alert(result.value); // displays symbols one by one
}

// here's an example of an object that is a pseudo-array, but it can't be iterated
let arrayLike = { // has indexes and a property length => pseudo-array
    0: "Hello",
    1: "World",
    length: 2
};

// Error ( Symbol.iterator wasn't found )
for (let item of arrayLike) {}


let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
};

let arr = Array.from(arrayLike); // Array.from takes an object, checks whether it is an iterable...
                                //...or an array-like object, then creates a new array and...
                                //...copies all the elements into it.
alert(arr.pop()); // World (method works)

// the same thing happens with an iterable object
let arr = Array.from(range);
alert(arr); // 1,2,3,4,5


// full Array.from syntax is: Array.from(obj[, mapFn, thisArg])

let arr = Array.from(Range, num => num * num);

alert(arr); // 1,4,9,16,25

let str = '𝒳😂';

// splits the string into an array of its elements
let chars = Array.from(str);

alert(chars[0]); // 𝒳
alert(chars[1]); // 😂
alert(chars.length); // 2


// technically the same thing as:
let str = '𝒳😂';
let chars = []; //Array.from is completing the same loop inside of itself
for (let chars of str) {
    chars.push(char);
}

alert(chars);
*/

// we can even create slice, which supports surrogate pairs:
function slice(str, start, end) {
    return Array.from(str).slice(start, end).join('');
}

let str = '𝒳😂𩷶';

alert( slice(str, 1, 3) ); // 😂𩷶

// but the built-in method does not support surrogate pairs
alert( str.slice(1, 3) ); // "�笑" -> trash (two different parts of different surrogate pairs)
