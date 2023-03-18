
// LOGICA QUE INSERTA LOS PRODUCTOS EN LA PAGINA
const printProducts = (data) => {// funcion q recibe x parametro los objetos del array products
    const container = document.getElementById("mainOffers");

    data.forEach(product => {// con el metodo forEach recorro cada uno de los elementos o productos q contiene el array products, product es una var q itera cada uno de los elementos en al array
        const div = document.createElement("div");
        div.classList.add("longCard");
        div.innerHTML += `  <img src=${product.imagen} alt="">
        <div class="descrip">
            <a href="" target="_self"><div>${product.nombre}</div></a>
            <span><b>$${product.precio}</b></span>
            <button id="button" class="agregar">AÑADIR AL CARRITO</button>
        </div> `
        container.appendChild(div);
    });
}

printProducts(products);

// LOGICA DEL FILTRADO
var modes = document.getElementById("itemsFilter");
var mode_btn = document.getElementById("filter");

function showFilter() {
    modes.classList.toggle("active");
    modes.classList.toggle("sasFilter");  
}
mode_btn.addEventListener("click", showFilter);


const ordenarMenorMayor = () => {
    var container = document.getElementById("mainOffers");
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    removeAllChildNodes(container);
    printProducts(products.sort ((a,b) => a.precio - b.precio));
};

const ordenarMayorMenor = () => {
    var container = document.getElementById("mainOffers");
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    removeAllChildNodes(container);
    printProducts(products.sort ((a,b) => b.precio - a.precio  ));
};

modes.addEventListener("click", (e)=> {
    if (e.target.classList.contains("menor")){
        ordenarMenorMayor();
    }
    if (e.target.classList.contains("mayor")){
        ordenarMayorMenor();
    }
})




