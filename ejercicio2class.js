class Libro{
    constructor(titulo, genero){
        this.titulo=titulo
        this.genero=genero
    }
    mostrarInfo(){
        console.log("titulo: "+this.titulo);
        console.log("genero: "+this.genero);
    }
}

class Bibloteca{
    constructor(){
        this.Libros=[]
    }
    mostrarLibros(){
        for (let i = 0; i < this.mostrarLibros.length; i++) {
            console.log(this.Libros[i].titulo);
        }
    }
    aggLibro(Libro){
        this.Libros.push(Libro)
    }
    mostrarLibro(indice){
        console.log("Libro #"+indice);
        this.Libros[indice-1].mostrarInfo()
    }
}

var libro1 = new Libro("Pinocho","infantil")
var libro2 = new Libro("La rata con tiner","terror/filosofia")
var libro3 = new Libro("El canadience idiota","comedia")

var bibloteca1 = new Bibloteca()
bibloteca1.aggLibro(libro1)
bibloteca1.aggLibro(libro2)
bibloteca1.aggLibro(libro3)

bibloteca1.mostrarLibros()
bibloteca1.mostrarLibro(3)

