// let a = 1000;

// console.log(a);

// var b = 2000;

//  Time between variable is hoisted - variable is assigned
//Temporal dead zone - Anything before line 3 is the temporal dead zone of a

// var variable’s Temporal dead zone ends immediately after its hoisting—not when the variable gets fully initialized
// with the value specified during its declaration. Just opposite  case with let and const

//The scope of name inside the greet is within its block
const name = "Mark";
let greet = () => {
  const name = "Tony";
  console.log(name);
};
greet();

// but if we do this. The O/P will be 23 --> lexical environment
const age = 23;
const printAge = () => {
  console.log(age);
};
greet();
