/**
 * Un decorador es un tipo especial de declaración que se puede adjuntar a una declaración de clase , método
 *  descriptor de acceso , propiedad o parámetro . Los decoradores usan el formulario @expression, donde
 * expressiondeben evaluar una función que se llamará en tiempo de ejecución con información sobre la
 * declaración decorada.
 */

function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = 'new property';
    hello = 'override';
  };
}

@classDecorator
class MiSuperClase {
  public miPropiedad: string = 'ABC123';

  imprimir() {
    console.log('Hola a todos');
  }
}

console.log(MiSuperClase);

const miClase = new MiSuperClase();
console.log(miClase.miPropiedad);
