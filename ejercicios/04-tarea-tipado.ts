// En esta interfaz tipamos todos los datos de la constante superHeroe

// interface SuperHeroe {
//   nombre: string,
//   edad: number,
//   direccion: {calle:string, pais:string, ciudad:string},
//   mostrarDireccion: () => string
// }

/*Esta seria la mejor manera de crear la interfaz para tipar los datos mandando a llamar los datos de direccion en una interfaz aparte por ser de tipo objeto*/
interface SuperHeroe {
  nombre: string;
  edad: number;
  direccion: Direccion; //direccion es de tipo Direccion
  mostrarDireccion: () => string;
}

interface Direccion {
  calle: string;
  pais: string;
  ciudad: string;
}

const superHeroe: SuperHeroe = {
  nombre: 'Spiderman',
  edad: 30,
  direccion: { calle: 'Principal', pais: 'USA', ciudad: 'GT' },
  //Metodo para mostrar
  mostrarDireccion() {
    return (
      this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais
    );
  },
};

//Constante para mandar a llamar el metodo mostrarDireccion
const direccion = superHeroe.mostrarDireccion();
console.log(direccion); //Imprimiendo datos en consola

//Tambien podemos llamar los datos sin necesidad de crear un metodo
console.log(superHeroe.direccion.calle);
