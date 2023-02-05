//--------Desestruturacion de Objetos-----------------------------------------

interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalle: Detalles;
}

interface Detalles {
  autor: string;
  anio: number;
}

const reproductor: Reproductor = {
  volumen: 90,
  segundo: 36,
  cancion: 'Ayer te vi',
  detalle: {
    autor: 'Wilson',
    anio: 2022,
  },
};

//Aplicando la desestructuración
const { volumen, segundo, cancion, detalle } = reproductor;

//Ahora destructuramos el objeto autor
const { autor } = detalle;

console.log('El volumen actual es: ', volumen);
console.log('El segundo actual es: ', segundo);
console.log('La cancion actual es: ', cancion);
console.log('El Autor actual es: ', autor);

// Sin aplicar la desestructuracion
console.log('El volumen actual es: ', reproductor.volumen);
console.log('El Autor actual es: ', reproductor.detalle.autor);

//---Desestructuracion de arreglos---------------------------------------------
/**
 * Para destructurar arreglos el nombre no importa sino la posicion en el arreglo
 * en este caso tambien podemos solo dejar el espacio que ocupa el arreglo divido por comas
 */
const nombres: string[] = ['Wilson', 'Pedro', 'Jose'];
const [n1, n2, n3] = nombres;

console.log('Nombre 1: ', n1);
console.log('Nombre 2: ', n2);
console.log('Nombre 3: ', n3);
