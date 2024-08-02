class Jugador {
    constructor(nombre, posicion) {
        this.nombre = nombre;
        this.posicion = posicion;
    }
}

class Portero extends Jugador {
    constructor(nombre) {
        super(nombre, 'Portero');
    }
}

class Defensa extends Jugador {
    constructor(nombre) {
        super(nombre, 'Defensa');
    }
}

class Mediocampista extends Jugador {
    constructor(nombre) {
        super(nombre, 'Mediocampista');
    }
}

class Delantero extends Jugador {
    constructor(nombre) {
        super(nombre, 'Delantero');
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

        // Probabilidad de gol para cada equipo (por ejemplo, 1% por segundo)
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

// Crear equipos
let BayernMunich = new Equipo("Bayern Munich");
let RealMadrid = new Equipo("Real Madrid");

// Agregar jugadores a Bayern Munich
BayernMunich.agregarJugador(new Portero("NEUER"));
BayernMunich.agregarJugador(new Defensa("KIMMICH"));
BayernMunich.agregarJugador(new Defensa("UPAMECANO"));
BayernMunich.agregarJugador(new Defensa("DE LIGHT"));
BayernMunich.agregarJugador(new Defensa("DAVIES"));
BayernMunich.agregarJugador(new Mediocampista("LAIMER"));
BayernMunich.agregarJugador(new Mediocampista("GORESKA"));
BayernMunich.agregarJugador(new Mediocampista("MUSIALA"));
BayernMunich.agregarJugador(new Delantero("SANE"));
BayernMunich.agregarJugador(new Delantero("GNABRY"));
BayernMunich.agregarJugador(new Delantero("KANE"));

// Agregar jugadores a Real Madrid
RealMadrid.agregarJugador(new Portero("COURTOIS"));
RealMadrid.agregarJugador(new Defensa("CARBAJAL"));
RealMadrid.agregarJugador(new Defensa("RUDIGUER"));
RealMadrid.agregarJugador(new Defensa("MILITAO"));
RealMadrid.agregarJugador(new Defensa("MENDY"));
RealMadrid.agregarJugador(new Mediocampista("MODRIC"));
RealMadrid.agregarJugador(new Mediocampista("VALVERDE"));
RealMadrid.agregarJugador(new Mediocampista("BELLINGHAM"));
RealMadrid.agregarJugador(new Delantero("RODRYGO"));
RealMadrid.agregarJugador(new Delantero("VINI JR"));
RealMadrid.agregarJugador(new Delantero("MBAPPE"));

// Mostrar jugadores
console.log("BAYERN MUNCHEN:");
BayernMunich.mostrarJugadores();

console.log("REAL MADRID:");
RealMadrid.mostrarJugadores();

console.log("FORMACIONES: 4-2-3-1 DEL BAYERN Y 4-3-3 DEL MADRID");
console.log("EL PARTIDO ESTA POR INICIAR...");

setTimeout(() => {
    simularPartido(BayernMunich, RealMadrid);
}, 20000);