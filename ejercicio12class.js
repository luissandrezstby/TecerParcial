class Jugador {
    constructor(nombre, posicion) {
        this.nombre = nombre;
        this.posicion = posicion;
    }
}

class Portero extends Jugador {
    constructor(nombre) {
        super(nombre, "Portero");
    }
}

class Defensa extends Jugador {
    constructor(nombre) {
        super(nombre, "Defensa");
    }
}

class Mediocampista extends Jugador {
    constructor(nombre) {
        super(nombre, "Mediocampista");
    }
}

class Delantero extends Jugador {
    constructor(nombre) {
        super(nombre, "Delantero");
    }
}

class Equipo {
    constructor(nombre) {
        this.nombre = nombre;
        this.jugadores = [];
        this.goles = 0;
    }

    agregarJugador(jugador) {
        this.jugadores.push(jugador);
    }

    mostrarJugadores() {
        console.log("Jugadores de " + this.nombre + ":");
        for (let i = 0; i < this.jugadores.length; i++) {
            let jugador = this.jugadores[i];
            console.log(jugador.nombre + " - " + jugador.posicion);
        }
    }

    generarGol() {
        this.goles++;
    }

    mostrarGoles() {
        console.log("Goles de " + this.nombre + ": " + this.goles);
    }
}

function simularPartido(equipo1, equipo2) {
    let segundos = 0;
    let intervalo = setInterval(() => {
        console.clear();
        console.log("Tiempo: " + segundos + " segundos");

        if (Math.random() < 0.01) {
            equipo1.generarGol();
        }

        if (Math.random() < 0.01) {
            equipo2.generarGol();
        }

        console.log(equipo1.nombre + " " + equipo1.goles + " - " + equipo2.goles + " " + equipo2.nombre);
        segundos++;

        if (segundos > 90) { 
            clearInterval(intervalo);
            equipo1.mostrarGoles();
            equipo2.mostrarGoles();

            if (equipo1.goles > equipo2.goles) {
                console.log(equipo1.nombre + " gana el partido!");
            } else if (equipo2.goles > equipo1.goles) {
                console.log(equipo2.nombre + " gana el partido!");
            } else {
                console.log("El partido terminó en empate!");
            }
        }
    }, 1000);
}

let BayernMunich = new Equipo("Real Madrid");
let RealMadrid = new Equipo("Bayern Munich");

BayernMunich.agregarJugador("NEUER", "POR", "1", "BAYERN MUNCHEN");
BayernMunich.agregarJugador("KIMMICH", "LD", "6", "BAYERN MUNCHEN");
BayernMunich.agregarJugador("UPAMECANO", "DFC", "2", "BAYERN MUNCHEN");
BayernMunich.agregarJugador("DE LIGHT", "DFC", "4", "BAYERN MUNCHEN");
BayernMunich.agregarJugador("DAVIES", "LI", "19", "BAYERN MUNCHEN");
BayernMunich.agregarJugador("LAIMER", "MCD", "27", "BAYERN MUNCHEN");
BayernMunich.agregarJugador("GORESKA", "MCD", "8", "BAYERN MUNCHEN");
BayernMunich.agregarJugador("MUSIALA", "MCO", "42", "BAYERN MUNCHEN");
BayernMunich.agregarJugador("SANE", "ED", "10", "BAYERN MUNCHEN");
BayernMunich.agregarJugador("GNABRY", "EI", "7", "BAYERN MUNCHEN");
BayernMunich.agregarJugador("KANE", "DEL", "9", "BAYERN MUNCHEN");

RealMadrid.agregarJugador("COURTOIS", "POR", "1", "REAL MADRID");
RealMadrid.agregarJugador("CARBAJAL", "LD", "2", "REAL MADRID");
RealMadrid.agregarJugador("RUDIGUER", "DFC", "22", "REAL MADRID");
RealMadrid.agregarJugador("MILITAO", "DFC", "3", "REAL MADRID");
RealMadrid.agregarJugador("MENDY", "LI", "23", "REAL MADRID");
RealMadrid.agregarJugador("MODRIC", "MC", "10", "REAL MADRID")
RealMadrid.agregarJugador("VALVERDE", "MC", "8", "REAL MADRID");
RealMadrid.agregarJugador("BELLINGHAM", "MCO", "5", "REAL MADRID");
RealMadrid.agregarJugador("RODRYGO", "ED", "11", "REAL MADRID");
RealMadrid.agregarJugador("VINI JR", "EI", "7", "REAL MADRID");
RealMadrid.agregarJugador("MBAPPE", "DEL", "9", "REAL MADRID");

console.log("EQUIPO LOCAL",);
console.log("BAYERN MUNCHEN:",BayernMunich.jugadores);
console.log("EQUIPO LOCAL",);
console.log("EQUIPO visitante",RealMadrid.jugadores);


console.log("FORMACIONES: 4-2-3-1 DEL BAYERN Y 4-3-3 DEL MADRID",BayernMunich.jugadores, RealMadrid.jugadores);
console.log("EL PARTIDO ESTA POR INICIAR...")

setTimeout(() =>{
    simularPartido(BayernMunich, RealMadrid);
},20000);
