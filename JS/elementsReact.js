let nombres=[];

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

  for (let i = 0; i < nombres.length; i++) {
    let elemento = document.createElement('div');
    elemento.setAttribute('id', i);
    document.getElementById('campeones').append(elemento);
    
    ReactDOM.render(<CampeonImagen name={nombres[i]}/>, document.getElementById(i));
    document.getElementById(i).addEventListener('click',function(){
      mostrar(datos.data[nombres[i]].name);
    });  
    let idizquierda = 'izquierda' + (i + 1);
    let idderecha = 'derecha' + (i + 1);
    if (i < 5) {
      ReactDOM.render(<Campeon name={elegidosIzquierda[i]} />, document.getElementById(idizquierda));
      ReactDOM.render(<Campeon name={elegidosDerecha[i]} />, document.getElementById(idderecha));

    }

  }
});
function mostrar(i){
  let elemento=document.getElementById('chat');
        elemento.innerHTML=`
        <p>${datos.data[i].name}, ${datos.data[i].title}</p>
        <p>${datos.data[i].blurb}</p>
        Ataque: ${datos.data[i].info.attack}
        Defensa: ${datos.data[i].info.defense}
        Dificultad: ${datos.data[i].info.difficulty}
        Magia: ${datos.data[i].info.magic}
        
        `;
      
}




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
  
  return (
    <div >
      <img src={img} />
      <div className="descripcion"> 
        <p>{datos.data[props.name].name}</p>
        <p>{datos.data[props.name].title}</p>
      </div>
      
    </div>
  )
}

function CampeonImagen(props) {

  let img = "http://ddragon.leagueoflegends.com/cdn/10.4.1/img/champion/" + datos.data[props.name].image.full;
  
  return (
    <div className={[datos.data[props.name].name , datos.data[props.name].tags[0] , datos.data[props.name].tags[1]]} >
      <img src={img} width='100' />
    </div>
    
  )
}