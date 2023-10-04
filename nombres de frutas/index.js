
const frutas = ["manzana", "banana", "naranja", "uva", "pera", "sandía", "mango"];

function buscarFruta() {
  const frutaBuscada = document.getElementById("fruta").value.toLowerCase();
  const resultadoElement = document.getElementById("resultado");
  let encontrada = false;
  let aux;

  if (frutaBuscada) {
    for (let i = 0; i < frutas.length; i++) {
      if (frutas[i] === frutaBuscada) {
        encontrada = true;
        aux=i;
        break;
      }
    }

    if (encontrada) {
      resultadoElement.textContent = `${frutaBuscada} está en la lista de frutas, en la pos ${aux}`;
    } else {
      resultadoElement.textContent = `${frutaBuscada} no está en la lista de frutas.`;
    }
  } else {
    resultadoElement.textContent = "Por favor, ingresa el nombre de una fruta.";
  }
}
