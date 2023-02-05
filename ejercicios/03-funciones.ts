// funciones
// Primero van los datos que son obligatorios en una funcion y despues los no obligatorios de lo contrario se le debe agregar su valor inicial 
function multiplicar(
  numero: number,
  otroNumero?: number,
  base: number = 2
): number {
  return numero * base;
}

interface PersonajeLOR {
  nombre: string;
  pv: number;
  mostrarHp: () => void;
  
}

function curar(personaje: PersonajeLOR, curarX: number): void {
  personaje.pv += curarX;
  console.log(personaje);
}
const nuevoPersonaje: PersonajeLOR = {
  nombre: 'Strider',
  pv: 50,
  mostrarHp(){
    console.log("Puntos de vida:", this.pv);
  }
};

curar(nuevoPersonaje, 20);
