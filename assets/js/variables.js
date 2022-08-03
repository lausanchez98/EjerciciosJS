//Mejores practicas

//CamelCase
// Utilizar mayusculas en la mitad de nuestras variables
// variableTriangulo, miNombre, miEdad, miDireccion

//Palabras reservadas 
// No usar palabras reservadas para declarar una variable
// if, return, true, false, for, while, let, va, etc...

// var while;
// var null ;
// var if;
// var true;
// var false;
// var var;
// var const;
// var let;

//Seguir un estandar personal

//Normalizar los datos que se van a ingresar

var tel = "+52 81 20 45 ## ##"

//Pueden contener numeros, letras, guion bajo, simbolo de dolar
var a;
var a1;
var a_Nombre;
var a$Direccion;

//Declaracion de variables
// Type number
var edad = 24;
var peso = 78;
var miopia = 3;
var astigmatismo = 3;

// Type Boolean
var ciego = true;
var hambre = true;
var bateria = false;

//Type String
var nombre = "Laura Sanchez";
var dir = 'Monterrey';
var nacionalidad = `Mexicana`;

//Variables declaradas con un mismo valor
var x, y, z = 4;

//Variables undefined
var xx, yy, zz;

// Variable tres = 4
// var dos = tres
// var uno = tres
var uno = dos = tres = 4;

//Escribir en una sola linea variables de nuestro carrito de compras 

var queso, jamon, tortilla, huevo, agua, chile, tomate, calabacita, pollo, manzana, jicama, pepino, limon;

//typeOf();
// Nos indica a que tipo de dato pertenece nuestra variable

var a = 2;
typeof(a);
// number

var b = '2';
typeof(b);
// string

var c = true;
typeof(c);
// boolean

var d = null;
typeof(d);
// object

var e = NaN;
isNaN(e);
// true

typeof(e);
// number , es una constante


//IsNaN() es una funcion que nos permite verficar si un dato es o no es un numero

//NaN es tal cual un tipo de dato en Java
isNaN(NaN);
// true

//Nueva forma de declarar variables
var a = 1;

//Nos permite modificar su valor actual sin restricciones
let a = 1;

//Constante
// es una variable con un dato que no va a cambiar 
const a = 1;
//Variables contantes deben mantenerse con un solo valor
//No es posible cambiarles el valor posterior a su declaracion 

//Arrays
const carritoCompras = ["Leche", "Tortillas", "Mango", "Maruchan", "Aguacate", "Sandia", "Queso", "Piña", "Pollo", "Jamon", "Harina", "Huevo", "Mantequilla", "Chocolate", "Servilletas"];
const carros = ["BMW", "Volvo", "Mercedes", "Ford"];
const combinacion = [1, "Hola", null, "5"];