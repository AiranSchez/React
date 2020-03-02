var filtro = document.getElementById("TextoABuscar")

filtro.addEventListener('keyup', function(){
    var TextoABuscar = document.getElementById("TextoABuscar").value
    var TextoABuscarArreglado = TextoABuscar.charAt(0).toUpperCase() + TextoABuscar.slice(1)
    var campeones = document.getElementsByClassName("Campeones")[0].children
    
    for (let i = 0; i < campeones.length; i++) {

        let nombrecampeon = campeones[i].firstElementChild.className
        
        if(!nombrecampeon.includes(TextoABuscarArreglado)){
            campeones[i].firstElementChild.style = 'display: none; overflow: hidden; '
        }
        else{
            campeones[i].firstElementChild.style = 'display: show; overflow: visible;'
        }
        
        
    }
})