// El input se da por medio de prompt

function calcPetAge(x, y) {
  const dogEquivalent = 7;
  let humanAge = 7 * y;
  return `El perrito/a ${x} tiene ${humanAge} años humanos.`;
}

let petName = prompt("¿Cual es el nombre del perrito/a?");
let age = prompt("Y ¿cual es su edad?");

calcPetAge(petName, age);

/* El input se ingresa desde el codigo

function calcPetAge(x,y){
    const dogEquivalent = 7;
    let humanAge = 7 * y;
    return (`El perrito/a ${x} tiene ${humanAge} años humanos.`);
}

calcPetAge("Lilo",5);

*/
