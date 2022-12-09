const datos = new Map();
console.log(datos);
datos.set('nombre', 'Leslie');
datos.set('edad', 25);
datos.set(1, 'Ariel');
datos.set('nombre', 'Laura');
datos.set('edad', 25);
datos.set(2, 'Vanessa');

console.log(datos.get(2));
console.log(datos.size);
datos.forEach((value, key) => {
    console.log(`${key}:${value}`);
});