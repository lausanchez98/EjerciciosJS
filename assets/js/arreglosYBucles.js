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

let propiedadesDeMiComputadora = {
    marca: "Asus", //La marca es mi identificador, y "Asus" es mi valor.
    procesador: "Intel i7", 
    ram: "16 GB", 
    almacenamiento: "1 TB"
}

console.log(propiedadesDeMiComputadora);
console.log("La ram de mi computadora es ", propiedadesDeMiComputadora["ram"]);
console.log("El tamaño de pantalla es de: ", propiedadesDeMiComputadora["pantalla"]);


let publicacionRedSocial = {
    nombre: "Felipe",
    usuario: "@felipecontenis",
    fecha: "Viernes",
    likes: "5000",
    descripcion: "Esta es una bonita foto de lasagna",
    ubicacion: "Estado de Mexico"
}

console.log("Estas son las publicciones de");


/*
Metodos de los arrays

En los arreglos, tenemos ciertos metodos o instrucciones que nos van a permititr manipular los elementos de estos arreglos. Estos nos permiten desde agregar y eliminar elementos, hasta reordenarlos.

La sintaxis basica del metodo es .nombreMetodo(valorAModificar);

Podemos dividir estos metodos en 3:

- Metodos transformadores
- Metodos accesores
- Metodos repetitivos (spoiler)

*/

console.log("////////////////////////////////////");

var arrayDeEjemplo = ["Manzanas", "Peras", "Mangos", "Mandarinas", "Uvas", "Sandia", "Fresas"];

console.log("Este es nuestro arreglo original de 7 elementos", arrayDeEjemplo);


//Metodos transformadores

//push(): agrega un elemento al final del arreglo

arrayDeEjemplo.push("Pitaya");
console.log("Agregamos la Pitaya a nuestro arreglo de ejemplo: ", arrayDeEjemplo);

//pop(): elimina el ultimo elemento del arreglo

arrayDeEjemplo.pop();
console.log("Eliminamos el ultimo elemento del arreglo", arrayDeEjemplo);

//unshift(): agrega uno o mas elementos al principio del arreglo

arrayDeEjemplo.unshift("Banana", "Tuna", "Lichi", "Aguacate");
console.log("Agregamos 4 elementos al principio del arreglo: ", arrayDeEjemplo);

//shift(): elimina el primer elemento y devuelve ese valor eliminado

arrayDeEjemplo.shift();
console.log("Eliminamos el primer elemento del arreglo: ", arrayDeEjemplo);

//sort(): ordena los elementos del arreglo y devuelve el arreglo ya ordenado de forma ascendente

arrayDeEjemplo.sort();
console.log("Este es mi arreglo de ejemplo ordenado", arrayDeEjemplo);

//reverse(): invierte el orden de los elementos del arreglo y devuelve el arreglo invertido

arrayDeEjemplo.reverse();
console.log("Este es nuestro arreglo invertido: ",arrayDeEjemplo);

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

let mesesDelAnio = ["Enero", "Febrero", "Agosto", "Septiembre"];
console.log("Este es nuestro arrreglo de los meses del anio: ", mesesDelAnio);

//Eliminar datos usando splice
let mesesBorrados = mesesDelAnio.splice(2, 2, "Abril", "Mayo");
console.log("Este es el nuevo arreglo con los meses borrados: ",mesesDelAnio);

//Agregar elementos sin borrar nada en el arreglo

let diasSemana = ["Lunes", "Martes", "Miercoles"];
console.log("Los dias de la semana son: ",diasSemana);

diasSemana.splice(3,0,"Jueves","Viernes","Sabado");
console.log("Los nuevos dias de la semana son: ", diasSemana);

//Metodos accesores

var ensalada = ["Jitomate", "Zanahoria", "Lechuga", "Chicharos", "Cebolla"];

//length(): nos permite saber el numero de elementos o longitud del arreglo

console.log("Tenemos estos elementos en el arreglo ensalada:", ensalada.length);

//join(): permite unir los elementos del arreglo con una cadena de texto, un separador entre nuestros elementos
console.log("Esta es una feliensalada", ensalada.join("-"));

//concat(): permite unir dos o mas arrays en uno solo. Devuelve un nuevo arreglo con los elementos de los otros arreglos

let dulces = ["galletas", "cheetos", "glorias", "gansitos", "picafresas", "tamborines", "galletas", "galletas"];

let mezcla = ensalada.concat(dulces);
console.log("Esta es mi mezcla:", mezcla);

//indexOf: nos permite saber la posicion de un elemento dentro del arreglo

console.log("La posicion de los cheetos de mi arreglo dulces: ", dulces.indexOf("cheetos"));

//lastIndexOf(): permite saber la ultima posicion de un elemento determinado dentro del arreglo
console.log("La ultima posicion de las galleta es: ", dulces.lastIndexOf("galletas"));

//toString
//valueOf
//includes