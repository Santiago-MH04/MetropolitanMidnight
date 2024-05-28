async function cargarDiscotecas() {
    try {
        const response = await fetch('http://localhost:3000/clubs');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const clubs = await response.json();

        const selectDiscotecas = document.getElementById('discoteca-destino');
        if (!selectDiscotecas) {
            throw new Error('Select element not found');
        }

        clubs.forEach(clubs => {
            const option = document.createElement('option');
            option.value = clubs.name;
            option.textContent = clubs.name;
            clubs.appendChild(option);
        });
    } catch (error) {
        console.error('Error fetching and parsing data', error);
    }
}
document.addEventListener('DOMContentLoaded', cargarDiscotecas);

// Función para cargar las discotecas desde el servidor JSON y llenar el select en el formulario
async function cargarDiscotecas() {
    // Hacer una solicitud fetch para obtener la lista de discotecas desde el servidor
    const response = await fetch('http://localhost:3000/clubs');
    const discotecas = await response.json(); // Parsear la respuesta JSON

    const selectDiscotecas = document.getElementById('discoteca-destino'); // Obtener el elemento select

    // Iterar sobre las discotecas y agregar cada una como una opción en el select
    discotecas.forEach(discoteca => {
        const option = document.createElement('option');
        option.value = discoteca.name;
        option.textContent = discoteca.name;
        selectDiscotecas.appendChild(option);
    });
}

// Agregar un listener para el evento DOMContentLoaded
// Esto asegura que la función cargarDiscotecas se ejecute solo después de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', cargarDiscotecas);