// script.js

function contarPalabras() {
    const frase = document.getElementById("frase").value;
    const resultadoElement = document.getElementById("resultado");
  
    if (frase) {
      const numPalabras = contarPalabrasEnFrase(frase);
      resultadoElement.textContent = `Número de palabras en la frase: ${numPalabras}`;
    } else {
      resultadoElement.textContent = "Por favor, ingresa una frase.";
    }
  }
  
  function contarPalabrasEnFrase(frase) {
    // Dividir la frase en palabras utilizando un espacio como separador
    const palabras = frase.split(" ");
    // Filtrar las palabras vacías (espacios adicionales)
    const palabrasFiltradas = palabras.filter(palabra => palabra.trim() !== "");
    return palabrasFiltradas.length;
  }
  