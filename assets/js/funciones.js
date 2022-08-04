
//Best Practices
// Simplificar funciones lo mas que se pueda

//1. Utilizar keyword function
//2. Nombrar nuestra funcion
//3. Utilizar () y abrir y cerrar la funcion {}

// function myFunction(){
//     //Aqui va el cuerpo de la funcion
//     console.log("Hola mundo!");
// }

// myFunction();

// function myName(){
//     let name = "Laura Sanchez";
//     console.log(name);
// }

// myName();

// function scopeFunction(){
//     let local = "Esto se encuentra dentro de la funcion";
//     console.log(local);
// }

// scopeFunction();
// console.log(local);

// var nombre = "Laura Sanchez";

// function globalScope() {
//     console.log(nombre);
// }

// globalScope();

//Scope de variables
//LET
//Scope global, local
//Hoisting: La variable no existe para nuestro interprete de JS

// console.log(a);

let a = "hoisting de let";

//VAR
//Scope global, local
//Hoisting: No se puede utilizar o invocar antes de declararla. Aparece como undefined.

// console.log(b);

var b = "hola";

//CONST
//Scope global, local
//Hoisting: No se puede utilizar. No existe para nuestro interprete de JS.

// console.log(c);

const c = "x";

//Input

// const miNombre = "Laura Sanchez";

// function input(x){
//     console.log(x);
// }

//Parametro declarado en variable
// input(miNombre);
//Parametro aleatorio
// input("Laura S");
// input(2);

//Funcion con mas de un parametro

// function dosPara(x, y){
//     console.log(x+y);
// }

// dosPara("Hola","Mundo!");

// function tresPara(x, y, z){
//     console.log(x+y+z);
// }

// tresPara("Hola","soy","Laura");

//Output

function output(){
    let x = "Hola";
    return x;
}

// Podemos recibir el dato de forma directa
//console.log(output());

// Podemos guardar el output en una variable
// Y la podemos utilizar despues
// const receive = output();

// console.log(receive);

// Funcion con parametro y return

function areaRectangulo(b, a) {
    var resultado = b * a;
    return resultado;
}

console.log(areaRectangulo(6, 3));

function areaTriangulo(b, a) {
    var resultado = (b * a) / 2;
    return resultado;
}

console.log( areaTriangulo(8, 4));

//Objeto

const conejo = {
    "nombre": "Griselo",
    "edad": 27,
    "color": "Gris",
    "peso": 500,
}