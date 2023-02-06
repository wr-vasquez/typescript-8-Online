/**
 * El tipado genérico en TypeScript permite crear funciones, clases y tipos que pueden trabajar con varios 
 * tipos de datos en lugar de uno específico. Con los tipos genéricos, puedes escribir código más flexible y
 *  reutilizable sin tener que especificar los tipos de datos hasta que se usen en tiempo de ejecución.

 * Por ejemplo, puedes escribir una función genérica para devolver el elemento máximo de un array, que funcione * con cualquier tipo de dato que tenga un orden:
 */
function queTipoSoy<T>(argumento: T) {
  return argumento;
}

let soyString = queTipoSoy('Hola Mundo'); //---string
let soyNumero = queTipoSoy(100); //--number
let soyArreglo = queTipoSoy([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); //--array

//Tambien se le puede definir el tipado de esta manera
let soyExplicito = queTipoSoy<number>(100);

console.log(soyNumero);
console.log(soyArreglo);
