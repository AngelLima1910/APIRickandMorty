export class Consulta {
    constructor() {

    }
    consulta() {
        fetch("https://rickandmortyapi.com/api/character?page=2") //Recibe un parametro de URL
            .then(respuesta =>
                respuesta.json() //Los datos recibidos seran convertidos en formato json
            )
            .then(respuesta => { //Los datos son recibidos en json
                console.log(respuesta); //Los datos obtenidos se mostraran
                let { results } = respuesta;
                let personajes = ``;
                let contador = 0;
                results.map(personaje => {
                    let {
                        created,
                        gender,
                        id,
                        image,
                        location,
                        name,
                        origin,
                        species,
                        status,
                        url
                    } = personaje;
                    if (contador < 5)
                        personajes += `
                        <div class="card">
                            <div class="card-title text-center">
                                <h1 class="display-4"> ${name} | No. ${id} </h1>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-8 align-self-center">
                                        <p><b>Creacion del personaje: </b>${created}</p>
                                        <p><b>Genero del personaje: </b>${gender}</p>
                                        <p><b>Localizacion del personaje: </b>${location.name}</p>
                                        <p><b>Origen del personaje: </b>${origin.name}</p>
                                        <p><b>Especie del personaje: </b>${species}</p>
                                        <p><b>Estado del personaje: </b>${status}</p>
                                    </div>
                                    <div class="col-md-4 align-self-center">
                                        <img class="img-fluid mb-3" src="${image}" alt="">
                                        <a class="btn btn-outline-primary" href="${url}">Ver mas</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                    contador++;
                });
                $(`#personajes`).html(personajes);
            })
            .catch(error => { //Se atrapa los errores en caso de existir
                console.log(error); //Se muestran los errores
            });
    }
    consultaEpisodios() {
        fetch("https://rickandmortyapi.com/api/episode?page=2")
            .then(respuesta =>
                respuesta.json()
            )
            .then(respuesta => {
                console.log(respuesta);
                let { results } = respuesta;
                let episodios = ``;
                let contador = 0;
                results.map(episodio => {
                    let {
                        id,
                        name,
                        air_date,
                        episode,
                        url,
                        created
                    } = episodio;
                    if (contador < 5) {
                        episodios += `
                        <div class="card">
                            <div class="card-title text-center">
                                <h1 class="display-4"> No. Episodio ${id}</h1>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-8 align-self-center">
                                        <p><b>Nombre del episodio: </b>${name}</p>
                                        <p><b>Fecha de estreno del episodio: </b>${air_date}</p>
                                        <p><b>Temporada del episodio: </b>${episode}</p>
                                        <p><b>Creacion del episodio: </b>${created}</p>
                                    </div>
                                    <div class="col-md-4 align-self-center">
                                        <a class="btn btn-outline-primary" href="${url}"> Ver más </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `;
                        contador++;
                    }
                });
                $(`#episodios`).html(episodios);
            })
            .catch(error => {
                console.log(error);
            });
    }
    consultarLocacion() {
        fetch("https://rickandmortyapi.com/api/location?page=2")
            .then(respuesta =>
                respuesta.json()
            )
            .then(respuesta => {
                console.log(respuesta);
                let { results } = respuesta;
                let locaciones = ``;
                let contador = 0;
                results.map(locacion => {
                    let {
                        id,
                        name,
                        type,
                        dimension,
                        url,
                        created
                    } = locacion;
                    if (contador < 9) {
                        locaciones += `
                        <div class="card">
                            <div class="card-title text-center">
                                <h1 class="display-4"> ${name} | No. ${id}</h1>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-8 align-self-center">
                                        <p><b>Tipo: </b>${type}</p>
                                        <p><b>Dimensión: </b>${dimension}</p>
                                        <p><b>Creado: </b>${created}</p>
                                    </div>
                                    <div class="col-md-4 align-self-center">
                                        <a class="btn btn-outline-primary" href="${url}"> Ver más </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `;
                        contador++;
                    }
                });
                $(`#locaciones`).html(locaciones);
            })
            .catch(error => {
                console.log(error);
            });
    }
}