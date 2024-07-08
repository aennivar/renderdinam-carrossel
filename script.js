let slideIndex = 1;
mostrarSlides(slideIndex);

// Controles de anterior/próximo
function somaSlides(n) {
    mostrarSlides(slideIndex += n);
}

// Controles de imagem de thumbnail
function slideAtual(n) {
    mostrarSlides(slideIndex = n);
}

function mostrarSlides(n) {
    let i;
    let slides = document.getElementsByClassName("meusSlides");
    let bolas = document.getElementsByClassName("bola");
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex.length = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < bolas.length; i++) {
        bolas[i].className = bolas[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    bolas[slideIndex-1].className += " active";
}