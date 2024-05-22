import '../scss/stylesTrasporte.scss';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

const urlJsonServer = "http://localhost:3000/categories"
const containersCard = document.getElementById("containers-card")
let id

drivers()

async function drivers() {
    const callOnTheData = await fetch(`${urlJsonServer}`)
    const data = await callOnTheData.json()

    containersCard.innerHTML = ""
    data.forEach(element => {
        containersCard.innerHTML += `<div class="col">
        <div class="card">
            <span class="box-number">
                .${element.id}
            </span>
            <h2 class="card-title">${element.name} <strong>${element.id}</strong></h2>
            <hr class="hr-purple">
            <img src="${element.img}" class="card-img-top" alt="...">
            <div class="stard">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-star-fill" viewBox="0 0 16 16" style="color: aliceblue;">
                    <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
            </div>
            <div class="card-body">
                <p class="card-text">${element.name}, conductor privado de élite, garantiza un servicio de excelencia con
                    habilidades de manejo expertas y atención al cliente insuperable</p>
                <a href="#" class="btn btn-solicitar">SOLICITAR</a>
            </div>
        </div>
    </div>
    `
    })  
}
