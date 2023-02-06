/**CODIGO DE TYPESCRIPT */
/**Clases Recordar que las clases si existen en javascript mientras que las interfaces no */

// class Heroe {
//   private alterEgo: string; //----Visibles solo dentro de esta clase
//   public edad: number; //----Visible dentro y fuera de la clase
//   static nombreReal: number; //----acceder a la propiedad sin crear una instancia de la clase
// }

class PersonaNormal {
  constructor(public nombre: string, public direccion: string) {}
}
//Expandir la clase para obtener datos de otra clase
class Heroe extends PersonaNormal {
  //El constructor es una funcion que se va llamar cuando creamos una instancia de mi clase
  //De lo contrario sino se instancia la clase no se ejecuta el constructor xq se ejecuta antes de ejecutar la instancia

  constructor(
    public alterEgo: string,
    public edad: number,
    public nombreReal: string
  ) {
    super(nombreReal, 'NEW YORK, USA');
  }
}

const ironman = new Heroe('Ironman', 45, 'Tony');

console.log(ironman);
