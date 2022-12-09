export default class Operador {
    constructor(dato) {
        this.dato = dato;
    }
    validacion() {
        //     let operaTernario = this.dato > 2 ? `Es mayor a 2` : `Es menor a 2`;
        //     document.write(`El numero ${this.dato > 2 ? `Es mayor a 2` : `Es menor a 2`}`);
        // if (!this.dato) {
        //     document.write(`Es verdadero `);
        // } else {
        //     document.write(`Es falso `);
        // }
        // return typeof(this.dato) != "number" ? (this.dato == null ? `El valor es nulo` : `Debe ingresar un numero`) : (this.dato > 2 ? `Es mayor a 2` : `Es menor a 2`);
        return typeof(this.dato) != "number" ? (this.dato == null ? `El valor es nulo` : (this.dato > 1 ? `El valor es numerico` : (this.dato == "cadena" ? `El valor es una cadena` : (this.dato == undefined ? `El valor es undefined` : (this.dato == Object ? `El valor es un objeto` : `El valor es otro dato`))))) : `Ingresa un valor`;
    }

}
const ternario = new Operador(2);
document.write(ternario.validacion());
/*
    nulo
    vacio
    numero
    cadena
    indefinido
    objeto
*/