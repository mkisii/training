// const dropdown = document. querySelectorAll(".dropdown");
const  buttons = document.querySelectorAll(".btn");
console.log(buttons)

buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle("active");
        // button.style.backgroundColor= "red";
        const dropdownContent = button.nextElementSibling;
        // console.log(dropdownContent);
         
        if(button.classList.contains("active")){
            dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
        }else{
            dropdownContent.style.maxHeight = 0;
        }




    

    });
    return dropdown;
});

