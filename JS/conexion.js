
let datos;

let conexion = new XMLHttpRequest();

addEventListener('load', inicializarEventos, false);

function inicializarEventos() {
    conexion.onreadystatechange = procesarEventos;
    conexion.open("GET", "http://ddragon.leagueoflegends.com/cdn/10.4.1/data/es_ES/champion.json", true);
    conexion.send();
}

function procesarEventos() {
    if (conexion.readyState == 4) {
        datos = JSON.parse(conexion.responseText);
    }

}


