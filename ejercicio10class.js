class Persona {
    #nombre;
    #edad;
       constructor(nombre,edad) {
       this.#nombre=nombre
       this.#edad=edad
  }

getnombre() {
  return this.#nombre
}
setnombre(nombre) {
  this.#nombre=nombre
}
}

var Persona1 =new Persona("Lucia",40)
console.log(Persona1.getnombre());
Persona1.setnombre("Maria")
console.log(Persona1.getnombre());
