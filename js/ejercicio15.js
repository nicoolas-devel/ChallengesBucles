let suma = 0;
let cantidad = 0;
let continuar = "si";

while (continuar == "si") {

    let numero = Number(prompt("Ingrese un número"));

    suma = suma + numero;

    cantidad++;

    continuar = prompt("¿Desea ingresar otro número? (si / no)");

}

let promedio = suma / cantidad;

console.log("El promedio es: " + promedio);