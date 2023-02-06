//--------------Importaciones y exportaciones--------------
/**
 * Para este caso bamos a utilizar las interfaces del ejercicio 06 exportando la interfaz e importandolo en este archivo
 */

import { Producto, calcularISV } from './06-Desestructuracion-funsion';
//import {calcularISV} from './ejercicios/06-Desestructuracion-funsion';

const carritoCompras: Producto[] = [
  {
    desc: 'Telefono 1',
    precio: 100,
  },
  {
    desc: 'Telefono 2',
    precio: 150,
  },
];

const [total, isv] = calcularISV(carritoCompras);

console.log('Total: ', total);
console.log('ISV: ', isv);
