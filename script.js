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


// BUCLES
// Bucle for
for (let i = 0; i < 5; i++) {
  console.log("Iteración " + i);
}

// Bucle while
let contador = 0;
while (contador < 5) {
  console.log("Contador: " + contador);
  contador++;
}   
// Bucle do-while
let contador2 = 0;
do {
  console.log("Contador do-while: " + contador2);
  contador2++;
} while (contador2 < 5);
// Bucle for...of
let listaNumeros = [1, 2, 3, 4, 5];
for (let numero of listaNumeros) {
  console.log("Número: " + numero);
}   
// Bucle for...in
let objetoPersona = { nombre: "Juan", edad: 30 };
for (let clave in objetoPersona) {
  console.log(clave + ": " + objetoPersona[clave]);
}
// Bucle forEach
listaNumeros.forEach(function(numero) {
  console.log("Número con forEach: " + numero);
});
// Bucle map
let listaCuadrados = listaNumeros.map(function(numero) {
  return numero * numero;
});
console.log("Cuadrados: " + listaCuadrados);



// FUNCIONES
function saludar(nombre) {
  return "Hola, " + nombre;
}