"use strict";

//Declaracion de las variables con las que se haran las validaciones
var verdad = 3 * 3,
    verdad1 = "Angel",
    verdad2 = 48 - 5; //Creación de la instancia la cual ocupara propiedades de la clase Promise

var promesa = new Promise(function (resolve, reject) {
  //Se hara la comparacion si el parametro que se envia es cierto se devolvera el primer metodo
  if (verdad) {
    resolve(); //En caso de no cumplirse la condicion se devolvera el segundo metodo
  } else {
    reject();
  } //Caso afirmativo el cual devolvera un true

}).then(function () {
  return document.write("<br> El resultado de la multiplicacion es " + 9);
} //Caso negativo el cual devolvera un false
)["catch"](function () {
  return document.write("<br> No es el resultado!");
});
var promesa1 = new Promise(function (resolve, reject) {
  if (typeof verdad1 == "string") {
    resolve();
  } else {
    reject();
  }
}).then(function () {
  return document.write("<br> El nombre es " + verdad1);
})["catch"](function () {
  return document.write("<br> No es el nombre!");
});
var promesa2 = new Promise(function (resolve, reject) {
  if (verdad2) {
    resolve();
  } else {
    reject();
  }
}).then(function () {
  return document.write("<br> El resultado de la resta es " + 45);
})["catch"](function () {
  return document.write("<br> No es el resultado!");
});