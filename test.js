console.log("Este es mi primer script");
alert("Mi primer alerta");
prompt("Mi primer prompt");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

alert("¡Bienvenido a mi página!");

// 2. Pedir datos
const usuario = prompt("¿Cómo te llamas?");

if (usuario) {
    // Usamos backticks (`) para poder usar variables dentro del texto con ${}
    alert(`Hola ${usuario}, ¡encantado de conocerte!`);
    console.log(`El visitante se llama: ${usuario}`);
} else {
    alert("No quisiste decirme tu nombre :(");
}

// 3. Pedir edad
let edad = prompt("Ingresa tu edad");

// 4. Confirmaciones
const quiereVer = confirm("¿Quieres ver el contenido completo?");

if (quiereVer) {
    console.log("El usuario aceptó ver el contenido");
    // Mostramos los datos finales
    alert(`¡Hola!\n${usuario || "Desconocido"}, tu edad es ${edad} años.`);
} else {
    console.log("El usuario rechazó ver el contenido");
    alert("Entendido, navegación limitada.");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let resultado = prompt("Ingresa tu nota: ");

if (resultado >= 3){
    alert("pasaste mi rey")
} else {
    alert("no pasaste vago de mrd")
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let nota = 2; // Prueba con 1, 2, 3, 4 o 5

switch (nota) {
    // Casos para "menor a 3"
    case 0:
    case 1:
    case 2:
        console.log("Perdiste vago de mrd");
        break;

    // Casos para "3 o más"
    case 3:
    case 4:
    case 5:
        console.log("Ganaste mi rey");
        break;

    // Si no es ninguno de los números anteriores
    default:
        console.log("Valor inválido");
        break;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Ejemplo básico de push y pop con un arreglo simple
const frutas = [23];
console.log("Arreglo inicial:", frutas);

// agregar al final
frutas.push(42);
console.log("Después de push:", frutas);

// quitar último elemento
frutas.pop();
console.log("Después de pop:", frutas);

// trabajar con shift y unshift (inicio del arreglo)

// agregar al principio
frutas.unshift(10);
console.log("Después de unshift:", frutas);

// quitar primer elemento
frutas.shift();
console.log("Después de shift:", frutas);

// puedes repetir push/pop/shift/unshift para practicar

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1. Creamos el array de frutas
const frutah = ["Manzana", "Pera", "Limón", "Sandía", "Mango"];

// 2. Buscamos el índice de "Limón"
const indiceLimon = frutah.indexOf("Limón");

// 3. Verificamos el resultado
if (indiceLimon !== -1) {
    console.log(`🍋 ¡Encontrado! El limón está en el índice: ${indiceLimon}`);
    // Recuerda que JS empieza a contar desde 0:
    // [0] Manzana, [1] Pera, [2] Limón...
} else {
    console.log("No se encontró el limón en la lista ❌");
}

