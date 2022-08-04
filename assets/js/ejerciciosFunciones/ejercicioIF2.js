//Program
var birthYear = prompt("¿Cual es el año en que nacio la persona?");

if (birthYear <= 2004){
   alert(`La persona nacida en ${birthYear} es mayor de edad`);
} else (birthYear > 2004) {;
   alert(`La persona nacida en ${birthYear} es menor de edad`);
}

//Function
var birthYear = prompt("¿Cual es el año en que nacio la persona?");

function isAMinor(x){
   if (x <= 2004){
      var message = alert(`La persona nacida en ${x} es mayor de edad`);
    } else (birthYear > 2004) {;
       var message = alert(`La persona nacida en ${x} es menor de edad`);
    }
   return message;
}

isAMinor(birthYear);