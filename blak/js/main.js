const slider = document.querySelector(".carousel_image");
const image = document.querySelectorAll(".carousel_image img");

const prev = document.querySelector("#prevBtn");
const next = document.querySelector("#nextBtn");


// const imageArray = [image];
let counter = 1;
const size = image[0].clientWidth;
slider.style.transform = 'translateX(' + (-size * counter) + 'px)';


next.addEventListener('click', () => {
    if(counter >= image.length -1) return;
    slider.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';


});

prev.addEventListener('click', () => {
    if(counter<=0) return;

    // slider.style.transition = "transform 0.4s ease-in-out";
    counter--;
    
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    console.log(counter)


});

slider.addEventListener("transitionend", () => {
    if(image[counter].id === 'lastImage'){
        slider.style.transition = 'none';
        counter = image.length -2;
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';


    }
    if(image[counter].id === 'firstImage'){
        // slider.style.transition = 'none';
        counter = image.length - counter;
        console.log(counter);
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';


    }
})




