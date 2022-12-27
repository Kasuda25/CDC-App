import inquirer from "inquirer";
import colors from "colors";
import { clientes } from "../models/clientes.js";

const opcionesClientes = [
    {
        type: 'list',
        name: 'opciones',
        message: '',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Ver clientes`
            },
            {
                value: '2',
                name: `${'2.'.green} Agregar Cliente`
            },
            {
                value: '0',
                name: `${'0.'.green} Volver`
            }
        ]
    }
];

const opcionesCliente = [
    {
        type: 'list',
        name: 'cliente',
        message: '',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Comprar`
            },
            {
                value: '2',
                name: `${'2.'.green} Ver carrito`
            },
            {
                value: '3',
                name: `${'3.'.green} Ver información`
            },
            {
                value: '4',
                name: `${'4.'.green} Eliminar`
            },
            {
                value: '100',
                name: `${'0.'.green} Volver`
            }
        ]
    }
];

const opcionesCarrito = [
    {
        type: 'list',
        name: 'carrito',
        message: '',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Comprar`
            },
            {
                value: '2',
                name: `${'2.'.green} Eliminar productos`
            },
            {
                value: '10000',
                name: `${'0.'.green} Volver`
            }
        ]
    }
];

const opcionesInfoCliente = [
    {
        type: 'list',
        name: 'informacion',
        message: '',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Actualizar datos`
            },
            {
                value: '2',
                name: `${'2.'.green} Ver historial de compras`
            },
            {
                value: '10000',
                name: `${'0.'.green} Volver`
            }
        ]
    }
];

export const inquirerClientes = async () => {
    console.clear();

    console.log('========================'.green);
    console.log(' Selecciona una opcción ');
    console.log('========================\n'.green);

    const { opciones } = await inquirer.prompt(opcionesClientes);
    return opciones;
}

export const nuevoClienteNombre = async (message) => {
    console.clear();

    console.log('==============='.green);
    console.log(' Nuevo Cliente ');
    console.log('===============\n'.green);

    const question = [
        {
            type: 'input',
            name: 'nombre',
            message,
            validate(value) {
                if (value == '') {
                    return 'Por favor ingrese un nombre.'
                }
                return true
            }
        }
    ];

    const { nombre } = await inquirer.prompt(question);
    return nombre;
}

export const nuevoClienteDocumento = async (message) => {
    console.clear();

    console.log('==============='.green);
    console.log(' Nuevo Cliente ');
    console.log('===============\n'.green);

    const question = [
        {
            type: 'input',
            name: 'documento',
            message,
            validate(value) {
                if (value == '') {
                    return 'Por favor ingrese un número de documento.'
                }
                return true
            }
        }
    ];

    const { documento } = await inquirer.prompt(question);
    return documento;
}

export const clienteOpciones = async () => {
    console.clear();

    console.log('========================'.green);
    console.log(' Selecciona una opcción ');
    console.log('========================\n'.green);

    const { cliente } = await inquirer.prompt(opcionesCliente);
    return cliente;
}

export const listadoClientes = async () => {
    console.clear();

    console.log('=========='.green);
    console.log(' Clientes ');
    console.log('==========\n'.green);

    const choices = clientes.map((elemento, i) => {
        const cont = `${i + 1}`;

        return {
            value: elemento.id,
            name: `${cont.green}. ${elemento.nombre} (Doc: ${elemento.documento})`
        }
    });

    choices.unshift({
        value: '1000',
        name: '0.'.green + ' Volver'
    })

    const pregunta = [
        {
            type: 'list',
            name: 'cliente',
            message: '',
            choices
        }
    ];

    const { cliente } = await inquirer.prompt(pregunta);
    return cliente;
}

export const verCarrito = async (idCliente) => {
    console.clear();

    console.log('=========='.green);
    console.log(' Carrito ');
    console.log('==========\n'.green);

    const cliente = clientes.find((x) => x.id === Number(idCliente));

    cliente.carrito.forEach((elemento, i) => {
        const cont = `${i + 1}`;
        console.log(`${cont.green}. ${elemento.nombre} x${elemento.cantidad} $${elemento.precio}`);
    });

    console.log('\n');

    const { carrito } = await inquirer.prompt(opcionesCarrito);
    return (carrito);
}

export const eliminarProductosCarrito = async (idCliente) => {
    console.clear();

    console.log('=========='.green);
    console.log(' Carrito ');
    console.log('==========\n'.green);

    const cliente = clientes.find((x) => x.id === Number(idCliente));

    const choices = cliente.carrito.map((elemento, i) => {

        const idx = `${i + 1}`.green;

        return {
            value: elemento.id,
            name: `${idx}. ${elemento.nombre} x${elemento.cantidad} $${elemento.precio}`
        }
    });

    choices.unshift({
        value: '100000',
        name: '0.'.green + ' Cancelar'
    })

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ];

    const { id } = await inquirer.prompt(preguntas);
    return id;
}

export const verInfoCliente = async () => {
    console.clear();

    console.log('========='.green);
    console.log(' Cliente ');
    console.log('=========\n'.green);

    const { informacion } = await inquirer.prompt(opcionesInfoCliente);
    return informacion;
}

export const modificarClienteNombre = async (message) => {
    console.clear();

    console.log('==============='.green);
    console.log(' Nuevo Cliente ');
    console.log('===============\n'.green);

    const question = [
        {
            type: 'input',
            name: 'nombre',
            message,
            validate(value) {
                if (value == '') {
                    return 'Por favor ingrese un nombre.'
                }
                return true
            }
        }
    ];

    const { nombre } = await inquirer.prompt(question);
    return nombre;
}

export const modificarClienteDocumento = async (message) => {
    console.clear();

    console.log('==============='.green);
    console.log(' Nuevo Cliente ');
    console.log('===============\n'.green);

    const question = [
        {
            type: 'input',
            name: 'documento',
            message,
            validate(value) {
                if (value == '') {
                    return 'Por favor ingrese un número de documento.'
                }
                return true
            }
        }
    ];

    const { documento } = await inquirer.prompt(question);
    return documento;
}

export const historialCompras = async (idCliente) => {
    console.clear();

    console.log('========='.green);
    console.log(' Compras ');
    console.log('=========\n'.green);

    const cliente = clientes.find((x) => x.id === Number(idCliente));

    const choices = cliente.compras.map((elemento, i) => {
        const cont = `${i + 1}`;

        return {
            value: elemento.id,
            name: `${cont.green}. ${elemento.id} Total: $${elemento.total}`
        }
    });

    choices.unshift({
        value: '100000',
        name: '0.'.green + ' Volver'
    })

    const pregunta = [
        {
            type: 'list',
            name: 'compras',
            message: '',
            choices
        }
    ];

    const { compras } = await inquirer.prompt(pregunta);
    return compras;
}