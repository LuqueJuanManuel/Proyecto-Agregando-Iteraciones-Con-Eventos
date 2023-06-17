window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    /* En moviesAdd.js, establecer que, cada vez que se pase el mouse por el título
      'AGREGAR PELÍCULA', este cambie su color. */
    
      let tituloColor= document.querySelector(".moviesAddTitulo")

      tituloColor.addEventListener("mouseover",() => {
          tituloColor.style.color = "green";
      });

      /* Micro Desafio 2 - Secreto Magico */

      let input = document.querySelector("#titulo");
      let estadoSecreto = 0;
      input.addEventListener("keyup", (e) => {
            switch (estadoSecreto) {
                  case 0:
                        e.key == "s" ? (estadoSecreto = 1) : (estadoSecreto = 0);
                        break;
                  case 1:
                        e.key == "e" ? (estadoSecreto = 2) : (estadoSecreto = 0);
                        break;
                  case 2:
                        e.key == "c" ? (estadoSecreto = 3) : (estadoSecreto = 0);
                        break;
                  case 3:
                        e.key == "r" ? (estadoSecreto = 4) : (estadoSecreto = 0);
                        break;
                  case 4:
                        e.key == "e" ? (estadoSecreto = 5) : (estadoSecreto = 0);
                        break;
                  case 5:
                        e.key == "t" ? (estadoSecreto = 6) : (estadoSecreto = 0);
                        break;
                  case 6:
                        e.key == "o" ? alert("SECRETO MAGICO") : (estadoSecreto = 0);
                        break;
                  default:
                        break;
            }
      });

};