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

const services = document.querySelector(".services_type_item");
console.log(services.children);
const buttons = document.querySelectorAll(".service-button button");
 console.log(buttons)



translateValue = 395;

buttons.forEach(button =>{
    button.addEventListener("click", ()=>{
        // if(button.id==="prevBtn"){
        //     services.style.transform = `translateX(-${translateValue}px)`;
        //     translateValue -= 390;

        if (button.id === "nextBtn"){
            if (translateValue <= -((services.children.length-3) * 395)) {
                translateValue =0;
            }
            console.log(translateValue);
            // console.log((services.children.length-3) * 395);
            services.style.transform = `translateX(-${translateValue}px)`;
            translateValue += 395;
        } else if (button.id === "prevBtn"){
            if(translateValue > 0){
                translateValue = -(services.children.length-3) * 395;
            }
            console.log(translateValue);
            services.style.transform = `translateX(${translateValue}px)`;
            translateValue += 395;
        }
    });
});


// COMPANY Clients

let moveValue = 500;
const clients = document.querySelector(".company_clients_items")
clients.children[0].style.borderColor = " 1px solid red";
function cycleArray() {
    if (moveValue < (clients.children.length)){
    }

    


    // reset counter if we reach end of array
}
setInterval(cycleArray, 2000);








