import { clientes } from "./clientes.js";

export default class Compras {
    constructor(id, productos, total) {
        this.id = id;
        this.productos = productos;
        this.total = total;
    }
}

export function comprar(idCliente) {
    const cliente = clientes.find((x) => x.id === Number(idCliente));

    if (cliente.carrito[0] == undefined) {
        console.log('El carrito está vacio. Primero agrega algún producto antes de comprar.');
    } else {
        let id = Math.floor(Math.random() * 7856785686757);
        let total = 0;
        cliente.carrito.forEach((elemento) => {
            total = total + elemento.precio;
        });
        const comprar = new Compras(id, [...cliente.carrito], total);
        cliente.compras.push(comprar);
        cliente.carrito = [];

        console.log('Compra exitosa');
    }
}

export function infoCompra(idCompra, idCliente) {
    console.clear();

    console.log('========='.green);
    console.log(' Compras ');
    console.log('=========\n'.green);

    const cliente = clientes.find((x) => x.id === Number(idCliente));
    const compra = cliente.compras.find((x) => x.id === Number(idCompra));

    compra.productos.forEach((elemento, i) => {
        const cont = `${i + 1}`;
        console.log(`${cont.green}. ${elemento.nombre} x${elemento.cantidad} $${elemento.precio}`);
    });
}