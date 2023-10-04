// anagramas.js

function sonAnagramas(cadena1, cadena2) {
    cadena1 = cadena1.replace(/\s/g, "").toLowerCase();
    cadena2 = cadena2.replace(/\s/g, "").toLowerCase();
  
    if (cadena1.length !== cadena2.length) {
      return false;
    }
  
    const frecuencia1 = {};
    const frecuencia2 = {};
  
    for (let char of cadena1) {
      frecuencia1[char] = (frecuencia1[char] || 0) + 1;
    }
  
    for (let char of cadena2) {
      frecuencia2[char] = (frecuencia2[char] || 0) + 1;
    }
  
    for (let char in frecuencia1) {
      if (frecuencia1[char] !== frecuencia2[char]) {
        return false;
      }
    }
  
    return true;
  }
  
  function verificarAnagramas() {
    const cadena1 = document.getElementById("cadena1").value;
    const cadena2 = document.getElementById("cadena2").value;
    const resultadoElement = document.getElementById("resultado");
  
    if (sonAnagramas(cadena1, cadena2)) {
      resultadoElement.textContent = "Son anagramas.";
    } else {
      resultadoElement.textContent = "No son anagramas.";
    }
  }
  
  function redireccionar(archivo) {
    window.location.href = archivo;
  }