let slideIndex = 1;
showSlides(slideIndex);



function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {

    let bgArray = new Array();
    bgArray[0] = new Image();
    bgArray[0].src = '/images/hover/dragon.jpg';

    bgArray[1] = new Image();
    bgArray[0].src = '/images/hover/dragon.jpg';

    bgArray[2] = new Image();
    bgArray[0].src = '/images/hover/dragon.jpg';

    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("hobby-section");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

}