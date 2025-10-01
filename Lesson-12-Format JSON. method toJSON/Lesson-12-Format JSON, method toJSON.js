/*
let user = {
    name: "John",
    age: 30,

    toString() {
        return `{name: "${this.name}", age: ${this.age}}`;
    }
};
*/
alert(user); // {name: "John", age: 30}

// JSON.stringify is used to convert objects into JSON
// JSON.parse is used to convert back from JSON to objects

// let's convert student data using JSON.stringify
let student = {
    name: "John",
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};

let json = JSON.stringify(student);

alert(typeof json); // we will receive a string!

alert(json); // will display an object in a form of JSON:
/* {
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "wife": null
} */

// number converted into JSON stays a number
alert( JSON.stringify(1) ) // 1

// string converted into JSON stays a string but with "" double ticks
alert( JSON.stringify('test') ) // "test"

alert( JSON.stringify(true) ); // true

alert( JSON.stringify([1, 2, 3]) ); // [1,2,3]

//JSON.stringify skips some specific properties of objects in JS:
// (1) Function properties (methods).
// (2) Symbolic keys and values.
// (3) Properties containing undefined.
/* let user = {
    sayHi() { // will be skipped (1)
        alert("Hello");
    },
    [Symbol("id")]: 123, // will also be skipped (2)
    something: undefined // and this - skipped (3)
}; */ 

alert( JSON.stringify(user) ); // {} (empty object)

/*
// nested objects are supported and converted automatically:
let meetup = {
    title: "Conference",
    room: {
        number: 23,
        participants: ["John", "ann"]
    }
};
*/
alert( JSON.stringify(meetup) );
/* the whole structure is converted into a string:
{
  "title":"Conference",
  "room":{"number":23,"participants":["john","ann"]},
}
*/

// important note is that there shouldn't be any cyclical loops:
let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    participants: ["john", "ann"]
};

meetup.place = room; // meetup is linked to room
room.occupiedBy = meetup // room is linked to meetup

JSON.stringify(meetup); // ERROR: Circular structure conversion in JSON

// full JSON.stringify syntax:
// let json = JSON.stringify(value[, replacer, space])

let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room // meetup is linked to room
};

room.occupiedBy = meetup; // room is linked back to meetup

alert( JSON.stringify(meetup, ['title', 'participants']) );
// {"title":"Conference", "participants":[{},{}]}

// let's add all properties but room.occupiedBy, which causes the cyclical link -> ERROR
alert( JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) );
/*
{
  "title":"Conference",
  "participants":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/

// since the list is long, we can use a function, rather than an array in a replacer
alert( JSON.stringify(meetup, function replacer(key,value) {
    alert(`${key} : ${value}`);
    return (key == 'occupiedBy') ? undefined : value;
}));

// now let's look at the third argument 'space'
/* let user = {
    name: "John",
    age: 25,
    roles: {
        isAdmin: false,
        isEditor: true
    }
}; */

alert(JSON.stringify(user, null, 2));

/* 2 space indent:
{
  "name": "John",
  "age": 25,
  "roles": {
    "isAdmin": false,
    "isEditor": true
  }
}
*/

alert(JSON.stringify(user, null, 4));
/* 4 space indent:
{
    "name": "John",
    "age": 25,
    "roles": {
        "isAdmin": false,
        "isEditor": true
    }
}
*/

let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    date: new Date(Date.UTC(2017, 0, 1)),
    room
};

alert( JSON.stringify(meetup) );
/*
  {
    "title":"Conference",
    "date":"2017-01-01T00:00:00.000Z",  // date became a string, since all Date objects have a
                                        // built-in toJSON method
    "room": {"number":23}               // let's add toJSON to the room object
  }
*/

let room = {
    number: 23,
    toJSON() {
        return this.number;
    }
};

let meetup = {
    title: "Conference",
    room
};

alert( JSON.stringify(room) ); // 23

alert( JSON.stringify(meetup) ); 
/*
  {
    "title":"Conference",
    "room": 23
  }
*/

// to decode a JSON string, we need another method, which is called JSON.parse:
// let value = JSON.parse(str[, reviver]);

let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

alert( numbers[1] ); // 1

let user = '{"name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3]}';

user = JSON.parse(user);

alert( user.friends[1] ); // 1

// let's imagine that we received an object meetup from a server in this format:
// title: (meetup title), date: (meetup date)
let str = '{"title": "Conference", "date":"2017-11-30T12:00:00.000Z"}';

// now we want to convert it back to a JS object
let meetup = JSON.parse(str);

alert( meetup.date.getDate() ); // ERROR!

// let's pass JSON.parse a restore function as the second argument,...
//...which returns all values ​​as is, but date becomes Date:
let meetup = JSON.parse(str, function(key, value) {
    if (key == 'date') return new Date(value);
    return value;
});

alert( meetup.date.getDate() ); // 30 - now it works!

/*
let user = {
    name: "John Smith",
    age: 35
};

let user2 = JSON.parse(JSON.stringify(user));
*/

let room = {
  number: 23
};

let meetup = {
  title: "Meeting",
  occupiedBy: [{name: "John"}, {name: "Smith"}],
  place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
    return (key !=  "" && value == meetup) ? undefined : value;
}));

/*
{
  "title":"Meetup",
  "occupiedBy":[{"name":"John"},{"name":"Smith"}],
  "place":{"number":23}
}
*/
