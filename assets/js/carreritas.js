
var positions = ["Roberto", "Andrea", "Jorge", "Ramiro", "Sofia"];

positions.splice(2,2);

// "Roberto", "Andrea", "Sofia"

positions.unshift("Ramiro","Jorge");

// "Ramiro", "Jorge", "Roberto", "Andrea", "Sofia"

positions.splice(2,1);

// "Ramiro", "Jorge", "Andrea", "Sofia"

positions.splice(2, 2, "Sofia", "Andrea");

// "Ramiro", "Jorge", "Sofia", "Andrea"

positions.push("Jose");

// "Ramiro", "Jorge", "Sofia", "Andrea", "Jose"

console.log(positions)
