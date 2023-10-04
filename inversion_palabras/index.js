

function invertirCadena() {
    const cadena = document.getElementById("cadena").value;
    const resultadoElement = document.getElementById("resultado");
  
    if (cadena) {
      const cadenaInvertida = invertirTexto(cadena);
      resultadoElement.textContent = `Cadena invertida: ${cadenaInvertida}`;
    } else {
      resultadoElement.textContent = "Por favor, ingresa una cadena.";
    }
  }
  
  function invertirTexto(texto) {
   
    return texto.split("").reverse().join("");
  }
  