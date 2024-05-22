const sum = (a,b) => {
    console.log(a+b);
}

sum(1,2)

// ----------- Single parameter can be pass without curly braces -----------------

const print = n => {
    console.log(n);
}

print(2);

// ------------- we have to use parenthesis whether if we are giving parameter or not -----------

const hello = () => {
    console.log("hello, world");
}

hello();

// ----------------------------------- implicit return ----------------------------

const multiply = (a,b) => a*b;

console.log(multiply(2,3));