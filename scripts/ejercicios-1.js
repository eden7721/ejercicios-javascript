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