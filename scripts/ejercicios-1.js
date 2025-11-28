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
    if (Array.isArray(num)) {
        console.log("Ingresa un número");
    }
    else {
        if (isNaN(num)) {
            console.log("ingresa un número");
        }
        else {
            let w1 = num.toString();
            let w2 = "";
            for (let i = w1.length - 1; i >= 0; i--) {
                w2 += w1[i];
            }
            if (w2 === w1) console.log(true);
            else console.log(false);
        }
    }

}
miFunct10("123321");
//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

function miFunct11(num) {
    let num2 = 1;
    for (let i = 1; i <= num; i++) {
        num2 = num2 * i;
    }
    console.log(num2);
}
miFunct11(20);
//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

function miFunct12(num) {
    if (num === 2 || num === 3 || num === 5 || num === 7) {
        console.log(`${num}: es primo`);
    }
    else if (num === 1) {
        console.log("Uno");
    }
    else if (num % 2 !== 0) {
        if (num % 3 !== 0) {
            if (num % 5 !== 0) {
                if (num % 7 !== 0) {

                    console.log(`${num}: es primo`);
                }
            }
        }
    }
}
miFunct12(97);

//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
function miFunct13(num) {
    if (num % 2 === 0) {
        console.log(`${num}: es par`);
    } else console.log(`${num}: es impar`);
}
miFunct13(5);

//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
function miFunct14(temp, mod) {
    let celsius = 0;
    let faren = 0;
    if (mod === 'C') {
        celsius = (temp * 9 / 5) + 32;
        console.log(celsius + "°F");
    }
    else if (mod = 'F') {
        faren = (temp - 32) * 5 / 9;
        console.log(faren + "°C");
    }
    else {
        console.log("Ingresa bien la medida");
    }
}
miFunct14(0, 'C');
miFunct14(0, 'F');
miFunct14(12, 'C');

//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
function miFunct17(num, base) {
    let wNum = num.toString();
    let num2 = 0;
    let num3 = "";
    let miArray = [];
    if (base === 2) {
        miArray = wNum.split("");
        let b = miArray.length - 1;
        for (let i = 0; i < miArray.length; i++) {
            miArray[i] = Number.parseInt(miArray[i]);
        }
        for (let i = 0; i < miArray.length; i++) {
            num2 += + (miArray[i] * Math.pow(2, b));
            b--;
        }
        console.log(`${num2} base 10`);
    }
    else if (base === 10) {
        while (num !== 0) {
            miArray.push((num % 2).toString());
            num = Math.floor(num / 2);
        }
        for (let i = miArray.length - 1; i >= 0; i--) {
            num3 += miArray[i];
        }
        console.log(`${num3} base 2`);
    }
}
miFunct17(4, 10);

//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const miFunct15 = (monto, descuento) => monto = monto - (monto * (descuento * 0.01));
console.log(miFunct15(1000, 20));

//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

function miFunct16(date) {
    let yearActual = new Date().getFullYear();
    let monthActual = new Date().getMonth();
    if (Number.parseInt(monthActual) >= Number.parseInt(date.getMonth())) {
        return Number.parseInt(yearActual) - Number.parseInt(date.getFullYear());
    }
    else return Number.parseInt(yearActual) - Number.parseInt(date.getFullYear()) - 1;
}
console.log(miFunct16(new Date(2004, 10, 17)));

//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
function miFunct18(palabra) {
    let vocales = 0;
    let conso = 0;
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === 'a' || palabra[i] === 'e' || palabra[i] === 'i' || palabra[i] === 'o' || palabra[i] === 'u') {
            vocales++;
        }
        else if (palabra[i] === " ") {

        }
        else {
            conso++;
        }
    }
    console.log(`Vocales: ${vocales} - Consonantes: ${conso}`);
}
miFunct18("Hola Mundo");

//19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

//20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
function miFunct20(correo) {
    let re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return re.test(correo);
}
console.log(miFunct20("jonmircha@gmail.com"));

//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
function miFunct21(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = Math.pow(array[i], 2);
    }
    return array;
}
console.log(miFunct21([1, 4, 5]));

//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
function miFunct22(array) {
    let min = array[0];
    let max = 0;
    const arrMinMax = [];
    for (let i = 0; i < array.length; i++) (array[i] > max) ? max = array[i] : max = max;
    for (let i = 0; i < array.length; i++) (array[i] < min) ? min = array[i] : min = min;
    arrMinMax.push(max, min);
    return arrMinMax;
}
console.log(miFunct22([1, 4, 5, 99, -60]));

//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
function miFunct23(array) {
    const arrPar = [];
    const arrImpar = [];
    for (let i = 0; i < array.length; i++) {
        (array[i] % 2 == 0) ? arrPar.push(array[i]) : arrImpar.push(array[i]);
    }
    const objpi = {
        pares: arrPar,
        impares: arrImpar
    }
    return objpi;
}
console.log(miFunct23([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
function miFunct24(array) {
    let max = 0;
    let asc = [];
    let desc = [];
    for (let j = 0; j < array.length; j++) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        for (let i = 0; i < array.length; i++) {
            if (max === array[i]) {
                desc.push(array[i]);
                array[i] = "";
            }
        }
        max = 0;
    }
    for (let i = desc.length - 1; i >= 0; i--) {
        asc.push(desc[i]);
    }
    return { asc, desc };
}
console.log(miFunct24([7, 5, 7, 8, 6]));

//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

function miFunct25(array) {
    let arrayNR = [];
    let j = 0;
    for (let x = 0; x < array.length; x++) {
        if (array[x] !== "") {
            arrayNR.push(array[x]);
            for (let i = 0; i < array.length; i++) {
                if (arrayNR[j] === array[i]) {
                    array[i] = "";
                }
            }
            j++;
        }
    }
    return arrayNR;
}
console.log(miFunct25(["x", 10, "x", 2, "10", 10, true, true]));

//26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
function miFunct26(array) {
    let resultado = 0;
    for (let i = 0; i < array.length; i++) {
        resultado += array[i];
    }
    return resultado / array.length;
}
console.log(miFunct26([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));

/*
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
Todos los datos del objeto son obligatorios.
Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
Valida que el título no rebase los 100 caracteres.
Valida que el director no rebase los 50 caracteres.
Valida que el año de estreno sea un número entero de 4 dígitos.
Valida que el país o paises sea introducidos en forma de arreglo.
Valida que los géneros sean introducidos en forma de arreglo.
Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
Crea un método estático que devuelva los géneros aceptados*.
Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
Crea un método que devuelva toda la ficha técnica de la película.
Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/

class Pelicula {
    constructor(objPeli) {
        let reg = /^[A-Za-z]{2}\d{7}$/;
        if(reg.test(objPeli.id)){
            this.id = objPeli.id;
        }else throw new Error("Ingresa un id correcto.");
        if (objPeli.titulo.length <= 100 && objPeli.titulo !== "") this.titulo = objPeli.titulo;
        else throw new Error("El título no puede superar los 100 carácteres.");
        if (objPeli.director.length <= 50 && objPeli.director !== "") this.director = objPeli.director;
        else throw new Error("El nombre de director no puede superar los 50 carácteres.");
        if (!isNaN(objPeli.estreno)) {
            if (objPeli.estreno > 1900 && objPeli.estreno <= Number.parseInt((new Date().getFullYear()))) {
                this.estreno = objPeli.estreno;
            } else throw new Error("No ingresaste un año válido");
        } else throw new Error("No ingresaste un año válido");
        if (Array.isArray(objPeli.origen)) {
            this.origen = objPeli.origen;
        }else throw new Error("No ingresaste de manera correcta el dato");
        if (Array.isArray(objPeli.genero)){
            let correct = false;
            for(let j = 0; j < objPeli.genero.length; j++){
                correct = (Pelicula.generosAceptados()).includes(objPeli.genero[j]);
            }
            if(correct) this.genero = objPeli.genero;
            else throw new Error("El genero no coincide.");
        }else throw new Error("No ingresaste correctamente los datos.");
        if(!isNaN(objPeli.calificacion) && objPeli.calificacion >= 0 && objPeli.calificacion <= 10){
            this.calificacion = Number.parseFloat(objPeli.calificacion.toFixed(1));
        }else throw new Error("No ingresaste correctamente los datos.");

    }
    getFichaTecnica(){
        console.log(`ID Pelicula: ${this.id}
            Titulo: ${this.titulo}
            Director: ${this.director}
            Año Estreno: ${this.estreno}
            Pais de Origen: ${this.origen.forEach((el) => el)}
            Generos: ${this.genero.forEach((el) => el)}
            Calificación: ${this.calificacion}`);
    }
    static generosAceptados() {
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
    }
}

const peliculas = [
    {
        id: "AB1234678",
        titulo: "Monkey Man",
        director: "Dev Patel",
        estreno: 2024,
        origen: ["Canadá", "Singapur", "Estados Unidos"],
        genero: ["Action", "Crime", "Mystery"],
        calificacion: 6.8
    },
    {
        id: "AB9876548",
        titulo: "Kung Fu Hustle",
        director: "Stephen Chow",
        estreno: 2005,
        origen: ["Hong Kong", "China", "Estados Unidos"],
        genero: ["Action", "Comedy", "Fantasy"],
        calificacion: 7.7
    },
    {
        id: "AB1597538",
        titulo: "Old Boy",
        director: "Park Chan-wook",
        estreno: 2005,
        origen: ["Corea del Sur"],
        genero: ["Horror", "Thriller"],
        calificacion: 8.3
    }
];
function ingresarPeliculas(array){
    let peli;
    for(let i = 0; i < peliculas.length; i++){
        peli = new Pelicula(array[i]);
        console.log(peli);
    }
}
ingresarPeliculas(peliculas);   