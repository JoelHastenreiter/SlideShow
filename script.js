var control = 0;
var margen = 0;

function derecha() {
    if (control > -2) {
        margen -= 640;
        document.getElementById("wrapper").style.marginLeft = margen + "px";
        control--;
    }

}
function izquierda() {
    if (control < 0) {
        margen += 640;
        document.getElementById("wrapper").style.marginLeft = margen + "px";
        control++;
    }

}
function puntoUno() {
    margen = 0;
    document.getElementById("wrapper").style.marginLeft = margen + "px";
}
function puntoDos() {
    margen = -640;
    document.getElementById("wrapper").style.marginLeft = margen + "px";
}
function puntoTres() {
    margen = -1280;
    document.getElementById("wrapper").style.marginLeft = margen + "px";
}
function puntosActivos() {
    if (margen == 0) {
        document.getElementById("uno").classList.add("active");
    } else {
        document.getElementById("uno").classList.remove("active");
    }
    if (margen == -640) {
        document.getElementById("dos").classList.add("active");
    } else {
        document.getElementById("dos").classList.remove("active");
    }
    if (margen == -1280) {
        document.getElementById("tres").classList.add("active");
    } else {
        document.getElementById("tres").classList.remove("active");
    }
}
function esconderFlechas() {
    if (margen == 0) {
        document.getElementById("left").style.visibility = "hidden";
    } else {
        document.getElementById("left").style.visibility = "visible";
    }
    if (margen == -1280) {
        document.getElementById("right").style.visibility = "hidden";
    } else {
        document.getElementById("right").style.visibility = "visible";
    }
}
puntosActivos();
esconderFlechas();
