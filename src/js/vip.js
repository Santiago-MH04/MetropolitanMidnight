// -------------------------------ACA COMIENZA LA LOGICA DE VIP---------------------------

const planes = document.querySelector("main")

for (let i = 0; i < planes.length; i++) {
   main.innerHTML+=`
   <article id="vip-card">
            <div class="background"></div>

            <div class="grid">
                <div>
                    <article class="card-vip">
                        <div class="container-card">
                            <div class="card-header">
                                <h2>${planes[i].nombre}</h2>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">${planes[i].costo}/mes</h5>
                                <ul>
                                    <li class="card-text">${planes[i].descripcion[0]}
                                        </li>
                                    <li class="card-text">${planes[i].descripcion[1]}</li>
                                    <li class="card-text">${planes[i].descripcion[2]}</li>
                                <p class="card-text"></p>
                                <a href="" class="btn btn-primary">Obtener</a>
                            </div>
                        </div>
                    </article>

                </div>

                <div>
                    <article class="card-vip">
                        <div class="container-card">
                            <div class="card-header">
                                <h2>Plan Premium</h2>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">$19.99/mes</h5>
                                <ul>
                                    <li class="card-text">Entrada prioritaria: Evita las filas y entra más rápido a la discoteca.</li>
                                    <li class="card-text">Descuentos ampliados: 20% de descuento en bebidas y 10% en la entrada a la discoteca.</li><br>
                                    <li class="card-text">Reservas prioritarias:reserva mesas y areas VIP</li>
                                </ul>
                                <p class="card-text"></p>
                                <a href="" class="btn btn-primary">Obtener</a>
                            </div>
                        </div>
                    </article>

                </div>
   
   `  
}