// script.js

function duplicarElementos() {
    const numeros = [1, 2, 3, 4, 5,6]; 
  
    const duplicados = numeros.map((numero) => numero * 2);
  
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<p>Array Original: [${numeros.join(", ")}]</p>`;
    resultadoElement.innerHTML += `<p>Array Duplicado: [${duplicados.join(", ")}]</p>`;
  }
  