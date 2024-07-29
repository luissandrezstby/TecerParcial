class Libro {
    constructor(titulo, genero) {
        this.titulo = titulo;
        this.genero = genero;
    }

    mostrarInfo() {
        let info = "Título: " + this.titulo + "\nGénero: " + this.genero;
        console.log(info);
    }
}

class Biblioteca {
    constructor() {
        this.libros = []; 
    }

    leer() {
        console.log("Leer");
    }

    descubrir() {
        console.log("Descubrir");
    }

    imaginar() {
        console.log("Imaginar");
    }

    mostrarLibros() {
        let info = "Libros en la biblioteca:\n";
        for (let i = 0; i < this.libros.length; i++) {
            info += (i + 1) + ". " + this.libros[i].titulo + "\n";
        }
        console.log(info);
    }

    agregarLibro(libro) {
        this.libros.push(libro);
    }

    mostrarLibro(indice) {
        if (indice > 0 && indice <= this.libros.length) {
            console.log("Libro #" + indice);
            this.libros[indice - 1].mostrarInfo();
        } else {
            console.log("Este libro no existe");
        }
    }
}

var libro1 = new Libro("Don Quijote de la Mancha", "Novela/Parodia/Farsa");
var libro2 = new Libro("Alicia en el País de las Maravillas", "Literatura Fantástica");
var libro3 = new Libro("El Hobbit", "Novela/Infantil/Fantasía");
var libro4 = new Libro("Matilda", "Infantil/Acción/Fantasía");
var libro5 = new Libro("El Mago de Oz", "Infantil/Literatura Fantástica");

var biblioteca1 = new Biblioteca();
biblioteca1.agregarLibro(libro1);
biblioteca1.agregarLibro(libro2);
biblioteca1.agregarLibro(libro3);
biblioteca1.agregarLibro(libro4);
biblioteca1.agregarLibro(libro5);

biblioteca1.mostrarLibros();

var indice = prompt("Ingrese un número para mostrar un libro:");
biblioteca1.mostrarLibro(parseInt(indice));