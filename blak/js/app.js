const btns = document.querySelectorAll("[data-button]");
const landing = document.querySelector("#landing-page");
console.log(btns)



const image = [
    "url(../assents/img/slider/15.jpg)",
    "url(../assents/img/slider/16.jpg)",
    "url(../assents/img/slider/17.jpg)",
    "url(../assents/img/slider/18.jpg)",
    "url(../assents/img/slider/19.jpg)",
];

// landing.style.backgroundImage = image[0];
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

const services1 = document.querySelector(".services_type_item");
// console.log(services.children);
const buttons1 = document.querySelectorAll(".service-button button");
 console.log(buttons1)



 function moverButton (buttons, services) {
    let translateValue = services.firstElementChild.scrollWidth+16;
    const childWidth = translateValue;
    buttons.forEach(button =>{
        button.addEventListener("click", ()=>{
            if (button.id === "nextBtn"){
                if (translateValue >= ((services.children.length-3) * childWidth)) {
                    translateValue =0;
                }
                console.log("my value:" + translateValue);
                // console.log((services.children.length-3) * 395);
                services.style.transform = `translateX(-${translateValue}px)`;
                translateValue += childWidth;
                console.log( services.style.transform );
            } else if (button.id === "prevBtn"){
                if(translateValue > 0){
                    translateValue = -(services.children.length-3) * childWidth;
                }
                console.log(translateValue);
                services.style.transform = `translateX(${translateValue}px)`;
                translateValue += childWidth;
            }
        });
    });
    return services, buttons;
    

}
moverButton(buttons1, services1)


// COMPANY Clients

const clients = document.querySelectorAll(".company_clients_items_reviews")
let moveValue = 616 ;
let count = 0;
let items = clients.length-1
function cycleArray() {
    clients.forEach((client) =>{
        // client.style.backgroundColor = "red";

        client.style.transform =`translateX(-${moveValue}px)`;
        console.log(moveValue);
    })
    moveValue +=616;
    count ++;
    console.log(count)
    if(count == items){
        moveValue = 0;
        count=0;
    }



}
// setInterval(cycleArray, 2000);

// Teams fuction movers

// const teams = document.querySelector(".company_creative_teams");
// const teamBtn = document.querySelectorAll(".teams-button button");

// moverButton(teamBtn, teams);

export {moverButton};







