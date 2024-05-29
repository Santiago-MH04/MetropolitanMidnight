// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'


// -------------------------------ACA COMIENZA LA LOGICA DE VIP---------------------------

const main = document.querySelector("main")
const datos = await fetch(`http://localhost:3000/planes`)
const planes = await datos.json()

main.innerHTML = "";

planes.forEach(plan => {
   main.innerHTML += `
                
                   
                        <div class="container-card">
                            <div class="card-header">
                                <h2>${plan.nombre}</h2>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">$${plan.costo}/mes</h5>
                                <ul>
                                    <li class="card-text">${plan.descripcion[0]}</li>
                                    <li class="card-text">${plan.descripcion[1]}</li>
                                    <li class="card-text">${plan.descripcion[2]}</li>
                                <a href="https://www.paypal.com/co/home" class="btn btn-primary">Obtener</a>
                            </div>
                        </div>
                   
                  
                
   `;  
});



