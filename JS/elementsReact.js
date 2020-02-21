function when_external_loaded(callback) {
  if (typeof datos === 'undefined') {
    setTimeout(function () {
      when_external_loaded(callback);
    }, 100); // wait 100 ms
  } else { callback(); }
}

when_external_loaded(function () {
  let nombres = [];
  for (let x in datos.data) {
    nombres.push(x);
  }
  let elegidosIzquierda = [];
  elegir(elegidosIzquierda, nombres);
  let elegidosDerecha = [];
  elegir(elegidosDerecha, nombres);
  for (let i = 0; i < elegidosIzquierda.length; i++) {
    let idizquierda = 'izquierda' + (i + 1);
    let idderecha = 'derecha' + (i + 1);
    ReactDOM.render(<Campeon name={elegidosIzquierda[i]} />, document.getElementById(idizquierda));
    ReactDOM.render(<Campeon name={elegidosDerecha[i]} />, document.getElementById(idderecha));
  }

});

function elegir(elegidos, nombres) {
  while (elegidos.length < 5) {
    let number = Math.floor((Math.random() * nombres.length));
    if (!elegidos.includes(nombres[number])) {
      elegidos.push(nombres[number]);
    }
  }
}
function Campeon(props) {

  let img = "http://ddragon.leagueoflegends.com/cdn/10.4.1/img/champion/" + datos.data[props.name].image.full;
  console.log(datos.data[props.name])
  return (
    <div>
      <img src={img} />
      <div>
        <p id="name">{datos.data[props.name].name}</p>
        <p id="title">{datos.data[props.name].title}</p>
      </div>
    </div>
  )
}
