let opcion;

while (opcion != 0) {

    opcion = Number(prompt(
        "MENÚ\n\n" +
        "1 - Saludar\n" +
        "2 - NO ABRIR POR FAVOR.\n" +
        "0 - Salir"
    ));

    if (opcion == 1) {
        console.log("¡Hola Dani y Joseph!");
    }

    if (opcion == 2) {
        console.log("Que miras chismoso/a. Te dije no abrir");
    }

}

console.log("Programa finalizado.");