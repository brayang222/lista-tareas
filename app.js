const input = document.getElementById('ingresar-tarea');
const btn = document.querySelector('.aggTarea');
const listTarea = document.getElementById('lista-tareas');
const nTarea = document.getElementById('n-tareas');
let number = 0; 

function agragarTarea() {
  
  if(input.value) {
    
    //Crear Tarea
    let tareaNueva = document.createElement('div');
    tareaNueva.classList.add('tarea');
    //Texto ingresado
    let texto = document.createElement('p');
    texto.innerText = input.value;
    tareaNueva.appendChild(texto)

    //Crear y agregar íconos
    let iconos = document.createElement('div')
    iconos.classList.add('iconos');
    tareaNueva.appendChild(iconos)

    //Íconos
    let completar = document.createElement('i');
    completar.classList.add('fa-solid', 'fa-circle-check', 'icono-completar')
    completar.addEventListener('click', completarTarea)

    let eliminar = document.createElement('i');
    eliminar.classList.add('fa-regular', 'fa-trash-can', 'icono-eliminar')
    eliminar.addEventListener('click', eliminarTarea)
    
    let editar = document.createElement('i');
    editar.classList.add('fa-regular', 'fa-pen-to-square', 'icono-eliminar')
    editar.addEventListener('click', editarTarea)
    
    iconos.append(completar, eliminar, editar)

    //Agregar
    listTarea.appendChild(tareaNueva)
    
  } else {
    alert('Ingresa una tarea')
    number--;
  }

  number++;
  nTarea.innerHTML = number;
  input.value = "";
}

function completarTarea(e) {
  let tarea = e.target.parentNode.parentNode;
  tarea.classList.toggle('completada')
}

function eliminarTarea(e) {
  let eliminarT = e.target.parentNode.parentNode;
  eliminarT.remove();
  number--;
  nTarea.innerHTML = number;
}

function editarTarea(e) {
  let tarea = e.target.parentNode.parentNode;
  let parrafo = tarea.getElementsByTagName('p')
  let primerParrafo = parrafo[0];
  let nuevoContenido = prompt("Ingrese el nuevo contenido:");
  if (nuevoContenido === null || nuevoContenido.length === 0) {
    alert("Has dejado el campo vacío");
  } else { 
    primerParrafo.innerHTML = nuevoContenido;
  }
  
}

const btnHechas = document.getElementById('hechas');
const btnPendientes = document.getElementById('pendientes');
const btnTodas = document.getElementById('todas');
const elementos = Array.from(listTarea.querySelectorAll('.completada'));
const tareas = document.getElementsByClassName('tarea')
let completada;


btnHechas.addEventListener('click', () => {
  for (let i = 0; i < tareas.length; i++) {
    const tarea = tareas[i];
  if (tarea.classList.contains('completada')) {
    tarea.classList.remove('hidden')
  }
  if (!tarea.classList.contains('completada')) {
    tarea.classList.add('hidden')
  } else {
     completada = true;
  } 

}
if (!completada) {
  alert('No se encontraron tareas completadas.')
}

})
btnPendientes.addEventListener('click', () => {
  for (let i = 0; i < tareas.length; i++) {
    const tarea = tareas[i];
  if (!tarea.classList.contains('completada')) {
    tarea.classList.remove('hidden')
  }
  if (tarea.classList.contains('completada')) {
    tarea.classList.add('hidden')
  } else {
     completada = true;
  } 
  
}
if (!completada) {
  alert('No se encontraron tareas pendientes.')
}
})

btnTodas.addEventListener('click', () => {
  for (let i = 0; i < tareas.length; i++) {
    const tarea = tareas[i];
    tarea.classList.remove('hidden')
  }
})





btn.addEventListener('click', agragarTarea);
input.addEventListener('keydown', (e) => {
  if(e.key === 'Enter') {
    return agragarTarea();
  }
})
//editar tarea
//número de tareas
//tareas pendientes
