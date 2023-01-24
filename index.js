import * as moduloMatematicas from './modulos/controller.js'
import chalk from 'chalk';

const sum = moduloMatematicas.suma(4, 12)
console.log(sum);

const multiplica = moduloMatematicas.multiplica(5, 6)
console.log(chalk.green(multiplica));

console.log(chalk.blue('Hello world!'));