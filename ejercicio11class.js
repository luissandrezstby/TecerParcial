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
            this.#saldo -= cantidad; // Corregido para restar la cantidad del saldo
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
console.log("El saldo inicial es:", cuenta.consultarSaldo());

cuenta.depositar(500);
console.log("El saldo después del depósito es:", cuenta.consultarSaldo());  

cuenta.retirar(100);
console.log("El saldo después del retiro de 100 es:", cuenta.consultarSaldo());

cuenta.retirar(50);
console.log("El saldo después del retiro de 50 es:", cuenta.consultarSaldo());
