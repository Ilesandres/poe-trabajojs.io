

function reemplazar() {
    const cadena = document.getElementById("cadena").value;
    const caracterReemplazo = document.getElementById("caracter").value;
    const resultadoElement = document.getElementById("resultado");
  
    if (cadena && caracterReemplazo) {
      const cadenaReemplazada = reemplazarVocales(cadena, caracterReemplazo);
      resultadoElement.textContent = "Cadena Resultante: " + cadenaReemplazada;
    } else {
      resultadoElement.textContent = "Por favor, completa ambos campos.";
    }
  }
  
  function reemplazarVocales(cadena, caracterReemplazo) {
    const regex = /[aeiouAEIOU]/g;
    const cadenaReemplazada = cadena.replace(regex, caracterReemplazo);
    return cadenaReemplazada;
  }
  