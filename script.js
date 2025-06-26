// TIPOS DE DATOS EN JAVASCRIPT

let numero = 10;               // Number
let texto = "Hola";            // String
let booleano = true;           // Boolean
let lista = [1, 2, 3];         // Array
let objeto = { clave: "valor" }; // Object
let nada = null;              // Null
let indefinido;               // Undefined


// CONDICIONALES

let edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

// Operador ternario
let mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";
console.log(mensaje);