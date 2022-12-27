export const clientes = [];

export let clienteActivo = '';

export default class Cliente {
    constructor(id, nombre, documento, carrito, compras) {
        this.id = id;
        this.nombre = nombre;
        this.documento = documento;
        this.carrito = [];
        this.compras = [];
    }
}

export function login(idCliente) {
    const cliente = clientes.find((x) => x.id === Number(idCliente));
    clienteActivo = '';
    clienteActivo = cliente;
}

export function eliminarCliente(idCliente) {
    const indice = clientes.findIndex((c) => c.id === idCliente);
    clientes.splice(indice, 1);
    console.log('Cliente eliminado');
}