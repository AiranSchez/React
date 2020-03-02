var filtro = document.getElementById("TextoABuscar")

filtro.addEventListener('keyup', function () {
    var TextoABuscar = document.getElementById("TextoABuscar").value
    var TextoABuscarArreglado = TextoABuscar.charAt(0).toUpperCase() + TextoABuscar.slice(1)
    var campeones = document.getElementsByClassName("Campeones")[0].children

    for (let i = 0; i < campeones.length; i++) {

        let nombrecampeon = campeones[i].firstElementChild.className

        if (!nombrecampeon.includes(TextoABuscarArreglado)) {
            campeones[i].firstElementChild.style = 'display: none; overflow: hidden; '
        }
        else {
            campeones[i].firstElementChild.style = 'display: show; overflow: visible;'
        }


    }
})

var tipos = document.getElementById('roles').children
for (let j = 0; j < tipos.length; j++) {
    console.log(tipos[j])
    tipos[j].addEventListener('click', function () {
        console.log(tipos[j].id)
        var campeones = document.getElementsByClassName("Campeones")[0].children
        for (let i = 0; i < campeones.length; i++) {
            let nombrecampeon = campeones[i].firstElementChild.className
            
            if (!nombrecampeon.includes(tipos[j].id)) {
                campeones[i].firstElementChild.style = 'display: none; overflow: hidden; '
            }
            else {
                campeones[i].firstElementChild.style = 'display: show; overflow: visible;'
               
            }
        }
        
    })
}
