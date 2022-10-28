const btns = document.querySelectorAll("[data-button]");
// let button = document.querySelector(".next");
// let button1 = document.querySelector(".prev");
const landing = document.querySelector("#landing-page");
console.log(btns)



const image = [
    "url(../assents/img/slider/15.jpg)",
    "url(../assents/img/slider/16.jpg)",
    "url(../assents/img/slider/17.jpg)",
    "url(../assents/img/slider/18.jpg)",
    "url(../assents/img/slider/19.jpg)",
];

landing.style.backgroundImage = image[0];
let counter=0;

btns.forEach( (btn)=>{
    btn.addEventListener('click',()=>{
        landing.style.backgroundImage= image[counter];
        if(btn.id==='prev'){
            counter -=1;
            if(counter < 0){
                counter = image.length-1;
            }
        }else if(btn.id==='next'){
            counter+=1;
            if(counter>image.length-1){
                counter = 0;
            }
            
        }
    })

});


