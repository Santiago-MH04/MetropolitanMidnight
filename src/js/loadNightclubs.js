// Función para cargar las discotecas desde el servidor JSON y llenar el select en el formulario
async function cargarDiscotecas() {
    // Hacer una solicitud fetch para obtener la lista de discotecas desde el servidor
    const response = await fetch('http://localhost:3000/discotecas');
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
// Esto asegura que la función cargarDiscotecas se ejecute solo después de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', cargarDiscotecas);