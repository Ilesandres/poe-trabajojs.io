// script.js

function calcularLongitud() {
    const oracion = document.getElementById("oracion").value;
    const palabras = oracion.split(" ");
    const resultadoElement = document.getElementById("resultado");
  
    let resultadoHTML = "<p>Longitud de palabras:</p>";
  
    for (let i = 0; i < palabras.length; i++) {
      resultadoHTML += `<p>${palabras[i]}: ${palabras[i].length} caracteres</p>`;
    }
  
    resultadoElement.innerHTML = resultadoHTML;
  }
  