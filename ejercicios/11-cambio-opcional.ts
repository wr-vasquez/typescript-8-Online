//Cambio opcional
interface Pasajero {
  nombre: string;
  hijos?: string[];
}

const Pasajero1: Pasajero = {
  nombre: 'Wilson',
};

const pasajero2: Pasajero = {
  nombre: 'Melissa',
  hijos: ['Natalia', 'Gabriel'],
};

function imprimeHijos(pasajero: Pasajero): void {
  const cuantosHijos = pasajero.hijos?.length || 0;

  console.log(cuantosHijos);
}

imprimeHijos(pasajero2);
