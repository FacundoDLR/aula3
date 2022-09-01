//Aqui usaremos el comando "import" para llamar las clases de los otros archivos.
//Pero antes debemos crear un archivo Json "module", para poder utilizar node.
/* Ese archivo package.json. Ese archivo package.json es la definición de proyecto para Node donde le indicamos algunos parámetros, algunos datos, y uno de esos datos es que vamos a importar módulos, vamos a tener una codificación modular. Un único archivo y a lo mejor sí va a tener archivos separados. */

/* Para crear ese archivo package.json lo podemos crear de dos formas: lo podemos hacer a mano si conocemos la estructura de él y todas las variables, o podemos hacer uso de una herramienta que nos permite Node utilizar que se llama NPM, de Node Package Management y ejecutamos ese comando diciéndole que inicie nuestro proyecto. */

/* Npm init, de iniciar, ejecutamos, ahí nos indica que va a crear el archivo package.json, con todas las definiciones necesarias. Nombre del proyecto. Vamos a decirle cuentasbancopopular. No puedo usar mayúsculas intercaladas, todo minúsculo. La versión de nuestro proyecto, la versión inicial 1.0, le damos enter. */
/* Descripción. Le podemos colocar Gestión de Cuentas Corrientes del Banco Popular. Muy importante esta variable: entry point o punto de entrada para nuestro proyecto, lo cual va a ser el archivo que Node va a buscar para ejecutar. ¿Qué archivo es? Nosotros tenemos ya un index.js. Es lo que comúnmente se usa. Hay otros frameworks que utilizan otros archivos como app.js, pero en nuestro caso mantenemos el index.js. Le damos enter. */
/* Y si volvemos a nuestro Visual Studio Code ahora tenemos un archivo package.json. Ese archivo package.json tiene todas las definiciones que hicimos del proyecto: el nombre, la versión, la descripción, el punto de entrada que es el archivo principal, el main. No tenemos archivos de prueba, el autor y la licencia. Vamos a hacer un clear, ejecutamos. */
import { cliente } from "./cliente.js";
import { cuentaCorriente } from "./cuentaCorriente.js";

const cliente1 = new cliente('Marcos', 23444267);
const cuentaCorriente1 = new cuentaCorriente(cliente1, 1, 650);
/* console.log(cliente1);
console.log(cuentaCorriente1); */

const cliente2 = new cliente('Brisa', 48888912);
const cuentaCorriente2 = new cuentaCorriente(cliente2, 89, 894);
/* console.log(cliente2);
console.log(cuentaCorriente2); */

let saldo = cuentaCorriente1.verSaldo();

saldo = cuentaCorriente1.depositoCuenta(300);
/* console.log('El saldo actual es de (CuentaCorriente1) ' + saldo); */

/* console.log(cuentaCorriente2.cliente);

cuentaCorriente2.cliente = 0;
console.log(cuentaCorriente2.cliente); */


/* let parametroValor = 1020;

console.log('Parámetro Valor',parametroValor);
cuentaCorriente1.transferirParaCuenta(parametroValor, cuentaCorriente2);
console.log('Parámetro Valor',parametroValor);

const saldoBrisa = cuentaCorriente2.verSaldo();

console.log('Cuenta de Brisa',cuentaCorriente2); */

//lo de abajo pertenece al aula anterior de estudio.
/* let saldo = cuentaCorriente1.verSaldo();
console.log('el saldo actual es ' + saldo);

saldo = cuentaCorriente1.depositoCuenta(700);
console.log('el saldo actual es ' + saldo);

saldo = cuentaCorriente1.retiroCuenta(200);
console.log('el saldo actual es ' + saldo); */

console.log(cuentaCorriente.cantidadCuentas);
console.log(cliente.cantidadClientes);

