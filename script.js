//Closures

//works with all variable declaration keywords. - let & const. Also for function statements and function expressions.

const parentFunction = () => {
  console.log("parentFunction", x);

  const y = 2000;
  const childFunction = () => {
    console.log("childFunction", y);

    const z = 400000;
    const grandChildFunction = () => {
      console.log("grandChildFunction", x);
      z;
    };
    grandChildFunction();
  };
  childFunction();
};
const x = 1000;
parentFunction();

//  Hierarchy    |   Lexical scope
//  Parent      --> GLobal
//  child       --> its own scope + parent's lexical env
//  grandChild  --> its own scope + child(Its parent) lexical env.

// Thats the reason the grandchild has access to variables outside its local scope. This is called scope chaining
//When JSEngine does not find the reference to variable inside its scope it goes one level up i.e to its Lexical parent and this goes on until the reference is located.

//Lexical environment - location of a function or a variable, where its physically present inside the code.

//CLOSURES : function + its lexical scope
const xyz = () => {
  console.log(name);
  const abc = () => {
    const pqr = () => {
      const name = "chaitanya.................................";
      console.log("name");
    };
    pqr();
  };
  abc();
};

xyz();

///CUrrying
const add = (a) => {
  const b = (b) => {
    const c = (c) => {
      return a + b + c;
    };
    return c;
  };
  return b;
};
console.log(add(1)(2)(3));
