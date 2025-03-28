// Ejercicio 1: Calculadora de Propinas Una app para calcular propinas en restaurantes.Crea una función calcularPropina(total, porcentaje) que reciba el total de la cuenta y el porcentaje de propina, y retorne el monto final a pagar (total + propina).
const prompt = require("prompt-sync")();


let totalCuenta = parseInt(prompt("ingresa el total a pagar "))
let propina = parseInt(prompt("ingresa el porcentaje de la propina "))

function calcularPropina (totalCuenta, propina){
    const totalPropina = totalCuenta * (propina / 100);
    const precioFinal = totalCuenta + totalPropina;
    console.log("total mas propina es: " + precioFinal);
}
calcularPropina();


