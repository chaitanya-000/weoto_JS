//Hoisting - variables can be used before they are declared.

//ERROR : Uncaught ReferenceError: Cannot access 'a' before initialization
console.log(a);
const a = 20;

//ERROR : Uncaught ReferenceError: Cannot access 'a' before initialization
console.log(b);
let b = 20;

//Will log undefined only when declared with var
console.log(c);
var c = 30;

// Function expression vs function statements
// Hoisting wont work like this.

// ERROR :  ReferenceError: Cannot access 'myFunction' before initialization - Function expression
myFunction();
const myFunction1 = () => {
  console.log("Hello world");
};

//This will work.
myFunction();
function myFunction2() {
  console.log("Hello world!");
}
