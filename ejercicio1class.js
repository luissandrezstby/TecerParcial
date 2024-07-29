class CuentaBancaria {
    #saldo;

    constructor() {
        this.#saldo = 0;
    }

    #verificarCantidad(cantidad) {
        return cantidad >= 0;
    }

    depositar(cantidad) {
        if (this.#verificarCantidad(cantidad)) {
            this.#saldo += cantidad;
        } 
    }

    retirar(cantidad) {
        if (this.#verificarCantidad(cantidad) && cantidad <= this.#saldo) {
            this.#saldo -= cantidad;
            return true;
        } else {
            return false;
        }
    }

    consultarSaldo() {
        return this.#saldo;
    }
}


const cuenta = new CuentaBancaria();
console.log("EL saldo es:",cuenta.consultarSaldo());

cuenta.depositar(500);
console.log("El saldo depositado es de:",cuenta.consultarSaldo());  

cuenta.retirar(100);
console.log("El saldo retirado es de:",cuenta.consultarSaldo());

cuenta.retirar(50);
console.log("Su nuevo saldo retirado es de:",cuenta.consultarSaldo());

cuenta.depositar - cuenta.retirar >= consultarSaldo();
console.log("Su saldo nuevo es de:",cuenta.consultarSaldo())






