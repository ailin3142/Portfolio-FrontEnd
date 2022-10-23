//menu responsive
function responsiveMenu(){
    var x = document.getElementById("nav");
    if (x == null) return;
    if(x.className === ""){
        x.className = "responsive";
    }
}

//seleccion de opciones
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //desaparece menu en modo responsive
    var x = document.getElementById("nav");
    if (x == null) return;
    x.className ="";
}

//detectar scroll

window.onscroll = function() {
    efectoHabilidades();
};

//animacion barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    if (skills == null) return;
    var distancia_skills = window.innerHeight - skills?.getBoundingClientRect().top;
    if (distancia_skills >= 300 && distancia_skills <= 900) {
        document.getElementById("html")?.classList.add("barra-progreso1");
        document.getElementById("js")?.classList.add("barra-progreso2");
        document.getElementById("bd")?.classList.add("barra-progreso3");
        document.getElementById("React")?.classList.add("barra-progreso4");
    }else{
        document.getElementById("html")?.classList.remove("barra-progreso1");
        document.getElementById("js")?.classList.remove("barra-progreso2");
        document.getElementById("bd")?.classList.remove("barra-progreso3");
        document.getElementById("React")?.classList.remove("barra-progreso4");
    }
}