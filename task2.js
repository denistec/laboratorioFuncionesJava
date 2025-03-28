// Ejercicio 2: Validar Contraseña Formulario de registro. Crea una función validarContraseña(contraseña) que retorne true si: - Tiene al menos 8 caracteres. - Incluye un número. - Incluye una mayúscula.

const prompt = require("prompt-sync")();

let claveIngresada = prompt("ingrese la clave ")
//cuenta los caracteres
let totalCaracteres = claveIngresada.length;
console.log("Total de caracteres:", totalCaracteres);
//revisa si tiene numeros
function tieneNumeros() {
    const numeros = "0123456789";
    for (let i=0; i < numeros.length; i++){
        if (claveIngresada.includes(numeros[i])) {
            return true;}
        }
}
console.log(tieneNumeros(claveIngresada));
//revisa si tiene mayusculas
function tieneMayuscula(claveIngresada) {
    return /[A-Z]/.test(claveIngresada);
}
console.log("tiene mayuscula " + tieneMayuscula(claveIngresada))

if (totalCaracteres >= 8 && tieneNumeros(claveIngresada) == true && tieneMayuscula(claveIngresada) == true ) {
    console.log("la clave es valida"); 
} else {
        console.log("la clave no es valida")
    }    
        
    



