let amigos = [];
let obtenerNombre = document.getElementById('amigo');


function agregarAmigo() {
    let nombre = obtenerNombre.value.trim();

    if(nombre !== '') {
        if(!amigos.includes(nombre)){
            amigos.push(nombre);
            console.log(amigos);
            actualizarLista();
            limpiar();
        } else {
            alert('El nombre ya existe');
        }
    }else{
        alert('Por favor, inserte un nombre');
    }
}

//Función para limpiar caja
function limpiar(){
    document.querySelector('#amigo').value = '';
}

function actualizarLista(){
    let listaNombres = document.querySelector('#listaAmigos');
    listaNombres.innerHTML = '';

    for(let i = 0; i < amigos.length; i++){
        let nombre = amigos[i];
        listaNombres.innerHTML += `<li>${nombre}</li>`;
    }
}

function sortearAmigo() {
    if (amigos.length > 0) {
        // Generar un índice aleatorio basado en la longitud del array de amigos
        const numeroAleatorio = Math.floor(Math.random() * amigos.length);
        const nombreSorteado = amigos[numeroAleatorio];

        // Mostrar el nombre sorteado en algún lugar de la página
        document.getElementById('resultado').textContent = `Nombre sorteado: ${nombreSorteado}`;
    } else {
        alert('No hay nombres en la lista para sortear.');
    }
}