// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de
// programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let obtenerNombre = document.getElementById('amigo');
    let nombre = obtenerNombre.value.trim();

    if(nombre != ''){
        amigos.push(nombre);
        limpiar();
}

function limpiar(){
    document.querySelector('#amigo').value = '';
}