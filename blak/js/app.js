// const button = document.querySelectorAll("[data-button]");
let button = document.querySelector(".next");
let button1 = document.querySelector(".prev");
const landing = document.querySelector("#landing-page");

const image = [
    "url (../assents/img/slider/15.jpg)",
    "url (../assents/img/slider/16.jpg)",
    "url (../assents/img/slider/17.jpg)",
    "url (../assents/img/slider/18.jpg)",
    "url (../assents/img/slider/19.jpg)",
];
console.log(image);


button.addEventListener('click',() => {
    landing.style.backgroundImage ="url(../assents/img/slider/16.jpg)";
    // console.log('click');
});
button1.addEventListener('click',() => {
    landing.style.backgroundImage ="url(../assents/img/slider/19.jpg)";
    // console.log('click');
});
// button.forEach(button => {

// })

