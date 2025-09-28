/*
let single = 'single-quoted'
let double = "double-quoted"

let backticks = `backticks`

// we use backticks to introduce an arbitrary expression into our string (${})
function sum(a, b) {
    return a + b
}

alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3
// we can also use backticks to write a list on more than one line
let guestList = `Guests:
* John
* Pete
* Mary
`;

alert(guestList); // guest list, which consists of multiple lines


// however, we can write lists on multiple lines using other ticks, with the help of \n:
let guestList = "Guests:\n * John\n * Pete\n * Mary";

alert(guestList); // guest list, which consists of multiple lines

// line transfer added using line transfer character
let str1 = "Hello\nWorld";

// a multiline string created using backticks
let str2 = `Hello
World`;

alert(str1 == str2); // true

alert( 'I\'m the Walrus' ); // I'm the Walrus! ( \' is only needed if the type of ticks is the same as ')

alert( `I'm the Walrus!` ); // I'm the Walrus!

alert( `The backslash: \\ `) // The backslash: \ (in case we need to show \, otherwise it's not added to the memory)

alert( `My\n`.length ); // 3 (since \n is one symbol, string length is 3)

let str = `Hello`;

// let's receive the first symbol
alert( str[0] ); //H
alert( str.at[0] ); //H

// let's receive the last symbol
alert( str[str.length - 1] ); // o
alert( str.at(-1) ); // o

alert( str[-2] ); // undefined ([] always return undefined for negative indexes)
alert( str.at(-2) ); // 1

for (let char of "Hello") {
    alert(char); // H,e,l,l,o (char - first "H", then "e", then "l", etc.)
}


let str = 'Hi';

str[0] = 'h'; // Error
alert( str[0] ); // doesn't work

let str = 'Hi';

str = 'h' + str[1]; // exchanging the string

alert( str ); // hi


alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface

alert( 'Interface'[0].toLowerCase() ); // 'i'


let str = 'Widget with id';

alert( str.indexOf('Widget') ); // 0, because substring 'Widget' is found at the begging
alert( str.indexOf('widget') ); // -1, no matches, search is case sensitive

alert( str.indexOf("id") ); //1, substring "id" is found on position 1


// to find the second "id" substring, we can start searching from position 2
let str = 'Widget with id';

alert( str.indexOf('id', 2) ) // 12


let str = "The cat sat on the cathedral";
let target = "cat"; // the search target

let pos = 0;
while (true) {
    let foundPos = str.indexOf(target, pos)
    if (foundPos === -1) break; // stop if no more matches

    alert(`Found at position ${foundPos}`);
    pos = foundPos + 1; //continue searching from the next position
}

let str = "The cat sat on the cathedral";
let target = "cat";

let pos = -1;
while ((pos = str.indexOf(target, pos +1)) !== -1) {
    alert(pos);
}

// str.lastIndexOf(substr, position) is used when you need to get the very last occurrence: ...
// ... before the end of the string or starting before (and including) a certain position.

let str = "Widget with id";

if (str.indexOf("Widget")) {
    alert("Match found"); // doesn't work, because we're looking for a substring widget,...
                          // ...which is in position 0 and if decides that test has been failed
}

// to fix this we use
if (str.indexOf("Widget") != -1) {
    alert("Match found"); // now works, because we're looking for the substring from the end
}

alert( ~2 ); // -3, the same as -(2+1)
alert( ~1 ); // -2, the same as -(1+1)
alert( ~0 ); // -1, the same as -(0+1)
alert( ~-1 ); // 0, the same as -(-1+1)

// we can use ~ for ~str.indexOf("..."), which means that indexOf doesn't equal to -1 => matches
let str = "Widget";

if (~str.indexOf("Widget")) {
    alert( 'match found' ); // works
}

alert( "Widget with id".includes("Widget") ); // true

alert( "Hello".includes("Bye") ); // false

alert( "Midget".includes("id") ); // true
alert( "Midget".includes("id", 3) ); // false, search was started from pos 3

alert( "Widget".startsWith("Wid") ); // true
alert( "Widget".endsWith("get") ); // true


let str = "Stringify";
// 'strin', symbols from 0 to 5 (not including 5)
alert( str.slice(0, 5) );
// 's', form 0 to 1 (not including 1), so just 1 symbol on pos 0
alert( str.slice(0, 1) );
// if there's not end argument, slice returns symbols until the end of the string
alert( str.slice(2) ); // from position 2 to the end
// we can also start searching from the negative value
alert( str.slice(-4, -1) );  // gif


// using str.substring is good, because we can put start larger than end, and it will reverse...
// ...them, however substring doesn't support negative values, and they're interpreted as 0
let str = "stringify";

// for substring these two examples are equal:
alert( str.substring(2, 6) ); // "ring"
alert( str.substring(6, 2) ); // "ring"

// but not for slice:
alert( str.slice(2, 6) ); // "ring"
alert( str.slice(6, 2) ); // "" (empty string)


let str = "stringify";
// ring, we're getting 4 symbols, starting from position 2
alert( str.substr(2, 4) );
// gi, we're getting 2 symbols, starting from position 4 from the end of the string
alert( str.substr(-4, 2) );

// lower case letters are bigger than upper case ones
alert( 'a' > 'Z'); // true

// Letters with diacritics are not in order:
alert( 'Österreich' > 'Zealand' ); // true

// the same letter in upper and lower case will have different identifying codes
alert( "z".codePointAt(0) ); // 122
alert( "Z".codePointAt(0) ); // 90

alert( String.fromCodePoint(90) ); // Z (creates a letter according to its code)


// let's create a string containing symbols with codes from 65 to 220
let str = '';

for (let i = 65; i <= 220; i++) {
    str += String.fromCodePoint(i);
}
alert( str );
//  ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~ 
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ

alert( 'Österreich'.localeCompare('Zealand') ); // -1
*/

ucFirst("john") == "John"

let str = "john";

function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

alert(ucFirst("john")); // John
alert(ucFirst("")); // ""

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false

function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}
alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );

function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength -1 ) + '...' : str;
}

function extractCurrencyValue(str) {
    return +str.slice(1);
}
