let formulario = { 
    Usuario: "TOMIYASU", 
    Contraseña: "chachacha" };

function validarFormulario() {
   
let Usuario = document.getElementById("Usuario").value;
let Contraseña = document.getElementById("Contraseña").value;

  
  
    if (Usuario === formulario.Usuario && Contraseña === formulario.Contraseña) {
        alert("Inicio de sesión exitoso");
        window.location.href = "ejercicio6class.html"; 
    } else {
        alert("Nombre de usuario o contraseña incorrectos");
    }
}