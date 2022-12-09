"use strict";

var valida = true;
var promesa = new Promise(function (resolve, reject) {
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