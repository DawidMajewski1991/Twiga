const sliderCinema = document.querySelector('.slider__screen');
const sliderImages = document.querySelectorAll('.slider__image')


//Buttons
const previousButton = document.querySelector('#previous');
const nextButton = document.querySelector('#next');


//Counter
let counter = 1;
const size = sliderImages[0].clientWidth;

sliderCinema.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button Listeners

previousButton.addEventListener('click',()=> {
    if (counter <= 0) return;
    sliderCinema.style.transition = "transform 0.4s ease-in-out";
    counter--;
    sliderCinema.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

nextButton.addEventListener('click',()=> {
    if (counter >= sliderImages.length -1) return;
    sliderCinema.style.transition = "transform 0.4s ease-in-out";
    counter++;
    sliderCinema.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

sliderCinema.addEventListener('transitionend', () => {
    if (sliderImages[counter].id === "last") {
        sliderCinema.style.transition = "none";
        counter = sliderImages.length -2;
        sliderCinema.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

sliderCinema.addEventListener('transitionend', () => {
    if (sliderImages[counter].id === "first") {
        sliderCinema.style.transition = "none";
        counter = sliderImages.length - counter;
        sliderCinema.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});