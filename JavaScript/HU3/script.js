
// SELECCIÓN DE ELEMENTOS


// getElementById
const inputNota = document.getElementById("inputNota");

// querySelector
const btnAgregar = document.querySelector("#btnAgregar");

// getElementById
const listaNotas = document.getElementById("listaNotas");


// Verificación en consola
console.log(inputNota);
console.log(btnAgregar);
console.log(listaNotas);



// ARREGLO DE NOTAS


let notas = [];



// CARGAR NOTAS GUARDADAS


const notasGuardadas = localStorage.getItem("notas");

if(notasGuardadas){

  notas = JSON.parse(notasGuardadas);

  notas.forEach(nota => {
    crearNota(nota);
  });

  console.log("Notas cargadas:", notas.length);
}


// EVENTO PARA AGREGAR


btnAgregar.addEventListener("click", () => {

  const texto = inputNota.value.trim();

  // Validación
  if(texto === ""){
    alert("Por favor escribe una nota");
    return;
  }

  // Agregar al arreglo
  notas.push(texto);

  // Guardar en Local Storage
  guardarNotas();

  // Crear nota en pantalla
  crearNota(texto);

  console.log("Nota agregada:", texto);

  // Limpiar input
  inputNota.value = "";

  // Volver a enfocar
  inputNota.focus();

});


// FUNCIÓN PARA CREAR NOTAS


function crearNota(texto){

  // Crear elementos
  const li = document.createElement("li");

  const span = document.createElement("span");

  const btnEliminar = document.createElement("button");

  // Agregar contenido
  span.textContent = texto;

  btnEliminar.textContent = "Eliminar";

  btnEliminar.classList.add("btnEliminar");


  // Evento eliminar
  btnEliminar.addEventListener("click", () => {

    // Remover del DOM
    listaNotas.removeChild(li);

    // Eliminar del arreglo
    notas = notas.filter(nota => nota !== texto);

    // Actualizar Local Storage
    guardarNotas();

    console.log("Nota eliminada:", texto);

  });


  // Insertar elementos
  li.appendChild(span);

  li.appendChild(btnEliminar);

  listaNotas.appendChild(li);

}


// GUARDAR EN LOCAL STORAGE

function guardarNotas(){

  localStorage.setItem(
    "notas",
    JSON.stringify(notas)
  );

  console.log("Notas guardadas en Local Storage");

}