//Creamos nuevo archivo para modularizar el codigo.
//Aqui aprenderemos sobre exportar la class al index. Anteponiendo delante de la class el comando "export".

//⬇️//
import { cliente } from "./cliente.js";

export class cuentaCorriente{
    #cliente;
    #saldo;
    numeroCuenta;
    rutCuenta;
    static cantidadCuentas = 0;

    set cliente(valor){
        if (valor instanceof cliente) {
            this.#cliente = valor;
        }
    }

    get cliente(){
        return this.#cliente;
    }

    constructor(cliente, numeroCuenta, rutCuenta){
        this.#cliente = cliente;
        this.#saldo = 0;
        this.numeroCuenta = numeroCuenta;
        this.rutCuenta = rutCuenta;
        cuentaCorriente.cantidadCuentas++;
    }

    depositoCuenta(valor){
        if (valor > 0){
            this.#saldo += valor;
            return this.#saldo;
        }
    }

    retiroCuenta(valor){
        if (valor <= this.#saldo){
            this.#saldo -= valor;
            return this.#saldo;
        }
    }

    verSaldo(){
        return this.#saldo;
    }

    transferirParaCuenta(valor,cuentaDestino) {
        this.retiroCuenta(valor);
        cuentaDestino.depositoCuenta(valor);
        valor = 200;
        valor = valor*1000;
    }
}