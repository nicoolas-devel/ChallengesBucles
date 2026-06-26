let edad = Number(prompt("Ingrese su edad"));

while (edad < 18 || edad > 99) {

    edad = Number(prompt("Edad inválida. Ingrese nuevamente"));

}

console.log("Edad válida.");