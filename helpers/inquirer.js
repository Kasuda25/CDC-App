import inquirer from "inquirer";
import colors from "colors";

const opcionesMenu = [
    {
        type: 'list',
        name: 'opciones',
        message: '',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Clientes`
            },
            {
                value: '2',
                name: `${'2.'.green} Productos`
            },
            {
                value: '10',
                name: `${'0.'.green} Salir`
            }
        ]
    }
];

export const inquirerMenu = async () => {
    console.clear();

    console.log('========================'.green);
    console.log(' Selecciona una opcción ');
    console.log('========================\n'.green);

    const { opciones } = await inquirer.prompt(opcionesMenu);
    return opciones;
}

export const pausa = async () => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Precione ${'ENTER'.green} para continuar`
        }
    ];

    await inquirer.prompt(question);
}