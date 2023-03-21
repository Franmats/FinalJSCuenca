
//Promociones con Fetch, solo funciona con live server activado de otra forma no me funciono

const promoscionesContainer = document.getElementById("promosContainer") // contenedor de las promociones
fetch("../data/promos.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(itemsPromos => {
            const div = document.createElement("div");
            div.classList.add("itemPromo")
            div.innerHTML= `
            <a href="" target="_self">
                <div class="card">
                    <img src="${itemsPromos.imagen}" alt="">
                    <div>${itemsPromos.nombre}</div>
                    <span><b>$${itemsPromos.precio}</b></span>
                </div>
             </a>
            `
            promoscionesContainer.appendChild(div)
        });
    })