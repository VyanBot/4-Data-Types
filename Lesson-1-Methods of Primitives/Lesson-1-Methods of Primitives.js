/*
let roma = {
    name: "Roma",
    sayHi: function() {
        alert("Hi, my friend!");
    }
};

roma.sayHi(); // Hi, my friend!

let str = "Hi";

alert( str.toUpperCase() ); // HI

let num = 1.23456;

alert( num.toFixed(2) ); // 1.23
*/

let num = Number("123"); // turns string to a number

alert(null.tes); // error, since null and undefined are the most primitive primitives :D,
                 // they got no wrapper object potential, like other primitives

let str = "Hi";

str.test = 5; 

alert(str.test); // Error, since primitives are not objects and we cannot assign them with new...
                 // ...extra values
