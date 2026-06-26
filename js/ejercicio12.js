let contraseña = "Niquis";

let ingreso = prompt("Ingrese la contraseña");

while (ingreso != contraseña) {

    ingreso = prompt("Contraseña incorrecta. Intente nuevamente");

}

console.log("¡Contraseña correcta!");