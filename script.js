var control = 0;
var margen = 0;
var imagenes = document.getElementsByClassName("slider-slide");
function derecha() {
    if (control > -2) {
        margen -= 640;
        document.getElementById("wrapper").style.marginLeft = margen + "px";
        control--;
        puntosActivos();
        flechas();
    }

}
function izquierda() {
    if (control < 0) {
        margen += 640;
        document.getElementById("wrapper").style.marginLeft = margen + "px";
        control++;
        puntosActivos();
        flechas();
    }

}
function puntoUno() {
    margen = 0;
    control = 0;
    document.getElementById("wrapper").style.marginLeft = margen + "px";
    puntosActivos();
    flechas();
}
function puntoDos() {
    margen = -640;
    control = -1;
    document.getElementById("wrapper").style.marginLeft = margen + "px";
    puntosActivos();
    flechas();
}
function puntoTres() {
    margen = -1280;
    control = -2;
    document.getElementById("wrapper").style.marginLeft = margen + "px";
    puntosActivos();
    flechas();
}
function puntosActivos() {
    if (control == 0) {
        document.getElementById("uno").classList.add("active");
    } else {
        document.getElementById("uno").classList.remove("active");
    }
    if (control == -1) {
        document.getElementById("dos").classList.add("active");
    } else {
        document.getElementById("dos").classList.remove("active");
    }
    if (control == -2) {
        document.getElementById("tres").classList.add("active");
    } else {
        document.getElementById("tres").classList.remove("active");
    }
}
function flechas() {
    if (control == 0) {
        document.getElementById("left").style.visibility = "hidden";
    } else {
        document.getElementById("left").style.visibility = "visible";
    }
    if (control == -2) {
        document.getElementById("right").style.visibility = "hidden";
    } else {
        document.getElementById("right").style.visibility = "visible";
    }
}
puntosActivos();
flechas();
