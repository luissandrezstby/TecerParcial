let formulario = { 
    Producto: "Jugo", 
    Cantidad: 2,
    Precio: 50 
};

function validarFormulario() {
    let Producto = document.getElementById("Producto").value;
    let Cantidad = parseInt(document.getElementById("Cantidad").value); 
    let Precio = parseInt(document.getElementById("Precio").value); 
    let texto = document.getElementById("result");

    if (Producto === formulario.Producto && Cantidad === formulario.Cantidad && Precio === formulario.Precio) {
        let resultado = "Producto: Jugo, Cantidad: 2, Precio: 50"
        texto.innerHTML += resultado
        alert("La compra ha sido exitosa");
    } else {
        alert("ERROR AL COMPRAR");
    }
}