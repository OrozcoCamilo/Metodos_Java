// Primer arreglo; Numeros
let numeros = [1, 2, 3, 4, 5];
console.log("Arreglo inicial - Números:", numeros);

// Aplicamos los metodos
numeros.push(6); // Añadimos un 8 al final
console.log("Después de push(8):", numeros);

numeros.pop(); // eliminamos el ultimo elemento
console.log("Después de pop():", numeros);

numeros.shift(); // Eliminamos el primer elemento
console.log("Después de shift():", numeros);

numeros.unshift(0); // Añadimos un 0 al principio
console.log("Después de unshift(0):", numeros);


// segundo arreglo: Cadenas de texto
let frutas = ['manzana', 'naranja', 'plátano'];
console.log("\nArreglo inicial - Frutas:", frutas);

// Aplicando métodos
frutas.push('kiwi'); // Añadimos 'kiwi' al final
console.log("Después de push('kiwi'):", frutas);

frutas.pop(); // Eliminamos el último elemento
console.log("Después de pop():", frutas);

frutas.shift(); // Eliminamos el primer elemento
console.log("Después de shift():", frutas);

frutas.unshift('fresa'); // Añadimos 'fresa' al principio
console.log("Después de unshift('fresa'):", frutas);


// tercer arreglo: Booleanos
let estados = [true, false, true];
console.log("\nArreglo inicial - Estados:", estados);

// Aplicando métodos
estados.push(false); // Añadimos un false al final
console.log("Después de push(false):", estados);

estados.pop(); // Eliminamos el último elemento
console.log("Después de pop():", estados);

estados.shift(); // Eliminamos el primer elemento
console.log("Después de shift():", estados);

estados.unshift(true); // Añadimos true al principio
console.log("Después de unshift(true):", estados);


// cuarto arreglo: Mixtos
let mixto = [1, 'hola', true, null];
console.log("\nArreglo inicial - Mixto:", mixto);

// Aplicando métodos
mixto.push('nuevo'); // Añadimos 'nuevo' al final
console.log("Después de push('nuevo'):", mixto);

mixto.pop(); // Eliminamos el último elemento
console.log("Después de pop():", mixto);

mixto.shift(); // Eliminamos el primer elemento
console.log("Después de shift():", mixto);

mixto.unshift(99); // Añadimos un '99' al principio
console.log("Después de unshift(99):", mixto);


// quinto arreglo: Objetos
let objetos = [{ nombre: 'Juan' }, { nombre: 'Ana' }];
console.log("\nArreglo inicial - Objetos:", objetos);

// Aplicando métodos
objetos.push({ nombre: 'Luis' }); // Añadimos un nuevo objeto al final
console.log("Después de push({ nombre: 'Luis' }):", objetos);

objetos.pop(); // Eliminamos el último objeto
console.log("Después de pop():", objetos);

objetos.shift(); // Eliminamos el primer objeto
console.log("Después de shift():", objetos);

objetos.unshift({ nombre: 'Marta' }); // Añadimos un nuevo objeto al principio
console.log("Después de unshift({ nombre: 'Marta' }):", objetos);
