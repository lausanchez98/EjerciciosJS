//Program
var num = prompt("Ingrese el numero a verificar:");

if (num % 2 == 0) {
  alert(`El numero ${num} es par`);
} else {
  alert(`El numero ${num} es impar`);
}


// Function
var num = prompt("Ingrese el numero a verificar:");

function isEven(x){
    if (x % 2 == 0) {
        var result = alert(`El numero ${x} es par`);
      } else {
        var result = alert(`El numero ${x} es impar`);
      }
    return result;
}

isEven(num);