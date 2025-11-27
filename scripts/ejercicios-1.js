//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

function miFunct(palabra) {
    if (isNaN(palabra)) {
        try {
            palabra.toUpperCase();
            console.log(palabra.length)
        }
        catch (error) {
            console.log("No es un string");
        }
    }
    else {
        console.log("No es un string");
    }
}
miFunct("causita pe causita");

//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
function miFunct2(palabra, num) {
    if (isNaN(palabra)) {
        try {
            palabra.toLowerCase();
            if (palabra.length >= num) {
                let newPalabra = "";
                for (let i = 0; i < num; i++) {
                    newPalabra += palabra[i];
                }
                console.log(newPalabra);
            }
            else console.log("Indica un número menor.")
        }
        catch (error) {
            console.log("No es un string");
        }
    }
    else {
        console.log("No es un string");
    }
}
miFunct2("asd", 3);

//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
function miFunct3(palabra, separador) {
    if (isNaN(palabra)) {
        try {
            palabra.toUpperCase();
            console.log(palabra.split(separador));
        }
        catch (error) {
            console.log("No es un string");
        }
    }
    else {
        console.log("No es un string");
    }
}
miFunct3("hola mundo como estamos", " ");

//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

function miFunct4(palabra, repeticiones) {
    if (isNaN(palabra)) {
        try {
            palabra.toUpperCase();
            let newPalabra = "";
            for(let i = 0; i < repeticiones; i++){
                newPalabra+=palabra + " ";
            }
            console.log(newPalabra);
        }
        catch (error) {
            console.log("No es un string");
        }
    }
    else {
        console.log("No es un string");
    }
}
miFunct4("Hola mundo", 33);


//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
function miFunct5(palabra) {
    if (isNaN(palabra)) {
        try {
            palabra.toUpperCase();
            let word = "";
            for(let i = palabra.length-1; i >= 0; i--){
                word+= palabra[i];
            }
            console.log(word);
        }
        catch (error) {
            console.log("No es un string");
        }
    }
    else {
        console.log("No es un string");
    }
}
miFunct5("causita pe causita");

//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
function miFunct6(palabra, palabra2) {
    if (isNaN(palabra)) {
        try {
            palabra.toUpperCase();
            const arrayPalabras = palabra.split(" ");
            let contadorPalabras = 0;

            for(let i = 0; i < arrayPalabras.length; i++){
                if(arrayPalabras[i].toLowerCase() === palabra2.toLowerCase()){
                    contadorPalabras++;
                }
            }
            console.log(contadorPalabras);
        }
        catch (error) {
            console.log("No es un string");
        }
    }
    else {
        console.log("No es un string");
    }
}
miFunct6("causita pe causita, claro pe causita. O vas a decir que no PE", "pe");
//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
function miFunct7(palabra) {
    if (isNaN(palabra)) {
        try {
            palabra.toUpperCase();
            let word = "";
            for(let i = palabra.length-1; i >= 0; i--){
                word+= palabra[i];
            }
            if(palabra.toLowerCase() === word.toLowerCase()){
                console.log("Palindromo:"+true);
            }else console.log("Palindromo:"+false);
        }
        catch (error) {
            console.log("No es un string");
        }
    }
    else {
        console.log("No es un string");
    }
}
miFunct7("ojo");
//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
function miFunct8(palabra, patron) {
    if (isNaN(palabra)) {
        try {
            palabra.toUpperCase();
            let reemplazo = "";
            while(palabra.includes(patron)){
                palabra = palabra.replace(patron, reemplazo);
            }
            console.log(palabra);
            
        }
        catch (error) {
            console.log("No es un string1");
        }
    }
    else {
        console.log("No es un string2");
    }
}
miFunct8("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
/*
*/