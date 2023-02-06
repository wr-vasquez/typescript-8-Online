//Desestructuracion de argumentos
interface Producto {
  desc: string;
  precio: number;
}

const telefono: Producto = {
  desc: 'Nokia',
  precio: 150,
};

const tableta: Producto = {
  desc: 'iPad Air',
  precio: 350,
};

function calcularISV(productos: Producto[]): [number, number] {
  let total = 0;
  //--Desestructuracion------- se hace dendtro de llaves
  productos.forEach(({ precio }) => {
    total += precio; //sumar cada precio encontrado en el siclo
  });
  return [total, total * 0.15];
}

const articulos = [telefono, tableta];

//Desestructurando el arreglo para crear dos variables-------
const [total, isv] = calcularISV(articulos);

console.log('TOTAL: ', total);
console.log('ISV: ', isv);
