//Creamos nuevo archivo para modularizar el codigo.
export class cliente{
    nombreCliente;
    dniCliente;
    static cantidadClientes = 0;

    constructor (nombreCliente, dniCliente){
        this.nombreCliente = nombreCliente;
        this.dniCliente = dniCliente;
        cliente.cantidadClientes++;
    }
}