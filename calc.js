function setIgual() {
  var resultado = document.getElementById("display").value;
  if (resultado == "") {
    resultado = 0;
  }

  try {
    resultado = eval(resultado);
    document.getElementById("display").value = resultado;
  } catch (error) {
    display.value = "";
  }
}

function setNumero(x) {
  var display = document.getElementById("display");
  var valorAtual = display.value;
  var operadores = ["*", "+", "-", "/"];

  if (operadores.includes(x)) {
    if (operadores.includes(valorAtual.slice(-1))) {
      valorAtual = valorAtual.slice(0, -1);
    }
    display.value = valorAtual;
  }
  if(display.value == typeof float){
    return display.value = valorAtual.toFixed(2);
  }
  display.value += x;
}

function limparDisplay() {
  document.getElementById("display").value = "";
}
