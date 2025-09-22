// Array para almacenar los nombres de amigos
let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
	// Capturar el valor del campo de entrada
	let nombreAmigo = document.getElementById('amigo').value;

	// Validar que el campo no esté vacío
	if (nombreAmigo === '') {
		alert('Por favor, inserte un nombre.');
		return;
	}

	// Agregar el nombre al array de amigos
	amigos.push(nombreAmigo);

	// Limpiar el campo de entrada
	document.getElementById('amigo').value = '';

	// Actualizar la lista visual
	mostrarAmigos();
}

// Función para mostrar la lista de amigos en el HTML
function mostrarAmigos() {
	// Obtener el elemento de la lista
	let lista = document.getElementById('listaAmigos');

	// Limpiar la lista existente
	lista.innerHTML = '';

	// Iterar sobre el array amigos
	for (let i = 0; i < amigos.length; i++) {
		// Crear un nuevo elemento de lista
		let elementoLista = document.createElement('li');

		// Asignar el nombre del amigo al elemento
		elementoLista.textContent = amigos[i];

		// Agregar el elemento a la lista
		lista.appendChild(elementoLista);
	}
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
	// Validar que haya amigos disponibles
	if (amigos.length === 0) {
		alert('No hay amigos en la lista para sortear.');
		return;
	}

	// Generar un índice aleatorio
	let indiceAleatorio = Math.floor(Math.random() * amigos.length);

	// Obtener el nombre sorteado
	let amigoSorteado = amigos[indiceAleatorio];

	// Mostrar el resultado
	let resultado = document.getElementById('resultado');
	resultado.innerHTML =
		'<li>¡El amigo secreto es: ' + amigoSorteado + '!</li>';
}
