/*
// let's say we got an array with name and surname
let arr = ["John", "Smith"];

// destructuring assignment
// writes down firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

alert(firstName); // John
alert(surname); // Smith

let [firstName, surname] = "John Smith".split(' ');
alert(firstName); // John
alert(surname); // Smith


// Destructuring assignment doesn't destroy or remove anything, it's just a shorter version of:
let firstName = arr[0];
let surname = arr[1];


// if for example the second element is not needed
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert( title ); // Consul (The second element of the array is skipped, and the third is assigned...
                //...to the variable title, the remaining elements of the array are also skipped)

// we can practically work with any iterable objects, not only arrays
let [a, b, c] = "abc";
let [one, two, three] = new Set([1, 2, 3]);


// we can assign anything from the left side
let user = {};
[user.name, user.surname] = "John Smith".split(' ');

alert(user.name); // John
alert(user.surname); // Smith


// we can use Object.entries(obj) with destructuring assignment for cyclical iteration of keys 
// and values of an object
let user = {
    name: "John",
    age: 30
};

// loop of keys and values
for (let [key, value] of Object.entries(user)) {
    alert(`${key}:${value}`); // name: John, then age: 30
}

// the same thing for map
let user = new Map();
user.set("name", "John");
user.set("age", "30");

// Map iterates pairs of [key, value], which is very suitable for destructuring
for (let [key, value] of user) {
    alert(`${key}:${value}`); // name: John, then age: 30
}

// there's a well known trick of exchanging the values of two variables using destructuring
let guest = "Jane";
let admin = "Pete";

// let's exchange the values
[guest, admin] = [admin, guest]

alert(`${guest} ${admin}`); // Pete Jane (successfully exchanged)

// here only the first two elements are taken into account, the other ones are ignored
let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert(name1); // Julius
alert(name2); // Caesar
// Other elements are not assigned anywhere


// we can use "..." to assign all other elements in the list as residual parameters
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// rest is an array of elements, starting from third
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2


// practically we can use any name after "..."
let [name1, name2, ...titles] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// now titles = ["Consul", "of the Roman Republic"]

// if there're less value in the array then in the assignment, there will be no error, undefined
let [firstName, surname] = [];

alert(firstName); // undefined
alert(surname); // undefined


// if we want to replace a value by default to something else:
let [name = "Guest", surname = "Anonymous"] = ["Julius"];

alert(name); // Julius (from the array)
alert(surname); // Anonymous (value by default)


// default values can also be functions and other complicated expressions
// here prompt will only work for surname, since name is defined
let [name = prompt('name?'), surname = prompt('surname?')] = ["Julius"]

alert(name); // Julius (from the array)
alert(surname); // result of the prompt

// destructuring also work with objects: let {var1, var2} = {var1:..., var2:...}

let options = {
    title: "Menu",
    width: 100,
    height: 200
};

let {title, width, height} = options

alert(title); // Menu
alert(width); // 100
alert(height); // 200

let options = {
  title: "Menu",
  width: 100,
  height: 200
};


// { sourceProperty: targetVariable }
let {width: w, height: h, title} = options;

// width -> w
// height -> h
// title -> title

alert(title); // Menu
alert(w); // 100
alert(h); // 200


// For potentially missing properties, we can set default values ​​using "=", like here:
let options = {
    title: "Menu"
};

let {width = 100, height = 200, title} = options;

alert(title); // Menu
alert(width); // 100
alert(height); // 200


let options = {
    title: "Menu"
};

let {width = prompt("width?"), title = prompt("title?")} = options;

alert(title); // Menu
alert(width); // (result of prompt)


// we can also combine : and =
let options = {
    title: "Menu"
};

let {width: w = 100, heigh: h = 200, title} = options;

alert(title); // Menu
alert(w); // 100
alert(h); // 200


// if we have a big object, we can take whatever we need an ignore the rest
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

// we're taking only title, ignoring the rest
let { title } = options;

alert(title); // Menu


// we can use "..." just as we did in arrays to assign the rest 
let options = {
  title: "Menu",
  height: 200,
  width: 100
};

// title = property with a name title
// rest = object with other properties
let {title, ...rest} = options;

// now title="Menu", rest={height:200, width:100}
alert(rest.height); // 200
alert(rest.width); // 100


let options = {
    size: {
        width: 100,
        height: 200
    },
    items: ["Cake", "Doughnut"],
    extra: true
};

let {
    size: { // let's put size here
        width,
        height
    },
    items: [item1, item2], // let's add elements to items
    title = "Menu" // doesn't exist in our object
} = options

alert(title); // Menu
alert(width); // 100
alert(height); // 200
alert(item1); // Cake
alert(item2); // Doughnut


// we're transferring object into a function
let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
};

// and it's immediately takes out properties into variables
function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
    // title, items - taken from options,
    // width, height - using default values
    alert( `${title} ${width} ${height}` ); // My Menu 200 100
    alert( items ); // Item1, Item2
}

showMenu(options);
*/

// we can also use a more complex destructuring
let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

function showMenu({
    title = "Undefined",
    width: w = 100, // width assigned to w
    height: h = 200, // height assigned to h
    items: [item1, item2] // first element items assigned to item1, second one to item2 
}) {
    alert( `${title} ${w} ${h}` ); // My Menu 100 200
    alert( item1 ); // Item1
    alert( item2 ); // Item2
}

showMenu(options);
