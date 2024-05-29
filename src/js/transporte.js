import '../scss/stylesTransporte.scss';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Función principal para obtener y mostrar los datos
const urlJsonServer = "http://localhost:3000/categories";
const containersCard = document.getElementById("containers-card");
const formReserva = document.getElementById('reservation-form');
const trabaja = document.getElementById('trabaja-form');
let id;



// Función principal para obtener y mostrar los datos
async function drivers() {
    const callOnTheData = await fetch(`${urlJsonServer}`);
    const data = await callOnTheData.json();

    // Pintar el HTML con los valores del json-server
    containersCard.innerHTML = "";
    data.forEach(element => {
        containersCard.innerHTML += `
        <article class="col">
            <div class="card h-100">
                <span class="box-number">.${element.id}</span>
                <h2 class="card-title">${element.name} <strong>${element.id}</strong></h2>
                <hr class="hr-purple">
                <img src="${element.img}" class="card-img-top" alt="...">
                <li class="list-group-item">
                    <div class="star-rating">
                        <span class="star" data-value="5">&#9733;</span>
                        <span class="star" data-value="4">&#9733;</span>
                        <span class="star" data-value="3">&#9733;</span>
                        <span class="star" data-value="2">&#9733;</span>
                        <span class="star" data-value="1">&#9733;</span>
                    </div>
                </li>
                <div class="card-body">
                        <p class="card-text" data-i18n="tr-text24"> conductor privado de élite, garantiza un servicio de excelencia con
                        habilidades de manejo expertas y atención al cliente insuperable</p>
                    <a class="btn btn-solicitar" data-bs-toggle="modal" data-bs-target="#reservationModal" data-i18n="tr-text25">SOLICITAR</a>
                </div>
            </div>
        </article>`;
        const stars = containersCard.querySelectorAll('.star');
        stars.forEach(star => {
            star.addEventListener('click', () => {
                stars.forEach(s => s.classList.remove('selected'));
                star.classList.add('selected');
            });
        });
    });
}

// Cargar datos al inicio
drivers();

// Manejar el envío del formulario reserva
formReserva.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const response = await fetch('http://localhost:3000/reservations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (response.ok) {
        alert('Reserva enviada con éxito');
        document.querySelector('#reservationModal .btn-close').click();
        event.target.reset();
    } else {
        alert('Error al enviar la reserva');
    }
});

// Escuchar el cambio en el campo de entrada de archivos
document.getElementById('imageUpload').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const filePath = URL.createObjectURL(file); // Obtener la ruta local del archivo
        document.getElementById('filePath').value = filePath; // Almacenar la ruta en el campo oculto
    }
});

// Manejar el envío del formulario de trabajo con nosotros
document.getElementById('trabaja-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const response = await fetch('http://localhost:3000/trabaja', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (response.ok) {
        alert('Solicitud enviada con éxito');
        document.querySelector('#trabajaModal .btn-close').click();
        event.target.reset();
    } else {
        alert('Error al enviar la solicitud');
    }
});
