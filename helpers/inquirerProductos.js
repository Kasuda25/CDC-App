import inquirer from "inquirer";
import colors from "colors";
import { productos } from "../models/productos.js";

const opcionesProductos = [
    {
        type: 'list',
        name: 'opciones',
        message: '',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Agregar`
            },
            {
                value: '100000',
                name: `${'0.'.green} Volver`
            }
        ]
    }
]

export const listadoProductos = async () => {
    console.clear();

    console.log('==========='.green);
    console.log(' Productos ');
    console.log('===========\n'.green);

    const choices = productos.map((elemento, i) => {
        const cont = `${i + 1}`;

        return {
            value: elemento.id,
            name: `${cont.green}. ${elemento.nombre} | Precio: $${elemento.precio}`
        }
    });

    choices.unshift({
        value: '10000',
        name: '0.'.green + ' Volver'
    })

    const pregunta = [
        {
            type: 'list',
            name: 'producto',
            message: '',
            choices
        }
    ];

    const { producto } = await inquirer.prompt(pregunta);
    return producto;
}

export const productoOpciones = async () => {
    console.clear();

    console.log('=========='.green);
    console.log(' Producto ');
    console.log('==========\n'.green);

    const { opciones } = await inquirer.prompt(opcionesProductos);
    return opciones;
}

export const agregarProducto = async (message) => {
    console.clear();

    console.log('=========='.green);
    console.log(' Producto ');
    console.log('==========\n'.green);

    const question = [
        {
            type: 'input',
            name: 'cantidad',
            message,
            validate(value) {
                if (value == '') {
                    return 'Por favor ingrese la cantidad.'
                }
                return true
            }
        }
    ];

    const { cantidad } = await inquirer.prompt(question);
    return cantidad;
}