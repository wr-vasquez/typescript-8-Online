/**CODIGO DE TYPESCRIPT */

//Desestructuracion de argumentos
interface Producto {
  desc: string;
  precio: number;
}

const telefono: Producto = {
  desc: 'Nokia',
  precio: 1200,
};

const tableta: Producto = {
  desc: 'iPad Air',
  precio: 1300,
};

function calcularISV(productos: Producto[]): number {
  let total = 0;

  productos.forEach(({ precio }) => {
    total += precio;
  });
  return total * 0.15;
}

const articulos = [telefono, tableta];

const isv = calcularISV(articulos);

console.log('ISV: ', isv);
