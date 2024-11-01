//Ejercicio 1
import { filterNumbersGreaterThan } from './modAuxiliar.js';

const numeros = [3, 8, 12, 1, 7, 4];
const valorFiltro = 7;
const numerosFiltrados = filterNumbersGreaterThan(numeros, valorFiltro);

export { numeros, valorFiltro, numerosFiltrados };

//Ejercicio 2
import { toHackerSpeak } from './modAuxiliar.js';

const texto = "I'm a hacker now";
const textoHacker = toHackerSpeak(texto);

export { texto, textoHacker };

//EJercicio 3
import { getFileExtension } from './modAuxiliar.js';

const nombreArchivo = "imagen.jpg";
const extensionArchivo = getFileExtension(nombreArchivo);

export { nombreArchivo, extensionArchivo };

//Ejercicio 4
import { flatArray } from './modAuxiliar.js';

const array2D = [[1, 5, 4], [3, 10], [2, 5]];
const arrayAplanado = flatArray(array2D);

export { array2D, arrayAplanado };

//Ejercicio 5
import { removeDuplicates } from './modAuxiliar.js';

const arrayConDuplicados = [4, 5, 10, 4, 10, 2];
const arraySinDuplicados = removeDuplicates(arrayConDuplicados);

export { arrayConDuplicados, arraySinDuplicados };


//Ejercicio 6
import { countLetter } from './modAuxiliar.js';

const letra = "a";
const textos = "javascript";
const cantidad = countLetter(letra, textos);

export { letra, textos, cantidad };

//Ejercicio 7
import { removeWords } from './modAuxiliar.js';

const textoOriginal = "This is a really bad test";
const palabrasAEliminar = ["really", "bad"];
const textoResultante = removeWords(textoOriginal, palabrasAEliminar);

export { textoOriginal, palabrasAEliminar, textoResultante };