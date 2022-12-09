let valida = true;
export const promesa = new Promise((resolve, reject) => {
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