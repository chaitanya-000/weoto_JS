//Simple synchronous operations
const hello = () => {
  console.log("hello 1");
};
const namaste = () => {
  console.log("Namaste 2");
};
const hola = () => {
  console.log("Hola..... 3");
};

hello();
namaste();
hola();
//*************************************************************************************************************** */

//Call stack |  Job Queue (micro tasks) >Callback Queue (macro tasks)
const one = () => console.log("one");
const two = () => console.log("two"); //2nd
const three = () => console.log("three");

const ParentFunction = () => {
  console.log("Hello world"); //go directly into call stack - 1st

  //after the promises are resolved. Then browser api's will be pushed into the callback queue. One with the min time will be pushed into
  //the call stack by the event loop.
  setTimeout(one, 5000); //6th
  setTimeout(three, 3000); //5th

  new Promise((resolve, reject) => resolve("1st promise")).then(
    (
      resolve //priority will be given to promises (job queue) and also lexically. So this will execute 3rd
    ) => console.log(resolve)
  );
  new Promise((resolve, reject) => resolve("2nd promise")).then(
    (resolve) => console.log(resolve) //priority will be given to promises (job queue) and also lexically. So this will execute 4th
  );

  two(); //go directly into the call stack. will call and execute the two function
};

ParentFunction(); //will be executed first

//                      Hello world
// script.js:18          two
// script.js:28        1st promise
// script.js:31        2nd promise
// script.js:19         three
// script.js:17        one
