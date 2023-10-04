

function convertirCadena() {
    const cadena = document.getElementById("cadena").value;
    const mayusculas = cadena.toUpperCase();
    const minusculas = cadena.toLowerCase();
    const resultadoElement = document.getElementById("resultado");
  
    resultadoElement.innerHTML = `
      <p>Mayúsculas: ${mayusculas}</p>
      <p>Minúsculas: ${minusculas}</p>
    `;
  }
  