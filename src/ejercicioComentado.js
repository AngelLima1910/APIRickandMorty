//Declaracion de las variables con las que se haran las validaciones
let verdad = 3 * 3,
    verdad1 = "Angel",
    verdad2 = 48 - 5;
//Creación de la instancia la cual ocupara propiedades de la clase Promise
const promesa = new Promise((resolve, reject) => {
    //Se hara la comparacion si el parametro que se envia es cierto se devolvera el primer metodo
    if (verdad) {
        resolve();
        //En caso de no cumplirse la condicion se devolvera el segundo metodo
    } else {
        reject();
    }
    //Caso afirmativo el cual devolvera un true
}).then(() =>
    document.write(`<br> El resultado de la multiplicacion es ` + 9)
    //Caso negativo el cual devolvera un false
).catch(() =>
    document.write(`<br> No es el resultado!`)
);
const promesa1 = new Promise((resolve, reject) => {
    if (typeof(verdad1) == "string") {
        resolve();
    } else {
        reject();
    }
}).then(() =>
    document.write(`<br> El nombre es ` + verdad1)
).catch(() =>
    document.write(`<br> No es el nombre!`)
);
const promesa2 = new Promise((resolve, reject) => {
    if (verdad2) {
        resolve();
    } else {
        reject();
    }
}).then(() =>
    document.write(`<br> El resultado de la resta es ` + 45)
).catch(() =>
    document.write(`<br> No es el resultado!`)
);