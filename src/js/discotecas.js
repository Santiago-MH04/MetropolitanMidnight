//codigo para el slider

const $next = document.querySelector(".next");
const $prev = document.querySelector(".prev");

$next.addEventListener("click", () => {
    const items = document.querySelectorAll(".item");
    document.querySelector(".slide").appendChild(items[0]);
});

$prev.addEventListener("click", () => {
    const items = document.querySelectorAll(".item");
    document.querySelector(".slide").prepend(items[items.length - 1]);
});



//imprimir en el html la info de las discotecas de la base de datos

document.addEventListener("DOMContentLoaded", function () {
    const menuDiscotecas = document.getElementById('menu_discotecas');
    const container = document.querySelector('.discotecas');


    fetch('../../public/data/discotecasDB.json')
        .then(response => response.json())
        .then(data => renderDiscotecas(data))
        .catch(error => console.error('Error al cargar el archivo JSON:', error));

    function renderDiscotecas(discotecas) {

        container.innerHTML = '';
        const zonaSeleccionada = menuDiscotecas.value;
        if (zonaSeleccionada === 'Selecciona tu zona') {
            discotecas.forEach(disco => {
                renderizarDisco(disco)

                const cardsLinks = document.querySelectorAll(".card-link")

                cardsLinks.forEach(linkDisco => {
                    linkDisco.addEventListener("click", (e) => {
                        const id_discoteca = e.target.getAttribute("id_discoteca")
                        localStorage.setItem("id_discoteca", JSON.stringify(id_discoteca))
                        window.location = "discoteca.html"
                    })

                } );
            })
        } else {

            const discotecasFiltradas = filtrarDiscotecasPorZona(discotecas, zonaSeleccionada);

            discotecasFiltradas.forEach(disco => renderizarDisco(disco));
        }
    }

    function renderizarDisco(disco) {
        const discoElement = document.createElement('div');
        discoElement.classList.add('disco');
        discoElement.innerHTML = `
        <div class="card" style="width: 18rem;" >
        <img src="${disco.logo}" class="card-img-top" alt="logo de ${disco.name}">
        <div class="card-body">
            <h5 class="card-title">${disco.name}</h5>
            <p class="card-text">${disco.description}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <div class="star-rating">
                    <span class="star" data-value="5">&#9733;</span>
                    <span class="star" data-value="4">&#9733;</span>
                    <span class="star" data-value="3">&#9733;</span>
                    <span class="star" data-value="2">&#9733;</span>
                    <span class="star" data-value="1">&#9733;</span>
                </div>
            </li>
        </ul>
        <div class="card-body">
            <a href="#" class="card-link"  id_discoteca=${disco.id}>ver mas</a>
        </div>
        </div>
        `;
        container.appendChild(discoElement);
    }

    // Función para filtrar las discotecas por zona
    function filtrarDiscotecasPorZona(discotecas, zona) {
        return discotecas.filter(disco => disco.location.zone === zona);
    }


    menuDiscotecas.addEventListener('change', function () {

        fetch('../../public/data/discotecasDB.json')
            .then(response => response.json())
            .then(data => renderDiscotecas(data))
            .catch(error => console.error('Error al cargar el archivo JSON:', error));



    });   //estrellas

    const stars = document.querySelectorAll(".star");
    stars.forEach((star) => {
        star.addEventListener("click", () => {
            const value = star.getAttribute("data-value");
            stars.forEach((s) => {
                s.classList.remove("selected");
                if (s.getAttribute("data-value") <= value) {
                    s.classList.add("selected");
                }
            });
        });
    });
});

