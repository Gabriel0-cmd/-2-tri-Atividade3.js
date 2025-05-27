let peso = 60;  
let altura = 1.65; 

let imc = peso / (altura * altura);
let resultado = "";

if (imc < 18.5) {
  resultado = "Abaixo do peso";
} else if (imc < 25) {
  resultado = "Peso normal";
} else if (imc < 30) {
  resultado = "Sobrepeso";
} else {
  resultado = "Obesidade";
}

console.log("IMC: " + imc.toFixed(1) + " - " + resultado);