const openCart = document.getElementById("button-cart");
const cartElement = document.getElementById("cartSlider");

openCart.addEventListener("click", ()=> {
    cartElement.classList.toggle("open"); //con el toogle le ponemos una clase para q se abra el carrito
})


const offersContainer = document.getElementById("mainOffers");// obtengo el elemento html donde se encuentran los productos y el click del usuario en el carrito

let cart = []; //array q va a contener los productos seleccionados

offersContainer.addEventListener("click", (e)=>{ //escuchamos el click del evento  q temga un targen con la clase "add" y ejecutamos la validadcion de producto
    if (e.target.classList.contains("add")){
        validateProductInCart(e.target.id);
    }
})

const validateProductInCart = (productId) =>{ // recibimos como parametro el id proveniendo del click evento
    const isRepeated = cart.some(product => product.id == productId) //buscamos con el metodo some algún producto q este repetido y nos devuelva un valor boleano

    if (isRepeated) { // si el producto esta repetido
        const product = cart.find(product => product.id == productId) // el metodo find busca el producto repetido segun el id
        product.cantidad++ // modifica el valor de la cantidad y no pushea otro producto igual al carrito
        const cantidad = document.getElementById(`cantidad${product.id}`)
        cantidad.innerText = `${product.cantidad}`// modifica el DOM de acuerdo a los cambios
        refreshTotalCart(cart) //cambiamos el total del carrito

    } else{ // si el producto es nuevo 
        const product = products.find(product=> product.id == productId) // el metodo find busca el producto clickeado dentro de la base de datos o array y lo pone en la const product
        cart.push(product)// pushea el nuevo producto dentro de la array cart
        printProductsCart(product) // pinta el producto en el carrito
        refreshTotalCart(cart) // cambia el total del carrito
    } 
}


const printProductsCart = (product) => { // esta funcion pinta en el DOM los productos selecionados por el usuario
    const container1 = document.getElementById("itemsContainer"); // la constante container1 trae el elemento q va contener el carrito y los productos selecionados
    const div = document.createElement("div");// creamos el div
    div.classList.add("itemCart") 
    div.innerHTML = `<div>${product.nombre}
                        <span><b>$ ${product.precio}x<div id="cantidad${product.id}">${product.cantidad}</div></b></span>
                        </div>
                    <span class="material-symbols-outlined delete" >delete</span>   `
    container1.appendChild(div)// crea el hijo div dentro de el nodo container1 osea el producto selecionado
}

const printCart = (cart) => { // esta funcion sirve para actulizar el carrito en caso q el usuario decida sacar sacar productos
    const container1 = document.getElementById('itemsContainer')

    container1.innerHTML = ''

    cart.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("itemCart") 
        div.innerHTML = `<div>${product.nombre}
                            <span><b>$ ${product.precio}x<div id="cantidad${product.id}">${product.cantidad}</div></b></span>
                            </div>
                        <span class="material-symbols-outlined delete" >delete</span>   `
        container1.appendChild(div)
    });
};

const cartss = document.querySelector('.cartContainer') // la constante cartss trae el elemento q contiene todo el carrito para luego ejecutar el listener para escuche cuando el user precione la x
cartss.addEventListener('click', (e) => {
    e.stopPropagation() // para solo muestre el evento e.target
    if (e.target.classList.contains('delete')) { //si el target de lo q presinó el usuario contiene la clase boton eliniar se ejecuta la funcion eliminar producto
        eliminateProductCart(e.target.value)
    }
})

const eliminateProductCart =(productId) => { // esta funcion elimina el producto del carrito utilizando el metodo splice
    const index = cart.findIndex(product => product.id == productId)
    cart.splice(index, 1)
    printCart(cart); // luego actualiza el DOM
    refreshTotalCart(cart) // cambia el total 
}

const refreshTotalCart = (cart) => {
    const totalCant = cart.reduce((acc, prod) => acc + prod.cantidad, 0)
    const totalBuy = cart.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0)

    const contCart = document.getElementById('counter-cart')
    const totalPrice = document.getElementById('totalCart')

    contCart.innerText = totalCant
    totalPrice.innerText = `$ ${totalBuy}`
    saveCartStorage(cart)
}


const saveCartStorage = (cartss) => {
    localStorage.setItem('cart', JSON.stringify(cartss))
};

const obtainCartStorage = () => {
    const cartStorage = JSON.parse(localStorage.getItem('cart'))
    return cartStorage
};

if (localStorage.getItem('cart')) {
    cart = obtainCartStorage()
    printCart(cart)
    refreshTotalCart(cart)
}

