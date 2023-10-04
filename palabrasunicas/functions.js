function contar() {
    let inputText = document.getElementById("inputText").value;
    let words = inputText.split(/[,.?¿¡! \t\n\r]+/); // Expresión regular actualizada
    let uniqueWords = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i].toLowerCase(); // Convertir la palabra a minúsculas y eliminar espacios en blanco alrededor
        if (word !== "") { // Verificar si la palabra no está vacía
            let isUnique = true;

            // Verificar si la palabra ya está en el array de palabras únicas
            for (let j = 0; j < uniqueWords.length; j++) {
                if (word === uniqueWords[j]) {
                    isUnique = false;
                    break;
                }
            }

            // Si la palabra no se encontró en el array, agregarla como única
            if (isUnique) {
                uniqueWords.push(word);
            }
        }
    }

    document.getElementById("result").textContent = `Palabras únicas: ${uniqueWords.length}`;
    console.log(uniqueWords);
}
