//Ejercicio 3: Buscar Producto en Inventario - Sistema de gestión de inventario. Crea una función buscarProducto(nombre, inventario) que retorne el producto si existe, o null si no. El inventario debería estar PREDEFINIDO ejemplo:const inventario = [{ nombre: "Camisa", precio: 20 },{ nombre: "Zapatos", precio: 50 }];

const prompt = require("prompt-sync")();

let productoAbuscar = prompt("ingresa el nombre del producto ")
let inventario = [{ nombre: "Camisa", precio: 20 },{ nombre: "Zapatos", precio: 50 }];
console.log(inventario);
console.log(typeof(inventario));

function buscarProducto() {
    for (let i = 0; i < inventario.length; i++) {
        if (i == "Camisa")
        {
            console.log("si esta disponible");
            
        }
    }
   }
   buscarProducto(productoAbuscar);



