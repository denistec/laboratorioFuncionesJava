//Ejercicio 3: Buscar Producto en Inventario - Sistema de gestión de inventario. Crea una función buscarProducto(nombre, inventario) que retorne el producto si existe, o null si no. El inventario debería estar PREDEFINIDO ejemplo:const inventario = [{ nombre: "Camisa", precio: 20 },{ nombre: "Zapatos", precio: 50 }];

const prompt = require("prompt-sync")();

let productoIngresado = prompt("ingresa el nombre del producto ")

let inventario = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Zapatos", precio: 50 }
];


function buscarProducto(nombre,producto){
    for (let i in inventario) {
        if (inventario[i].nombre == productoIngresado) {
            console.log(inventario[i].nombre + " si existe");
            console.log(inventario[i]);
            return true;
        }a
    }
    console.log("null");
    return false;    
}
buscarProducto(productoIngresado);   



