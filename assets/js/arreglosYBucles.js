/*
Arrays o arreglos

-- Definicion --
Un arreglo o array es u conjunto de datos que se pueden almacenar en una sola variable.

Cuando tenemos una variable, la usamos para almacenar un solo dato. En cambio, en un arreglo, guardamos MUCHOS datos a manera de lista.

Un array ya no es un tipo de dato primitivo, se considera un objeto porque es una estructura de datos.

*/

//Ejemplo 1
// let nombre = "Felipe"; // se almacena un solo dato

// array = ["Felipe", "Ivonne", "Zabdiel", "Briana", "Alonso"];

//Ejemplo de un array con distintos tipos de datos
// arrayAnimalitosDelBosque = ["Felipe", 23, true, null, undefined]; //Debe existir relacion de los elementos con el nombre del array

/*

--Formas de crear un array--

1. Primera forma

Utilizando la palabra reservada "new Array"

var colores = new Array(3); //Esta forma nos permite crear un array con un numero de elementos especificado, pero aún no sabemos que datos va a guardar.

var colores = new Array("rojo", "verde", "azul"); //En este punto estamos creando el array y ya le asignamos los valores en las posiciones que queremos mostrar.

var marcaDeColores = new Array("Mapita", "Primacolor", "BlancaNieves", "Faber Castell", "Norma", "Crayola");

2. Forma

La segunda forma se trata de crear el arreglo solo usando corchetes []. Esta forma es la mas usada para crear arreglos en JS.

var colores = [];

var marcaDeColores = ["Mapita", "Primacolor", "BlancaNieves", "Faber Castell", "Norma", "Crayola"];

*/

/*
Ejemplos de array

listaDePerritos = ["Chihuahua", "Calupoh", "Mestizos", "", ""];
console.log(listaDePerritos);

listaDelSuper = ["Leche", "Huevos", "Jamon", "Queso", "Carne"];
console.log(listaDelSuper);

movies = ["Magnolia", "Pretty Woman", "Elvis", "Taxi Driver", "Midsommar", "Notting Hill"];
console.log(movies);

pasteles = ["zanahoria", "Carlos v", "rollo de mango"];
console.log(pasteles);

marcasDeAutos = ["BMW", "Volkswagen", "Audi", "Chevrolet", "Toyota", "Kia", "Hyundai"];
console.log(listaArmasValorant);

tiposDeAbejas = [“reyna”, “obrera”, “bebe”, “Zangano”, “Voladora”];
console.log(tiposDeAbejas);

listaArmasValorant = ["Vandal", "Phantom", "Spectre", "Operator", "Marshall"];
console.log(listaArmasValorant);

playasBonitas = ["Chelem", "Isla Mujeres","Litibu", "Zicatela"];
console.log(playasBonitas);
/* 

-- Acceder a elementos de un arrey

Antes de querer mostrar los elementos de un arreglo, hay que definir algunas cosas:

-Posicion de los elementos, donde empezamos a enumer desde el 0 y estas posiciones se llaman indices

Posicion de elementos de la lista del super

1: "Leche" 
2: "Huevos"
3: "Jamon"
4: "Queso"
5: "Carne"

Numero de elementos no es lo mismo que su posicion.

*/

/*Ejemplo de Arreglo 2
listaDelSuper = ["Leche", "Papitas", "Jabon", "Nachos", "Huevos"];
console.log(listaDelSuper)

console.log("El producto en la posicion 1 es : " + listaDelSuper[1]);
console.log("El producto en la posicion 4 es : " + listaDelSuper[4]);
console.log("El producto en la posicion 2 es : " + listaDelSuper[2]);
console.log("El producto en la posicion 6 es : " + listaDelSuper[6]);

Encontramos que al tratar de seleccionar un elemento de nuestro que no existe, aparecera el mensaje undefined. Esto es porque la gran ventaja que tienen los arreglos en JS es que podemos crecer su tamanio cuando nosotros queramos. Para esto, el arreglo se prepara por si en algun momento recibe mas informacion.*/

/*Array asociativo

Son arreglos donde cada elemento esta asociado no solo con su indice, si no que tambien esta asignado a un identificador.

Sintaxis de un arreglo asociativo

*/

// let propiedadesDeMiComputadora = {
//   marca: "Asus", //La marca es mi identificador, y "Asus" es mi valor.
//   procesador: "Intel i7",
//   ram: "16 GB",
//   almacenamiento: "1 TB",
// };

// console.log(propiedadesDeMiComputadora);
// console.log("La ram de mi computadora es ", propiedadesDeMiComputadora["ram"]);
// console.log(
//   "El tamaño de pantalla es de: ",
//   propiedadesDeMiComputadora["pantalla"]
// );

// let publicacionRedSocial = {
//   nombre: "Felipe",
//   usuario: "@felipecontenis",
//   fecha: "Viernes",
//   likes: "5000",
//   descripcion: "Esta es una bonita foto de lasagna",
//   ubicacion: "Estado de Mexico",
// };

// console.log("Estas son las publicciones de");

/*
Metodos de los arrays

En los arreglos, tenemos ciertos metodos o instrucciones que nos van a permititr manipular los elementos de estos arreglos. Estos nos permiten desde agregar y eliminar elementos, hasta reordenarlos.

La sintaxis basica del metodo es .nombreMetodo(valorAModificar);

Podemos dividir estos metodos en 3:

- Metodos transformadores
- Metodos accesores
- Metodos repetitivos (spoiler)

*/

// console.log("////////////////////////////////////");

// var arrayDeEjemplo = [
//   "Manzanas",
//   "Peras",
//   "Mangos",
//   "Mandarinas",
//   "Uvas",
//   "Sandia",
//   "Fresas",
// ];

// console.log("Este es nuestro arreglo original de 7 elementos", arrayDeEjemplo);

//Metodos transformadores

//push(): agrega un elemento al final del arreglo

// arrayDeEjemplo.push("Pitaya");
// console.log(
//   "Agregamos la Pitaya a nuestro arreglo de ejemplo: ",
//   arrayDeEjemplo
// );

//pop(): elimina el ultimo elemento del arreglo

// arrayDeEjemplo.pop();
// console.log("Eliminamos el ultimo elemento del arreglo", arrayDeEjemplo);

//unshift(): agrega uno o mas elementos al principio del arreglo

//arrayDeEjemplo.unshift("Banana", "Tuna", "Lichi", "Aguacate");
// console.log("Agregamos 4 elementos al principio del arreglo: ", arrayDeEjemplo);

//shift(): elimina el primer elemento y devuelve ese valor eliminado

// arrayDeEjemplo.shift();
// console.log("Eliminamos el primer elemento del arreglo: ", arrayDeEjemplo);

//sort(): ordena los elementos del arreglo y devuelve el arreglo ya ordenado de forma ascendente

// arrayDeEjemplo.sort();
// console.log("Este es mi arreglo de ejemplo ordenado", arrayDeEjemplo);

//reverse(): invierte el orden de los elementos del arreglo y devuelve el arreglo invertido

// arrayDeEjemplo.reverse();
// console.log("Este es nuestro arreglo invertido: ", arrayDeEjemplo);

//slice(): extrae una seccion del arreglo o cadena y devuelve una cadena nueva copiando el arreglo (no se modifica nada, sino se crea una copia)

/*splice():Modificar el arreglo en 3 formas distintas

- Eliminar elementos del arreglo
- Agregar elementos nuevos al arreglo
- Reemplazar elementos que ya existen en el arreglo

*/

/*splice(indice de inicio, cantidad de elementos a eliminar, nuevo elemento1, nuevoelemento2, etc.)

    - Indice de inicio: la posicion desde donde comenzamos a eliminar elementos (primer numero dentro del parentesis)
    - Cantidad de elementos a eliminar: numero de elementos a borrar (segundo numero del parentesis)
    - elemento a agregar : los nuevos elementos que se agregan al arreglo(tercer elemento del parentesis)
*/

// let mesesDelAnio = ["Enero", "Febrero", "Agosto", "Septiembre"];
// console.log("Este es nuestro arreglo de los meses del anio: ", mesesDelAnio);

//Eliminar datos usando splice
// let mesesBorrados = mesesDelAnio.splice(2, 2, "Abril", "Mayo");
// console.log("Este es el nuevo arreglo con los meses borrados: ", mesesDelAnio);

//Agregar elementos sin borrar nada en el arreglo

// let diasSemana = ["Lunes", "Martes", "Miercoles"];
// console.log("Los dias de la semana son: ", diasSemana);

// diasSemana.splice(3, 0, "Jueves", "Viernes", "Sabado");
// console.log("Los nuevos dias de la semana son: ", diasSemana);

//Metodos accesores

// var ensalada = ["Jitomate", "Zanahoria", "Lechuga", "Chicharos", "Cebolla"];

//length(): nos permite saber el numero de elementos o longitud del arreglo

// console.log("Tenemos estos elementos en el arreglo ensalada:", ensalada.length);

//join(): permite unir los elementos del arreglo con una cadena de texto, un separador entre nuestros elementos
// console.log("Esta es una feliensalada", ensalada.join("-"));

//concat(): permite unir dos o mas arrays en uno solo. Devuelve un nuevo arreglo con los elementos de los otros arreglos

// let dulces = [
//   "galletas",
//   "cheetos",
//   "glorias",
//   "gansitos",
//   "picafresas",
//   "tamborines",
//   "galletas",
//   "galletas",
// ];

// let mezcla = ensalada.concat(dulces);
// console.log("Esta es mi mezcla:", mezcla);

//indexOf: nos permite saber la posicion de un elemento dentro del arreglo

// console.log(
//   "La posicion de los cheetos de mi arreglo dulces: ",
//   dulces.indexOf("cheetos")
// );

//lastIndexOf(): permite saber la ultima posicion de un elemento determinado dentro del arreglo
// console.log(
//   "La ultima posicion de las galleta es: ",
//   dulces.lastIndexOf("galletas")
// );

//toString():

// console.log(mezcla.toString());

//valueOf(): permite devolver el valor del arreglo

// console.log(mezcla.valueOf());

//includes(): permite si un elemento existe dentro de un arreglo

// console.log(
//   "Asi podremos saber si un elemento esta dentro de un arreglo: ",
//   mezcla.includes("gansitos")
// ); //true
// console.log(
//   "Asi podremos saber si un elemento esta dentro de un arreglo: ",
//   mezcla.includes("cacahuates")
// ); //false

// //Metodos repetidores

// //filter(): recorre el array y devuelve uno nuevo con los elementos

// var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log("Numeros del 1 al 10", numeros);

// var numeros1al5 = numeros.filter((numero) => numero < 5);
// console.log(
//   "Estos son los numeros que cumplen la condicion de ser menores que 5 ",
//   numeros1al5
// );

// var numeros6al9 = numeros.filter((numero) => numero < 5 && numero < 10);
// console.log(
//   "Estos son los numeros que cumplen la condicion de ser del 6 al 9 ",
//   numeros6al9
// );

//map(): recorrer el arreglo, modificar los elementos presentes en el y retornar esos valores modificados en uno nuevo con la misma longitud que el arreglo original.

// var map = numeros.map((numero) => numero * 3);
// console.log(map);

//Ejercicio improvisado tablas del 1 al 10

// var arregloBase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var tabla2 = arregloBase.map((arregloBase) => arregloBase * 2);
// console.log("Tabla");

//forEach(): este metodo permite llamar a una funcion "callback" especifica una vez por cada elemento sobre el que se itera del array, al igual que otros iteradores como map o filter, este metodo recibe algunos parametros.

/*
- Elemento actual: elemento del arreglo que se va a evaluar a sobre el que se hace la transicion.

- Indice: la posicion que tiene el elemento dentro del arreglo.

-Arreglo objetivo: arreglo por el cual se esta haciendo esta iteracion:

ESTE METODO NO CAMBIA EL ARREGLO ORIGINAL, DEVUELVE UNO NUEVO CON LOS ELEMENTOS MODIFICADOS

*/

// let listaNumeros = [3, 6, 8, 10, 12];
// let impar = 3;

// listaNumeros.forEach(function (numero) {
//   if (numero === impar) {
//     listaNumeros.shift();
//   }
// });

// console.log(
//   "Estos son los elementos del array que no son impares",
//   listaNumeros
// );

/*
Bucles o loops

En JS, los bucles o loops son utilizados para realizar tareas repetitivas con base en una condicion. Las condiciones normalmente devuelven un true o false al ser evaluadas, ademas de que el bucle continuara ejecutandose hasta que la condicion devuelva un false

Normalmente tenemos 3 ciclos
- While (mientras)
- Do while (hacer mientras)
- For (para)

Tenemos otras sentencias mas especificas:
- for in: sirve para recorrer un arreglo y por cada uno de llos elementos de este arreglo obtenemos LA POSICION
- for of: sirve para recorrer un arreglo, y por cada uno de los elementos de este arreglo, obtenemos SU VALOR

*/

/*
Sentencia WHILE (mientras)

Esta senntencia nos va a permitir recorrer un bloque de codigo siempre que se cumpla una condicion especifica, donde el resultado debe ser true.

La estructura de WHILE es:

palabraReservada while (condicion que tiene que ser true){
 // code block
}

*/

// Programa para sumar numeros ALERTA, ESTE PROGRAMA EXPLOTA LA COMPUTADORA

//let numeroParaSumar = 8;
//while (numeroParaSumar < 10){
//  console.log("El numero es menor a 10");
//

// let valorInicial = 0; //Declaramos un valor inicial en 0
// while(valorInicial<10){
//     valorInicial ++;
//     console.log(valorInicial);
// }

//

// console.log("//////////////////")

//Practica grupal: Escribir un programa que pida al usuario un numero entero positiva y muestre por pantalla todos los numeros impares desde 1 hasta ese numero

// let numLim = prompt("Ingresa el numero (positivo y entero) que sera el limite: ");
// let numIni = 1;

// while (numIni<=numLim) {
//     if(numIni % 2 != 0){
//         console.log(numIni);
//     }
//     numIni++;
// }

/* Caso de prueba: 9

El numero inicial es 1
El 1 es menor o igual a 9? si entonces
El residuo de 1 entre 2 es diferente a 0? si, entonces 
Imprime el 1 
Ahora el numero inicial incrementa en 1 

Ahora, el numero inicial es 2
El 2 es menor o igual a 9? si entonces
El residuo de 2 entre 2 es diferente a 0? no, entonces 
Sale de la condicion
Ahora el numero inicial incrementa en 1 

Ahora, el numero inicial es 3
El 3 es menor o igual a 9? si entonces
El residuo de 3 entre 2 es diferente a 0? si, entonces 
Imprime el 3 
Ahora el numero inicial incrementa en 1

Ahora, el numero inicial es 4
El 4 es menor o igual a 9? si entonces
El residuo de 4 entre 2 es diferente a 0? no, entonces 
Sale de la condicion
Ahora el numero inicial incrementa en 1

Ahora, el numero inicial es 5
El 5 es menor o igual a 9? si entonces
El residuo de 5 entre 2 es diferente a 0? si, entonces 
Imprime el 5 
Ahora el numero inicial incrementa en 1

Ahora, el numero inicial es 6
El 6 es menor o igual a 9? si entonces
El residuo de 6 entre 2 es diferente a 0? no, entonces 
Sale de la condicion
Ahora el numero inicial incrementa en 1

Ahora, el numero inicial es 7
El 7 es menor o igual a 9? si entonces
El residuo de 7 entre 2 es diferente a 0? si, entonces 
Imprime el 7 
Ahora el numero inicial incrementa en 1

Ahora, el numero inicial es 8
El 8 es menor o igual a 9? si entonces
El residuo de 8 entre 2 es diferente a 0? no, entonces 
Sale de la condicion
Ahora el numero inicial incrementa en 1

Ahora, el numero inicial es 9
El 9 es menor o igual a 9? si entonces
El residuo de 9 entre 2 es diferente a 0? si, entonces 
Imprime el 9 
Ahora el numero inicial incrementa en 1

Ahora, el numero inicial es 10
El 10 es menor o igual a 9? no entonces
Termina el programa

*/

/*
Do While (HACER MIENTRAS O HACER HASTA)

El bucle do while nos sirve para ejecutar una sentencia especificada hasta que la condicion de aprobacion se evalua despues de ejecutar la sentencia, dando como resultado que la sentencia especificada se ejecuta al menos una vez.

En pocas palabras, con el while preguntamos una vez, evaluamos la condicion y ejecutamos la instruccion, con el do while, ejecutamos la instruccion al menos una vez, y luego preguntamos la condición.

Estructura basica de un do while

palabraReservada do{
    //code block
}while(condición);

*/

// let numerito = 0; //Declaramos la variable en 0
// do {//Esto se hara
    // console.log("El numero es: ", numerito);//Imprimimos
    // numerito ++;//aumentamos de 1 en 1
// } while(numerito <= 10); //.. hasta que el numero sea menor igual a 10

//While vs Do While

/*console.log("While");

let numeroWhile = 0; //inciamos en 0
//imorime aca

while (numeroWhile <5){ //mientras variable sea menor a 5
    numeroWhile ++; //la incremento en 1
    console.log(numeroWhile); //la imprimo
    
}



console.log("Do WHile");
let numeroDoWhile = 0; //inciamos en 0
do{ //hacemos esto...
    console.log(numeroDoWhile); //imprimir
    numeroDoWhile ++; //aumentar en 1
}
while (numeroDoWhile<5);//...mientras numero sea menor a 5
*/

/*
Sentencia FOR (para)

Este ciclo sirve para iterar sobre una seccion de una variable. Es diferente al while por que le podemos pasar una lista de valores y ejecutar una vez por cada uno de ellos. Para esto tenemos tres elementos:


- El valor inicial de la variable que vamos a iterar (i = 0)
- La condicion que tiene que cumplirse para que el bucle se siga ejecutando (i <5)
- La operacion que se realiza una vez que termina el bucle (i++)

Estructura basica del for:

for (valor inicial, condicion, operacion){

}

*/

//Ejemplo: 

console.log("For");
for (let i = 0; i < 10; i++){
console.log(i);
}

//let i=0 es mi valor inicial
// i < 5 establece la condicion para que el bucle se siga ejecutando
// i++ incrementa el valor en 1


let animalitosDelBosque =["ardillas", "conejos", "venados", "osos", "mariposas"];

//in: posiciones EN el arreglo

for (posiciones in animalitosDelBosque){
    console.log(posiciones)
}
//of: valores DEL arreglo
for (valores of animalitosDelBosque){
    console.log(valores)
}

// for in (lo que vamos a buscar en el arreglo)
// for of (lo que vamos a buscar del arreglo )