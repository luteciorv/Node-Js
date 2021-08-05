// Carregar módulos
var Sum = require("./Sum");
var Subtract = require("./Subtract");
var Multiply = require("./Multiply");
var Division = require("./Division");

var a = 25;
var b = 5;

console.log(a + " + " + b + " = " + Sum(a, b));
console.log(a + " - " + b + " = " + Subtract(a, b));
console.log(a + " x " + b + " = " + Multiply(a, b));
console.log(a + " / " + b + " = " + Division(a, b));