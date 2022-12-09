let verdad = 3 * 3,
    verdad1 = "Angel",
    verdad2 = 48 - 5;
const promesa = new Promise((resolve, reject) => {
    if (verdad) {
        resolve();
    } else {
        reject();
    }
}).then(() =>
    document.write(`<br> El resultado de la multiplicacion es ` + 9)
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