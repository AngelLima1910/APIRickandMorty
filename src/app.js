// import { promesa } from "./promesas";
// import Operador from "./ternario";
// const ternario = new Operador(1);
// document.write(ternario.validacion());
import { Consulta } from "./fetch";
const api = new Consulta();
api.consulta();
api.consultaEpisodios();
api.consultarLocacion();