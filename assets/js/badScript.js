//  Bad practices
// La variables tiene que empezar con letras, es decir, no solo admite numeros como nombre de variable
var num = 1;
// Un valor numerico solo debe llevar numeros, en caso de que esto fuera de tipo string tendria que llevar comillas 
var second = 1;
var second = "1s";

// Why doesn't it work?
// La palabra if es una palabra reservada que no puede usarse como valor, de igual forma que la anterior si su contexto es que esta es un valor tipo string debera usar comillas
var if_condition;
var if_condition =  "if";


// Should equal formula for wild wings
// Se añade tambien punto y coma.
var Buffalowings = wings + buffalo;


// Null variable
// La palabra null es una palabra reservada que no se debe usar por si sola en el nombre de una variable ya que es un tipo de dato. Se añade tambien punto y coma.
var variableNull = Null;


// All variables should equal 1
// Se agrega el igual a 1 para que todas esas variables tengan ese valor y se modifica la variable con nombre incorrecto.
var uno, num1, one, wan, uma, um = 1;


// It's broken
// No se tiene contexto de lo que se quiere presentar en la consola, pero asumiendo, el .1 debe ir dentro de los parentesis o removerse completamente de la expresion
console.log(.1);
console.log();


// Console.log para mostrar [area] de un cuadrado
// Se declaran los valores de las variables ladoa y ladob y se corrige el simbolo de multiplicacion para que realice la operacion.
var ladoa = 5;
var ladob = 5;
console.log(ladoa * ladob);

// Should equal 4
// Se remueven las comillas del segundo valor a sumar para que pueda realizar la operacion
var four = 2 + 2;

// Doesn't work for math problems
// pi es una constante, la cual no puede ser modificada y en este caso no se puede nombrar a una variable asi.
var pi = "3.141516";
const pi = 3.141516;