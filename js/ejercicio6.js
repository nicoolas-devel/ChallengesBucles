let numeroSecreto = Math.floor(Math.random() * 10) + 1;

let numero = Number(prompt("Adivina el número del 1 al 10"));

while (numero != numeroSecreto) {

    numero = Number(prompt("Incorrecto. Intenta nuevamente"));

}

console.log("¡Correcto!");