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
            for (let i = 0; i < repeticiones; i++) {
                newPalabra += palabra + " ";
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
            for (let i = palabra.length - 1; i >= 0; i--) {
                word += palabra[i];
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

            for (let i = 0; i < arrayPalabras.length; i++) {
                if (arrayPalabras[i].toLowerCase() === palabra2.toLowerCase()) {
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
            for (let i = palabra.length - 1; i >= 0; i--) {
                word += palabra[i];
            }
            if (palabra.toLowerCase() === word.toLowerCase()) {
                console.log("Palindromo:" + true);
            } else console.log("Palindromo:" + false);
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
            while (palabra.includes(patron)) {
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

//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
function miFunct9(min, max) {
    min = Math.floor(min);
    max = Math.floor(max);
    console.log(Math.floor(Math.random() * (max - min) + min));
}
miFunct9(501, 600);

//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

function miFunct10(num) {
    if(Array.isArray(num)){
        console.log("Ingresa un número");
    }
    else {
        if(isNaN(num)){
            console.log("ingresa un número");
        }
        else {
            let w1 = num.toString();
            let w2 = "";
            for(let i = w1.length-1; i >= 0; i--){
                w2+= w1[i];
            }
            if(w2 === w1) console.log(true);
            else console.log(false);
        }
    }

}
miFunct10("123321");
//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

function miFunct11(num){
    let num2 = 1;
    for(let i = 1; i <= num; i++){
        num2 = num2*i;
    }
    console.log(num2);
}
miFunct11(20);
//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

function miFunct12(num){
    if(num === 2 || num === 3 || num === 5 || num === 7){
        console.log(`${num}: es primo`);
    }
    else if(num === 1){
        console.log("Uno");
    }
    else if(num % 2 !== 0){
        if( num % 3 !== 0 ) {
            if( num % 5 !== 0){
                if( num % 7 !== 0){

                    console.log(`${num}: es primo`);
                }
            }
        }
    }
}
miFunct12(97);

//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
function miFunct13(num){
    if(num % 2 === 0){
        console.log(`${num}: es par`);
    } else console.log(`${num}: es impar`);
}
miFunct13(5);

//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
function miFunct14(temp, mod){
    let celsius = 0;
    let faren = 0;
    if(mod === 'C'){
        celsius = (temp * 9 / 5) + 32;
        console.log(celsius+"°F");
    }
    else if(mod = 'F') {
        faren = (temp - 32) * 5 / 9;
        console.log(faren + "°C");
    }
    else{
        console.log("Ingresa bien la medida");
    }
}
miFunct14(0, 'C');
miFunct14(0, 'F');
miFunct14(12, 'C');

//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
function miFunct17(num, base){
    let wNum = num.toString();
    let num2 = 0;
    let num3 = "";
    let miArray = [];
    if(base === 2){
        miArray = wNum.split("");
        let b = miArray.length - 1; 
        for(let i = 0; i < miArray.length; i++){
            miArray[i] = Number.parseInt(miArray[i]);
        }
        for(let i = 0; i < miArray.length; i++){
            num2+= + (miArray[i] * Math.pow(2, b));
            b--;
        }
        console.log(`${num2} base 10`);
    }
    else if(base === 10){
        while(num !== 0){
            miArray.push((num % 2).toString());
            num = Math.floor(num / 2);
        }
        for(let i = miArray.length - 1; i >= 0; i--){
            num3+= miArray[i];
        }
        console.log(`${num3} base 2`);
    }
}
miFunct17(4, 10);

//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const miFunct15 = (monto, descuento) => monto = monto - (monto * (descuento * 0.01));
console.log(miFunct15(1000, 20));

//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

function miFunct16(date){
    let yearActual = new Date().getFullYear();
    let monthActual = new Date().getMonth();
    if(Number.parseInt(monthActual) >= Number.parseInt(date.getMonth())){
        return Number.parseInt(yearActual) - Number.parseInt(date.getFullYear());
    }
    else return Number.parseInt(yearActual) - Number.parseInt(date.getFullYear()) - 1;
}
console.log(miFunct16(new Date(2004, 10, 17)));
/*
*/