// script.js

function buscarPalabra() {
    const cadena = document.getElementById("cadena").value;
    const palabraClave = document.getElementById("palabraClave").value;
    const resultadoElement = document.getElementById("resultado");
  
    if (cadena && palabraClave) {
      const encontrado = buscarEnCadena(cadena, palabraClave);
      if (encontrado) {
        resultadoElement.textContent = `"${palabraClave}" fue encontrada en la cadena.`;
      } else {
        resultadoElement.textContent = `"${palabraClave}" no fue encontrada en la cadena.`;
      }
    } else {
      resultadoElement.textContent = "Por favor, completa ambos campos.";
    }
  }
  
  function buscarEnCadena(cadena, palabraClave) {
    // Usamos el método includes() para verificar si la palabra clave está en la cadena
    return cadena.includes(palabraClave);
  }
  