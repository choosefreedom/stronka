
var slides = document.querySelectorAll('.slide');
var buttons = document.querySelectorAll('.button');
let currentSlide = 0;


function setSlideClasses(outIndex, inIndex) {

    slides.forEach((slide, i) => {
        slide.classList.remove('active', 'out-left', 'in-right');
    });

    slides[outIndex].classList.add('out-left');
    slides[inIndex].classList.add('in-right');


    setTimeout(() => {
        slides[inIndex].classList.remove('in-right');
        slides[inIndex].classList.add('active');
    }, 50);


    buttons.forEach((button, i) => {
        button.classList.remove('active');
    });
    buttons[inIndex].classList.add('active');
}


function autoNavigation() {
    const nextSlide = (currentSlide + 1) % slides.length;
    setSlideClasses(currentSlide, nextSlide);
    currentSlide = nextSlide;
}

//manual
function manualNavigation(manualIndex) {
    if (manualIndex !== currentSlide) {
        setSlideClasses(currentSlide, manualIndex);
        currentSlide = manualIndex;
    }
}

// nav
buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
        manualNavigation(i);
    });
});

//dom
document.addEventListener('DOMContentLoaded', () => {
    slides[currentSlide].classList.add('active');
    buttons[currentSlide].classList.add('active');
});

// slide timeout
setInterval(autoNavigation, 8000);