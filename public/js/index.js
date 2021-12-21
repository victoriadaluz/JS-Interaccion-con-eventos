// alert("Conectado")
window.addEventListener('load', function() {

    //JavaScript del Index
    let container = document.querySelector('.container');
    let subtitulo = document.querySelector('.subtitulo');
    let destacado = document.querySelectorAll('p');
    let enlace = document.querySelector('a');
    let logo = document.querySelector('.logoDH');


    let name = prompt('Ingrese su nombre');

    if(!name) {
        subtitulo.innerHTML += " Invitado";
    } else {
        subtitulo.innerHTML += name;
    }

    subtitulo.style.textTransform = "uppercase";
    enlace.style.color = "#E51B3E";

    let confirmar = confirm('¿Desea colocar un fondo de pantalla?')

    if(confirmar) {
        document.querySelector('body').classList.add('fondo');
    }

    for(let i = 0 ; i < destacado.length; i++){
        if(i % 2 == 0){
            destacado[i].classList.add('destacadoPar');
        }else{
            destacado[i].classList.add('destacadoImpar');
        }
    }
    
    container.style.display = 'block';

    logo.addEventListener("click", () => {
        logo.classList.toggle("menu")
    })

});