//  block and its use- wrapping multiple statements where JS expects a single statement

const x = true;
if (x) console.log("X is a truthy value");

// What if I want greet () to run only if x is true =- { }

//  let and const are blocked scope
{
  const a = 10;
  let b = 12;
  var c = 14;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(c);
console.log(a);
console.log(b);

const myFunc = () => {
  console.log("hello", name, "!");
  const name = "chaitanya";
};
myFunc();
if (name == "chaitanya") console.log("Username = chaitanya");

const greet = () => {
  const printName = () => {
    const name = "chaitanya";
    console.log(name);
  };
  printName();
  console.log(typeof name);
};
console.log(name);
greet();

const uno = 1;
{
  const uno = "one";
  console.log(uno);
}

const parentFun = () => {
  const fun1 = () => {
    const name = 2;
    alert(name);
  };
  const fun2 = () => {
    const name = "";
    console.log(name);
    console.log(typeof name);
  };
  fun1();
  fun2();
};
parentFun();
const a = 100;
{
  const a = 1000;
  {
    const a = 100000;
    console.log(a);
  }
}
