/*JUGUEMOS*/
let menu= document.querySelector('.indice-menu');
let flag=false;
let contador=0;


const scrollnavsecciones = () => {

    if (window.innerHeight * 0.4 < window.scrollY) {
        document.querySelector("nav").classList.add("scrollNav")
    } else {
        document.querySelector("nav").classList.remove("scrollNav")
    }
}


function iniciar() {
    var imagenes = document.querySelectorAll('#imagenesjuego img');
    caja1 = document.getElementById('movercaja1');
    caja2 = document.getElementById('movercaja2');
    caja3 = document.getElementById('movercaja3');

    for (var i = 0; i < imagenes.length; i++) {
        imagenes[i].addEventListener('dragstart', arrastrar, false);
    }

    caja1.addEventListener('dragenter', function (e) {
        e.preventDefault();
    }, false);
    caja1.addEventListener('dragover', function (e) {
        e.preventDefault();
    }, false)

        ;
    caja1.addEventListener('drop', soltar, false);


    caja2.addEventListener('dragenter', function (e) {
        e.preventDefault();
    }, false);
    caja2.addEventListener('dragover', function (e) {
        e.preventDefault();
    }, false);
    caja2.addEventListener('drop', soltar, false);


    caja3.addEventListener('dragenter', function (e) {
        e.preventDefault();
    }, false);
    caja3.addEventListener('dragover', function (e) {
        e.preventDefault();
    }, false);
    caja3.addEventListener('drop', soltar, false);

}
function arrastrar(e) {
    elemento = e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));
}

async function soltar(e) {
    e.preventDefault();
    console.log(e)
    let id = e.dataTransfer.getData('Text');
    let imagen = document.getElementById(id);
    imagen.style.display = 'none';
    e.target.innerHTML = '<img src="' + imagen.src + '" height="400px" width="300px">';
}

function reiniciar() {
    window.location.reload();
}

iniciar()
