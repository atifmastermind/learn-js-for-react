// ? functions in deep

//? Function statement or function declaration
// function statement also known as function declaration.
// This type of creating a function is called "a" function statement.
// During the hoisting phase/memory creation phase, "a" is created as a memory, and this function is assigned to "a"
// function a() {
// console.log("called a");
//}
//? function expression
// This type of function is called a function expression. The difference between a function statement and a function expression is hoisting. In this case, b is treated like any other variable; it is assigned undefined initially until the code hits this line itself, so when the javascript engine executes this line by line and it reaches this line, only this function is assigned to this variable "b" until then it is undefined.
// var b = function () {
// console.log("called a");
//}

//? anonymous function
// A function without a name is called an anonymous function. This function does not have its own identity; if we run this example, this will give us an error. According to ECMA script spacification, a function statement should always have a name. If we can't create something like this, what is the use of it? Anonymous functions are used in a place where functions are used as values. We can use it to assign it to some variable.
// function () {
// }

//? named function expresion
// is exactly the same as the above function expression, but instead of using an anonymous function, here we use a function with a name. This is called a name function expression.
// var b = function xyz() {
//   console.log("called a");
// };
// b();
// xyz(); // !this will give an error because we can't used that outside, but we can called this inside a function.

//? difference between parameters & arguments

// A lot of programmers use parameters and arguments interchangeably, but they are very different.
// Whenever you create a function, whatever you put in these () identifiers or this label is known as a parameter. so this peram1 ( label/identifier or variable ) this is a local variable in the function scope so this peram1 and peram2 are local variables inside this function you can not access this outside. (these label and identifier which gets those values are known as parameters)
// and when used inside b(1,2) this called arguments.( the vaues which we pass inside a function are known as arguments )

// var b = function (peram1, peram2) {
//   console.log("b called");
// };
// b(1,2);

//? first class functions
// the ability to use functions as values is known as first class functions ( the ability of functions to be used as values and can be pass this in an argument to another functions and can be return from the functions is this ability is known as frist class functions in javascript )
// this is a very heavy term for what we already know, instead of these arguments we can even pass functions inside another functions as an arguments, function are treated as values
// var b = function (param1) {
//   console.log(param1);
// };

// function xyz() {}
// b(xyz);

// we can return a function from a function
// var b = function (param1) {
//   return function () {};
// };
// console.log(b());

//? arrow function
