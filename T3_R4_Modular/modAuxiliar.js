//Ejercicio 1
export function filterNumbersGreaterThan(numeros, filtro) {
    return numeros.filter(numero => numero < filtro);
}

//Ejercicio 2
export function toHackerSpeak(texto) {
    return texto
        .replace(/a/gi, '4')
        .replace(/e/gi, '3')
        .replace(/i/gi, '1')
        .replace(/o/gi, '0')
        .replace(/s/gi, '5');
}

//Ejercicio 3
export function getFileExtension(archivo) {
    return archivo.substring(archivo.lastIndexOf('.') + 1);
}

//Ejercicio 4
export function flatArray(arr) {
    return arr.flat();
}

//Ejercicio 5
export function removeDuplicates(arr) {
    return [...new Set(arr)];
}

//Ejercicio 6
export function countLetter(letra, textos) {
    return textos.split('').filter(caracter => caracter.toLowerCase() === letra.toLowerCase()).length;
}

//Ejercicio 7
export function removeWords(str, words) {
    const palabrasAEliminar = new Set(words);
    return str
        .split(' ')
        .filter(palabra => !palabrasAEliminar.has(palabra))
        .join(' ');
}

