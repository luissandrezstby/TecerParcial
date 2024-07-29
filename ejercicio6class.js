document.getElementById("calculate").addEventListener("click", () => {
  let operation = document.getElementById("operation").value;
  let n1 = parseInt(document.getElementById("n1").value);
  let n2 = parseInt(document.getElementById("n2").value);
  let resultado;
  let texto = document.getElementById("result");

  switch(operation) {
    case "sumar":
      resultado = n1 + n2;
      texto.innerHTML = "El resultado de la suma es: " + resultado;
      break;
    case "restar":
      resultado = n1 - n2;
      texto.innerHTML = "El resultado de la resta es: " + resultado;
      break;
    case "multiplicar":
      resultado = n1 * n2;
      texto.innerHTML = "El resultado de la multiplicación es: " + resultado;
      break;
    case "dividir":
      if (n2 !== 0) {
        resultado = n1 / n2;
        texto.innerHTML = "El resultado de la división es: " + resultado;
      } else {
        texto.innerHTML = "No se puede dividir entre cero.";
      }
      break;
    default:
      texto.innerHTML = "Selecciona una operación.";
  }
});