//Declaracion de variables
let valida = true;
//Creacion de instancia la cual tomara parametros de la clase Promise
const promesa = new Promise((resolve, reject) => {
    //Se crea un if el cual validara si la variable es verdadera o es falsa
    if (valida) {
        resolve();
    } else {
        reject();
    }
}).then(() =>
    document.write(`Promesa JS`)
).catch(() =>
    document.write(`Se genero un error!`)
);