export const productos = [];

class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

for (let i = 1; i <= 50; i++) {
    let id = Math.floor(Math.random() * 7856785686757);
    let nombre = `Producto ${i}`;
    let precio = Math.floor(Math.random() * 123456);
    const producto = new Producto(id, nombre, precio);
    productos.push(producto);
}