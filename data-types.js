let foo = 0;

foo = 100;

const PI = 3.1416;

// Single line comment

/*
    Multi
    line
    comment

*/

let foobar;

function mifunc() {
    console.log(foobar);
}
console.log(foobar); // null, placeholder, place in memory, null 
foobar = "Hola mundo!"

mifunc();

// Boolean - true / false
// null - case sensitive
// undefined - unexpected return values
// Number - 3 or 3.1456
// BigInt - 192398918238123n arbitrary-precision format
// String - "a" - "ab" - "Howdy!" - 'hola!'
// symbol
// Object

foobar = 100

let varA = '';
let varB = 0;
let varC = true || false;

let varD = 5 + parseInt('hola');

console.log(varD);

// Literal
const arr = [0, [], {}, "hola"]; // literal

const obj = {
    key: 'value'
} // Object literal