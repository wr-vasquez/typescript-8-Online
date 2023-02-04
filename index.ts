/**CODIGO DE TYPESCRIPT */

interface superHeroe {
  nombre: string,
  edad: string,
  direccion: string[] ,
  pais: string,
  ciudad: string
}

const superHeroe = {
  nombre: "Spiderman",
  edad: 30,
  direccion: {calle: "Principal",
  pais: "USA",
  ciudad: "GT"

},
mostrarDireccion() {
  return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
}

}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);
