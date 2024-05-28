

// loadNightclubs.js
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