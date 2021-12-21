window.addEventListener("load", () => {
    function randomColors (c1, c2, c3, c4, c5) {
        let colors = [c1, c2, c3 ,c4, c5];
        let ramdom = Math.floor((Math.random() * (5-0)) + 0)
        let colorRamdom = colors[ramdom]
        return colorRamdom
    }

    let titulo = document.querySelector(".moviesAddTitulo");
    let formulario = document.querySelector("#formulario");
    let article = document.querySelector("article");
    let inputTitle = document.querySelector('#title')


    titulo.innerHTML = "AGREGAR PELÍCULAS";
    titulo.classList.add("titulo")
    article.classList.add("fondoTransparente");
    formulario.classList.add("fondoCRUD");

    titulo.addEventListener("mouseover", () => {
        titulo.style.color = randomColors("green", "red", "yellow", "blue", "orange")
    })


    let estadoSecreto = 0;

    inputTitle.addEventListener("keyup", (e) => {
         switch (estadoSecreto) {
             case 0:
                 e.key == "S" ? estadoSecreto++ : estadoSecreto = 0;
                 break;
             case 1:
                 e.key == "E" ? estadoSecreto++ : estadoSecreto = 0;
                 break;
             case 2:
                 e.key == "C" ? estadoSecreto++ : estadoSecreto = 0;
                 break;
             case 3:
                 e.key == "R" ? estadoSecreto++ : estadoSecreto = 0;
                 break;
             case 4:
                 e.key == "E" ? estadoSecreto++ : estadoSecreto = 0;
                 break;
             case 5:
                 e.key == "T" ? estadoSecreto++ : estadoSecreto = 0;
                 break;
             case 6:
                 e.key == "O" ? alert("SECRETO MAGICO") : (estadoSecreto = 0);
                 break;
             default:
                 break;
        }
        
        console.log(e.key, estadoSecreto);

    })
     

})