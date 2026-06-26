let palabra = prompt("Ingrese una palabra");

let contador = 0;

for (let i = 0; i < palabra.length; i++) {

    if (
        palabra[i] == "a" ||
        palabra[i] == "e" ||
        palabra[i] == "i" ||
        palabra[i] == "o" ||
        palabra[i] == "u"
    ) {

        contador++;

    }

}

console.log("La palabra tiene " + contador + " vocales.");