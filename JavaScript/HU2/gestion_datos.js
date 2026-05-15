
// Lista de productos
const productos = [
  {
    id: 1,
    nombre: "Teclado Gamer",
    precio: 120000
  },
  {
    id: 2,
    nombre: "Mouse Inalámbrico",
    precio: 85000
  },
  {
    id: 3,
    nombre: "Monitor 24 Pulgadas",
    precio: 650000
  }
];

console.log("--------- LISTA DE PRODUCTOS ---------");
console.log(productos);

// Función para validar productos
function validarProducto(producto) {

  // Verificar que exista id y que sea número
  if (typeof producto.id !== "number") {
    return false;
  }

  // Verificar nombre
  if (
    typeof producto.nombre !== "string" ||
    producto.nombre.trim() === ""
  ) {
    return false;
  }

  // Verificar precio
  if (
    typeof producto.precio !== "number" ||
    producto.precio <= 0
  ) {
    return false;
  }

  return true;
}

// Validación de todos los productos
console.log("\n--------- VALIDACIÓN DE PRODUCTOS ---------");

productos.forEach((producto) => {
  if (validarProducto(producto)) {
    console.log(`Producto válido: ${producto.nombre}`);
  } else {
    console.log(`Producto inválido: ${producto.nombre}`);
  }
});


// Set con números repetidos
const numeros = new Set([1, 2, 3, 4, 4, 5, 5, 6]);

console.log("\n--------- SET ORIGINAL ---------");
console.log(numeros);

// Agregar nuevo número
numeros.add(10);

console.log("\nSet después de agregar 10:");
console.log(numeros);

// Verificar si existe un número
console.log("\n¿Existe el número 3?");
console.log(numeros.has(3));

// Eliminar un número
numeros.delete(2);

console.log("\nSet después de eliminar el número 2:");
console.log(numeros);

// Recorrer el Set con for...of
console.log("\n--------- RECORRIDO DEL SET ---------");

for (const numero of numeros) {
  console.log(numero);
}

// Map de categorías y productos
const categorias = new Map();

categorias.set("Periféricos", "Teclado Gamer");
categorias.set("Accesorios", "Mouse Inalámbrico");
categorias.set("Pantallas", "Monitor 24 Pulgadas");

console.log("\n--------- MAP DE CATEGORÍAS ---------");
console.log(categorias);


// for...in para recorrer un objeto
console.log("\n--------- RECORRIDO DE OBJETO ---------");

for (const index in productos) {

  console.log(`\nProducto ${Number(index) + 1}`);

  // Object.entries para obtener clave y valor
  for (const [clave, valor] of Object.entries(productos[index])) {
    console.log(`${clave}: ${valor}`);
  }
}


// Object.keys()
console.log("\n--------- OBJECT.KEYS ---------");

productos.forEach((producto) => {
  console.log(Object.keys(producto));
});


// Object.values()
console.log("\n--------- OBJECT.VALUES ---------");

productos.forEach((producto) => {
  console.log(Object.values(producto));
});


// Object.entries()
console.log("\n--------- OBJECT.ENTRIES ---------");

productos.forEach((producto) => {
  console.log(Object.entries(producto));
});


// forEach() para recorrer el Map
console.log("\n--------- RECORRIDO DEL MAP ---------");

categorias.forEach((producto, categoria) => {
  console.log(`Categoría: ${categoria} -> Producto: ${producto}`);
});


console.log("\n--------- RESUMEN FINAL ---------");

console.log("\nProductos:");
console.log(productos);

console.log("\nProductos únicos del Set:");
console.log([...numeros]);

console.log("\nCategorías registradas:");
categorias.forEach((producto, categoria) => {
  console.log(`${categoria}: ${producto}`);
});