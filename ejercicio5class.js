let sumar = document.getElementById("operation").addEventListener("click", () => {
  let n1 = document.getElementById("n1").value;
  let n2 = document.getElementById("n2").value;
  let resultado = parseInt(n1) + parseInt(n2);

  let texto = document.getElementById("h1");
  texto.innerHTML = "El resultado de la suma es: " + resultado;
});

let restar = document.getElementById("restar").addEventListener("click", () => {
  let n1 = document.getElementById("n1").value;
  let n2 = document.getElementById("n2").value;
  let resultado = parseInt(n1) - parseInt(n2);

  let texto = document.getElementById("h1");
  texto.innerHTML = "El resultado de la resta es: " + resultado;
});

let multiplicar = document.getElementById("multiplicar").addEventListener("click", () => {
  let n1 = document.getElementById("n1").value;
  let n2 = document.getElementById("n2").value;
  let resultado = parseInt(n1) * parseInt(n2);

  let texto = document.getElementById("h1");
  texto.innerHTML = "El resultado de la multiplicación es: " + resultado;
});

let dividir = document.getElementById("dividir").addEventListener("click", () => {
  let n1 = document.getElementById("n1").value;
  let n2 = document.getElementById("n2").value;
  let resultado = parseInt(n1) / parseInt(n2);

  let texto = document.getElementById("h1");
  texto.innerHTML = "El resultado de la división es: " + resultado;
});