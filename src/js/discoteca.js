document.addEventListener("DOMContentLoaded", () => {
    fetch("../../public/data/discotecasDB.json")
        .then((response) => response.json())
        .then((data) => mostrarDisco(data))
        .catch((error) => console.error("Error al cargar el archivo JSON:", error));
});

function mostrarDisco(data) {
    const idDisco = JSON.parse(localStorage.getItem("id_discoteca"));
    const discoteca = data.filter((discoteca) => discoteca.id == idDisco);
    console.log(discoteca);

    const contenedor = document.querySelector(".container_main");
    contenedor.innerHTML = `
    <section class="slider">
        <div class="container_slider">
            <div class="slide">
                <div class="item"
                style="background-image: url(${discoteca[0].banner}) ;background-size: cover;">
                <div class="content">
                    <div class="name">${discoteca[0].logo}</div>
                </div>
            </div>
        </div>
    </section>

    <section class="info">
    <div class="info_title"><h2> ${discoteca[0].name}</h2></div>
    <div class="container_info">
        <div class="services">
                <div class="service_logo">
                    <i class="fa-solid fa-book"></i>
                </div>
                <div class="service_title"> informacion</div>
                    <div class="service_description">
                        <p>${discoteca[0].description} </p>

                        <p id="hours_title">Horarios</p>
                        <p id="hours_description">${discoteca[0].hours}</p>

                        <p id="price_title">precios</p>
                        <p id="price_description">entrada: ${discoteca[0].price.entry}<br>bebidas: ${discoteca[0].price.Drinks}</p>
                    </div>
                </div>

            <div class="ubication">
                <div class="ubication_logo">
                    <i class="fa-solid fa-location-dot"></i>
                </div>
                <div class="ubication_title">ubicacion</div>
                <div class="ubication_description">
                ${discoteca[0].location.map}
            </div>
        </div>
    
`;
}