window.addEventListener("load", () => {

    let body = document.querySelector("body");
    let titulo = document.querySelector(".moviesListTitulo");
    let logo = document.querySelector("figure");

    logo.addEventListener('mouseover', () => {
        let background = confirm("¿Desea modo oscuro?");

        if(background) {
            body.style.backgroundColor = "#7f7f7f";
            body.classList.add("fondoMoviesList");
        }

    })

    titulo.innerHTML = "LISTADO DE PELICULAS";
    titulo.style.color = 'white';
    titulo.style.backgroundColor = 'teal';
    titulo.style.padding = '20px';

})