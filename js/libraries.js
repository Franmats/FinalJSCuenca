const buy = document.getElementById("buy");


buy.addEventListener("click", () => {
    var cartBolean = document.getElementById("itemsContainer");
    if (cartBolean.firstChild) {
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


