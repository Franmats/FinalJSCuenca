//LIBRERIA SWEET ALERT PARA COMPRA DE LOS PRODUCTOS
const buy = document.getElementById("buy");
buy.addEventListener("click", () => {
    var cartBolean = document.getElementById("itemsContainer");
    if (cartBolean.firstChild) { // condicion que si hay un hijo dentro del carrito procede a la compra sino no
        Swal.fire ({
            icon: "success",
            title: "Exito",
            text: "Tu compra ha sido realizada"
        })} else {
            Swal.fire ({
                icon: "error",
                title: "Carrito Vacio",
                text: "Tu compra NO ha sido realizada"
        })}
})


