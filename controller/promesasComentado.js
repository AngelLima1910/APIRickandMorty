"use strict";

//Declaracion de variables
var valida = true; //Creacion de instancia la cual tomara parametros de la clase Promise

var promesa = new Promise(function (resolve, reject) {
  //Se crea un if el cual validara si la variable es verdadera o es falsa
  if (valida) {
    resolve();
  } else {
    reject();
  }
}).then(function () {
  return document.write("Promesa JS");
})["catch"](function () {
  return document.write("Se genero un error!");
});