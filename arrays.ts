// IMPORTANTE:
// Ver la consola de JavaScript

// const nombre: string = 'Wilson';
// console.log(nombre);

const habilidades: string[] = ['Bash', 'Counter', 'Healing'];

//CREACTION OF INTERFACE
interface Personaje {
  nombre: string;
  hp: number;
  habilidades: string[];
  puebloNatal: string;
}

const personaje: Personaje = {
  nombre: 'Wilson',
  hp: 72,
  habilidades: ['Bash', 'Counter', 'Healing'],
  puebloNatal: 'Texas',
};

console.log(personaje);

console.log(personaje.nombre);