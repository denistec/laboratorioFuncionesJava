// Ejercicio 2: Validar Contraseña Formulario de registro. Crea una función validarContraseña(contraseña) que retorne true si: - Tiene al menos 8 caracteres. - Incluye un número. - Incluye una mayúscula.
const prompt = require("prompt-sync")();

let claveIngresada = prompt("ingrese la clave ")

//cuenta los caracteres
let totalCaracteres = claveIngresada.length;
console.log("Total de caracteres:", totalCaracteres);
//revisa si tiene numeros
function tieneNumeros(claveIngresada) {
    const numeros = "0123456789";
    for (let i = 0; i < numeros.length; i++){  // (bucle externo) Recorre los caracteres de la variable claveIngresada
        for (let j = 0; j < numeros.length; j++ ) //(bucle interno)compara en cada iteración el caracter de claveIngresada con el caracter de numeros
            if (claveIngresada[i] == numeros[j]) { //revisa si los caracteres de ambas variables son iguales
                console.log("si tiene numero");
                return true; //return detiene la funcion y le da valor de ture.
            }
        }
        console.log("no tiene numero");        
        return false; 
    }
    tieneNumeros(claveIngresada);
//revisa si tiene mayusculas
function tieneMayuscula() {
    for (let i=0; i< claveIngresada.length; i++) {
        if (claveIngresada[i] >="A" && claveIngresada[i] <="Z") {
        console.log("si tiene mayuscula");
        return true;
        }
    }    
    console.log("no tiene mayuscula");
    return false;
}
tieneMayuscula(claveIngresada);
// revisar resultados de las funciones para establecer si la clave es valida o no
if (totalCaracteres >= 8 && tieneNumeros(claveIngresada) == true && tieneMayuscula(claveIngresada) == true ) {
    console.log("la clave es valida"); 
} else {
        console.log("la clave NO es valida")
    }    
        
    



