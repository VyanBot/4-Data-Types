/*
let billion = 1000000000;s

let billion = 1_000_000_000 // we can also use "_" as a divider, since Javascript...
                            // ...doesn't recognize it
// there's a shorter version of how to write down larger numbers
let billion = 1e9; // 1 billion, practically: 1 and 9 zeroes

alert( 7.3e9 ); // 7.3 billion (7,300,000,000)

// in other words e multiplies 1 with a certain amount of zeroes
1e3 === 1 * 1000 // e3 means *1000
1.23e6 === 1.23 * 1000000 // e6 means *1000000

let mcs = 0.000001;

let ms = 1e-6; // six zeroes to the left of 1w

1e-3 === 1 / 1000 (0.001) // 1 is divided aby 1 with 3 zeroes

1.23e-6 === 1.23 / 1000000 (0.00000123)

alert( 0xff ); // 255
alert( 0xFF ); // 255 (the same thing, register doesn't change anything)

let a = 0b11111111 // double (binary) notation for numbers 255
let b = 0o377; // octal notation for the number 255

let ( a === b ); // true, since 255 is on both sides

let num = 255;

alert( num.toString(16) ); // ff
alert( num.toString(2) ); // 11111111 
alert( 123456..toString(36) ); //2n9c (the same thing as alert( (123456).toString(36) ); )

// Math.floor --> 3.1 becomes 3 and, -1.1 becomes -2

// Math.ceil --> 3.1 becomes 4 and, -1.1 becomes -1

// Math.round --> 3.1 becomes 3 and, 3.6 becomes 4 and, -1.1 becomes -1

// Math.trunc (removes the decimal, doesn't work in explorer) --> 3.1 becomes 3 and, -1.1 becomes -1


let num = 1.23456;

alert( Math.round(num * 100) / 100); // 1.23456 -> 123.456 -> 123 -> 1.23


let num = 12.34;
alert( num.toFixed(1) ); // "12.3" (works the same as Math.round)

let num = 12.36;
alert( num.toFixed(1) ); // "12.4"

let num = 12.34;
alert( num.toFixed(5) ); // "12.34000", extra zeroes to get 5 digits after coma (since it's a string)

// we can change the value to a number by writing it as +num.toFixed(5)

alert( 1e500 ); // returns Infinity since the number is too big (takes up too many bits)

alert ( 0.1 + 0.2 == 0.3 ); // false, so why is it false?????

alert( 0.1 + 0.2 ); // 0.30000000000000004

alert(0.1.toString(2)); // 0.0001100110011001100110011001100110011001100110011001101
alert(0.2.toString(2)); // 0.001100110011001100110011001100110011001100110011001101
alert((0.1 + 0.2).toString(2)); // 0.0100110011001100110011001100110011001100110011001101

alert( 0.1.toFixed(20) ); // 0.10000000000000000555 

//so how do we avoid this problem?

let sum = 0.1 = 0.2

alert( sum.toFixed(2) ); // "0.30" or +sum.toFixed(2), which gives us 0.3

alert( (0.1 * 10 + 0.2 * 10) / 10 ); // 0.3
alert( (0.28 * 100 + 0.14 * 100) / 100 ); // 0.4200000000000001

alert( isNaN(NaN) ); // true
alert( isNaN("str") ); // true

// why can we not just "... === NaN" ?, well because NaN doesn't equal to anything, even itself

alert( NaN === NaN ); // false

alert( isFinite("15") ); // true
alert( isFinite("str") ); // false, because special value: NaN
alert( isFinite(Infinity) ); // false, because special value: Infinity
*/
// isFinite can also be used to check if there's a number in a string

let num = +prompt("Enter your number:", "");
// will always return true, unless argument is Infinity/-Infinity or not a number
alert( isFinite(num) );

alert( Number.isNaN(NaN) ); // true 
alert( Number.isNaN("str" / 2) ); // true

// let's look at the different results
alert( Number.isNaN("str") ); // false, since "str" is a string, and not a number
alert( isNaN("str") ); // true, since isNaN first converts "str" into a number, and then gets NaN

alert( Number.isFinite(123) ); // true
alert( Number.isFinite(Infinity) ); // false
alert( Number.isFinite(2 / 0) ); // false

// let's look at the different results
alert( Number.isFinite("123") ); // false, since "123" is a string, and not a number
alert( isFinite("123") ); // true, since isFinite first converts "123" into a number

// Object.is is very similar to "==="
// however it can also work with NaN
Object.is(NaN, NaN) === true
Object.is(0, -0) === false
// in all other cases it's the same as "==="

alert( +"100px" ); // NaN ( Number() can also be used instead of "+" )

alert( parseInt( `100px` ) ); // 100
alert( parseFloat( `12.5em` ) ); // 12.5

alert( parseInt( `12.3` ) ); // 12, will only return the integer part
alert( parseFloat( `12.3.4` ) ); // 12.3, since there will be a stop on the second coma

alert( parseInt(`a123`) ); // NaN, both parseInt and parseFloat will return NaN, if no number...
                           // ... was identified

alert( parseInt(`0xff`, 16) ); // 255
alert( parseInt(`ff`, 16) ); // 255, without 0x also works

alert( parseInt(`2n9c`, 36) ); // 123456

alert( Math.random() ); // 0.1234567894322
alert( Math.random() ); // 0.5435252343232
alert( Math.random() ); // any random number in between 0 and 1 (not including 1)

alert( Math.max(3, 5, -10, 0, 1) ); // 5
alert( Math.min(1, 2) ); // 1

alert( Math.pow(2, 10) ); // 2 to the power of 10 = 1024

