"use strict";

var verdad = 3 * 3,
    verdad1 = "Angel",
    verdad2 = 48 - 5;
var promesa = new Promise(function (resolve, reject) {
  if (verdad) {
    resolve();
  } else {
    reject();
  }
}).then(function () {
  return document.write("<br> El resultado de la multiplicacion es " + 9);
})["catch"](function () {
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