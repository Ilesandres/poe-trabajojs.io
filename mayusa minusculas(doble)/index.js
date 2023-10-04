
function convertirPalabras() {
    const palabras = ["hola", "mundo", "javaScript", "programación"]; 
  
    // Utiliza la función map para convertir mayúsculas en minúsculas y viceversa
    const palabrasConvertidas = palabras.map((palabra) => {
      return palabra
        .split('') // Divide la palabra en un array de caracteres
        .map((caracter) => {
          if (caracter === caracter.toUpperCase()) {
            return caracter.toLowerCase(); // Convierte mayúsculas en minúsculas
          } else {
            return caracter.toUpperCase(); // Convierte minúsculas en mayúsculas
          }
        })
        .join(''); // Une los caracteres en una palabra nuevamente
    });
  
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<p>Palabras Originales: [${palabras.join(", ")}]</p>`;
    resultadoElement.innerHTML += `<p>Palabras Convertidas: [${palabrasConvertidas.join(", ")}]</p>`;
  }
  