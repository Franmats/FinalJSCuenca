
// LÓGICA QUE INSERTA LOS PRODUCTOS EN LA PÁGINA
const printProducts = (data) => {// función q recibe x parametro los objetos del array products
    const container = document.getElementById("mainOffers");

    data.forEach(product => {// con el método forEach recorro cada uno de los elementos o productos q contiene el array products, product es una var q itera cada uno de los elementos en al array
        const div = document.createElement("div");
        div.classList.add("longCard");
        div.innerHTML += `  <img src=${product.imagen} alt="">
        <div class="descrip">
            <a href="" target="_blank"><div>${product.nombre}</div></a>
            <span><b>$${product.precio}</b></span>
            <button id=${product.id} class="add" >AÑADIR AL CARRITO</button>
        </div> `
        container.appendChild(div);
    });
}

printProducts(products);

// LÓGICA DEL FILTRADO
var modes = document.getElementById("itemsFilter"); // varible q contienen el div q contienen las opciones de filtrado, menor y mayor
var mode_btn = document.getElementById("filter"); // variable q tiene el id del botón q despliega las opciones de filtrado

function showFilter() {// Función q permite desplegar las opciones de filtrado mediante el metodo toogle, este cambia las clases del contenedor de las opciones de filtrado para hacer el despliege
    modes.classList.toggle("active");
    modes.classList.toggle("sasFilter");  
}
mode_btn.addEventListener("click", showFilter); //cuando haga click en el botón se va a ejecutar la función showFilter q muestra las opciones


const ordenarMenorMayor = () => { // esta función elimina los productos q se muestran en pantalla para mostrar nuevos productos ordenados según el filtro de precio 
    var container = document.getElementById("mainOffers"); // primero obtengo el contenedor
    function removeAllChildNodes(parent) { // esta 2da función toma como parámetro el elemento padre de los hijos(productos) que queremos eliminar
        while (parent.firstChild) { // iniciamos un bucle while q mientras haya un hijo en el elemento padre se va a ejecutar una función, es decir, cuando no haya más hijos o elementos para eliminar el bucle se detiene
            parent.removeChild(parent.firstChild); // con el método removeChild() de JS q modifica el DOM, eliminamos los hijos del contenedor utilizando como parámetro el primer hijo del contenedor "mainOffers" y asi en cada ciclo del bucle remueve el primer hijo del contenedor hasta que no queden más
        }
    }
    removeAllChildNodes(container);
    printProducts(products.sort ((a,b) => a.precio - b.precio));// con la función printProducts pintamos devuelta en el DOM pero primero ordenamos el array products según el precio con el metodo sort() para que después el la función printProducts() tome el array ordenado como parámetro y pinte en el HTML los nuevos productos
};

const ordenarMayorMenor = () => {
    var container = document.getElementById("mainOffers");
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    removeAllChildNodes(container);
    printProducts(products.sort ((a,b) => b.precio - a.precio  )); // la misma lógica de arriba nada mas q cambia el orden de b.precio y a.precio para q ordene de mayor a menor
};

modes.addEventListener("click", (e)=> { //recordar q modes es la var del contenedor de las opciones menor y mayor precio,  una función flecha que se ejecuta cuando el user haga click en el elemento q contiene la opción menor precio o mayor precio
    if (e.target.classList.contains("menor")){  //deacuerdo con el e.target evaluamos que elemento seleciona el usuario
        ordenarMenorMayor();// si el elemento donde el user contiene la clase menor se ejecuta la función correspondiente
    }
    if (e.target.classList.contains("mayor")){
        ordenarMayorMenor();
    }
})

//LOGICA DE FILTRADO









