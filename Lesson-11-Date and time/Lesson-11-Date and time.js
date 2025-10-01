/*
let now = new Date();
alert( now ); // shows current date and time

// 0 is an equivalent of 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
alert( Jan01_1970 );

// let's add 24 hours and receive 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
alert( Jan02_1970 );

// 31st of Dec 1969
let Dec31_1969 = new Date(-24 * 3600 * 1000);
alert( Dec31_1969 );

let date = new Date("2017-01-26");
alert(date);
// The time is not specified, so it is set to midnight GMT and
// changes according to the time zone of the place where the code is executed

new Date(2011, 0, 1, 0, 0, 0, 0); // 1 Jan 2011, 00:00:00
new Date(2011, 0, 1); // the same thing, since if the time is not defined all 0


// maximum precision is 1 ms (1/1000 of a second)
let date = new Date(2011, 0, 1, 2, 3, 4, 567);
alert( date ); // 1.01.2011, 02:03:04.567

// getFullYear() -> receive year (4 numbers)

// getMonth() -> receive month (from 0 to 11)

// getDate() -> receive a date of a month (from 1 to 31)

// getHours(), getMinutes(), getSeconds(), getMilliseconds()

// we can also receive a specific day of the week -> getDay() -> 0 - Sunday and 6 - Saturday

// getTime() -> returns a timestamp – the number of milliseconds elapsed since January 1, 1970 UTC+0.

// getTimezoneOffset -> Returns the difference in minutes between UTC and the local time zone:
// if you're in a timezone UTC-1, 60 is entered
// if you're in a timezone UTC+3, -180 is entered
alert( new Date.getTimezoneOffset() );

// these methods are allowing to set components of date and time:
setFullYear(year, [month], [date]);
setMonth(month, [date]);
setDate(date);
setHours(hour, [min], [sec], [ms]);
setMinutes(min, [sec], [ms]);
setSeconds(sec, [ms]);
setMilliseconds(ms);

let today = new Date();

today.setHours(0);
alert(today); // today's date is displayed, but the value of hours is 0

today.setHours(0, 0, 0, 0);
alert(today); // still today's date is displayed, but time is going to be 00:00:00


// auto-correction is a cool feature of an object Date
let date = new Date(2013, 0, 32); // 32 Jan 2013???
alert(date); // ...1st Feb 2013!

let date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);

alert( date ); // 1 Mar 2016


// let's get a date 70 seconds from now
let date = new Date();
date.setSeconds(date.getSeconds() + 70);

alert( date ); // displays the correct date


let date = new Date(2016, 0, 2); // 2 Jan 2016

date.setDate(1); // set the first day of the month
alert( date );

date.setDate(0) // the first day of the month is 1, so the last day of the previous month 
                // is displayed
alert( date ); // 31 Dec 2015


// if we convert Date into a number, we will receive a timestamp similar to date.getTime():
let date = new Date();
alert(+date); // amount of milliseconds, same thing as date.getTime()


// important side effect is that we can subtract dates and we will receive a difference in ms
let start = new Date();

for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
}

let end = new Date();

alert(`Loop completed the work in ${end - start} milliseconds`);


// it's probably better to rewrite it this way tho:
let start = Date.now(); // amount of milliseconds from 1 Jan 1970

for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
}

let end = Date.now();

alert(`Loop completed the work in ${end - start} milliseconds`);
*/

function diffSubtract(date1, date2) {
    return date2 - date1;
}

function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
}

function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();

    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(date1, date2);
    return Date.now() - start;
}

alert( 'Time diffSubtract: ' +bench(diffSubtract) + 'ms' );
alert( 'Time diffGetTime: ' +bench(diffGetTime) + 'ms' );

// if there are others processes going on, the results can be inaccurate, so we can use this method

let time1 = 0;
let time2 = 0;

// we can add a prelaunch, to optimize the process even further
bench(diffSubtract);
bench(diffGetTime);

// bench(diffSubtract) and bench(diffGetTime) are launched in order 10 times
for (let i = 0; i < 10; i++) {
    time1 += bench(diffSubtract);
    time2 += bench(diffGetTime);
}

alert( 'Final time diffSubtract' + time1);
alert( 'Final time diffGetTime' + time2);

// Date.parse(str) is reading the date out of a string

let ms = Date.parse('2012-01-26T13:51:50.417-07:00');

alert(ms); // 1327611110417 (timestamp)

// we can also create an object new Date out of our timestamp
let date = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );

alert(date);
