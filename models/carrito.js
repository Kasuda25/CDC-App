import { clientes } from "./clientes.js";

export default class Carrito {
    constructor(id, nombre, cantidad, precio) {
        this.id = id;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}

export function eliminarProducto(idProducto, idCliente) {
    const cliente = clientes.find((x) => x.id === Number(idCliente));
    const indice = cliente.carrito.findIndex((c) => c.id === idProducto);
    cliente.carrito.splice(indice, 1);
}