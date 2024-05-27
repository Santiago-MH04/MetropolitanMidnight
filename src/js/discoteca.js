
document.addEventListener("DOMContentLoaded", ()=>{
   
   fetch('../../public/data/discotecasDB.json')
   .then(response => response.json())
   .then(data => mostrarDisco(data))
   .catch(error => console.error('Error al cargar el archivo JSON:', error));
})

function mostrarDisco(data){
    const idDisco = JSON.parse(localStorage.getItem("id_discoteca"))
    const discoteca = data.filter(discoteca  =>discoteca.id == idDisco)
    console.log(discoteca);

    const contenedor = document.querySelector(".container_main")
 contenedor.innerHTML=`
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
 <div class="services">
    <h1> ${discoteca[0].name}</h1>
     <div class="service_logo">
         <i class="fa-solid fa-book"></i>
     </div>
     <div class="service_title"> informacion</div>
     <div class="service_description">
         <p>${discoteca[0].description} </p>

         <p id="hours_title">Horarios</p>
         <p id="hours_description">${discoteca[0].hours}</p>

         <p id="price_title">precios</p>
         <p id="price_description">${discoteca[0].price.entry}<hr>${discoteca[0].price.drinks}</p>
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
</section>
<section class="reviews">
 <div class="review">
     <div class="review_img">
         <img src="../../public/img/discotecas/MIRANDA/miranda1.webp" alt="">
     </div>
     <div class="review_name">
         <p>Carlos</p>
     </div>
     <div class="review_description">
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, ipsam.</p>
     </div>
     <div class="review_stars">
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
     </div>
 </div>
 

</section>

`

}