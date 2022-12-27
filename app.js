import Cliente, { clienteActivo, clientes, eliminarCliente, login } from "./models/clientes.js";
import { inquirerMenu, pausa } from "./helpers/inquirer.js";
import { clienteOpciones, inquirerClientes, nuevoClienteNombre, listadoClientes, verCarrito, eliminarProductosCarrito, verInfoCliente, modificarClienteNombre, historialCompras } from "./helpers/inquirerClientes.js";
import { agregarProducto, listadoProductos, productoOpciones } from "./helpers/inquirerProductos.js";
import { productos } from "./models/productos.js";
import Carrito, { eliminarProducto } from "./models/carrito.js";
import { comprar, infoCompra } from "./models/compras.js";

const main = async () => {
    let opt = '';

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                do {
                    opt = await inquirerClientes();

                    switch (opt) {
                        case '1':
                            do {
                                const idCliente = await listadoClientes();
                                if (idCliente !== '1000') {
                                    do {
                                        opt = await clienteOpciones();

                                        switch (opt) {
                                            case '1':
                                                login(idCliente);
                                                do {
                                                    const idProducto = await listadoProductos();
                                                    if (idProducto !== '10000') {
                                                        do {
                                                            opt = await productoOpciones();

                                                            switch (opt) {
                                                                case '1':
                                                                    const cantidad = await agregarProducto('Cantidad: ');
                                                                    let idCliente = clienteActivo.id;
                                                                    const cliente = clientes.find((x) => x.id === Number(idCliente));
                                                                    const producto = productos.find((x) => x.id === Number(idProducto));
                                                                    let id = idProducto;
                                                                    let nombre = producto.nombre;
                                                                    let precio = producto.precio * cantidad;
                                                                    const nuevaCompra = new Carrito(id, nombre, cantidad, precio);
                                                                    cliente.carrito.push(nuevaCompra);
                                                                    console.log('Producto agregado');
                                                                    await pausa();
                                                                    break;
                                                            }
                                                        } while (opt !== '100000')
                                                    } else {
                                                        break;
                                                    }
                                                } while (opt !== '10000');
                                                break;

                                            case '2':
                                                do {
                                                    opt = await verCarrito(idCliente);

                                                    switch (opt) {
                                                        case '1':
                                                            comprar(idCliente);
                                                            await pausa();
                                                            opt = '10000';
                                                            break;

                                                        case '2':
                                                            do {
                                                                const idProducto = await eliminarProductosCarrito(idCliente);
                                                                eliminarProducto(idProducto, idCliente);
                                                                break;
                                                            } while (opt !== '100000');
                                                            break;
                                                    }
                                                } while (opt !== '10000');
                                                break;

                                            case '3':
                                                do {
                                                    opt = await verInfoCliente();

                                                    switch (opt) {
                                                        case '1':
                                                            const cliente = clientes.find((x) => x.id === Number(idCliente));

                                                            const nombre = await modificarClienteNombre('Igrese el nombre: ');
                                                            const documento = await modificarClienteNombre('Igrese el documento : ');

                                                            cliente.nombre = nombre;
                                                            cliente.documento = documento;
                                                            break;

                                                        case '2':
                                                            do {
                                                                const idCompra = await historialCompras(idCliente);

                                                                if (idCompra !== '100000') {
                                                                    infoCompra(idCompra, idCliente);
                                                                    await pausa();
                                                                    opt = '100000';
                                                                }
                                                            } while (opt !== '100000');
                                                            break;
                                                    }
                                                } while (opt !== '10000');
                                                break;

                                            case '4':
                                                eliminarCliente(idCliente);
                                                await pausa();
                                                opt = '100';
                                                break;
                                        }
                                    } while (opt !== '100');
                                } else {
                                    break;
                                }
                            } while (opt !== '1000');
                            break;
                        case '2':
                            const nombre = await nuevoClienteNombre('Nombre: ');
                            const documento = await nuevoClienteNombre('Documento: ');

                            let id = Math.floor(Math.random() * 7856785686757);
                            const nuevoCliente = new Cliente(id, nombre, documento);
                            clientes.push(nuevoCliente);
                            break;
                    }
                } while (opt !== '0');
                break;

            case '2':
                do {
                    const idProducto = await listadoProductos();
                    if (idProducto !== '10000') {

                    } else {
                        break;
                    }
                } while (opt !== '10000');
                break;
        }
    } while (opt !== '10');
}

main();