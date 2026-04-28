// Ejercicio 01

const nombre = "Douglas";
let edad = 46;

console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);

// Ejercicio 02

const precioOriginal = 150;
const descuento = 20;

const montoDescuento = (precioOriginal * descuento) / 100;
const precioFinal = precioOriginal - montoDescuento;

console.log(`Precio original: $${precioOriginal}`);
console.log(`Descuento (${descuento}%): $${montoDescuento}`);
console.log(`Precio final: $${precioFinal}`);



// Ejercicio 03

let edadPersona = 16;

if (edadPersona >= 18) {
  console.log('La persona es mayor de edad.');
} else {
  console.log('La persona es menor de edad.');
}



// Ejercicio 04

let nota = 7;

if (nota >= 9) {
  console.log('Excelente');
} else if (nota >= 7) {
  console.log('Bueno');
} else if (nota >= 5) {
  console.log('Regular');
} else {
  console.log('Reprobado');
}



// Ejercicio 05

let dia = 3;

switch (dia) {
  case 1:
    console.log('Lunes');
    break;
  case 2:
    console.log('Martes');
    break;
  case 3:
    console.log('Miércoles');
    break;
  case 4:
    console.log('Jueves');
    break;
  case 5:
    console.log('Viernes');
    break;
  case 6:
    console.log('Sábado');
    break;
  case 7:
    console.log('Domingo');
    break;
  default:
    console.log('Día inválido');
}



// Ejercicio 06

for (let i = 1; i <= 10; i++) {
  console.log(i);
}



// Ejercicio 07

let suma = 0;

for (let i = 1; i <= 100; i++) {
  suma += i;
}

console.log(`La suma de 1 a 100 es: ${suma}`);



// Ejercicio 08

let contador = 5;

while (contador >= 1) {
  console.log(contador);
  contador--;
}

console.log('¡Despegue!');



// Ejercicio 09

for (let i = 1; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(`${i} - par`);
  } else {
    console.log(`${i} - impar`);
  }
}



// Ejercicio 10

const numero = 7;

console.log(`--- Tabla del ${numero} ---`);

for (let i = 1; i <= 10; i++) {
  const resultado = numero * i;
  console.log(`${numero} x ${i} = ${resultado}`);
}