const menuIcon = document.querySelector(".menu_icon");
const closeIcon = document.querySelector(".close_icon");
const saidbar = document.querySelector(".saidbar");


menuIcon.addEventListener("click", (e) =>{
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
    saidbar.style.marginLeft = "0%";
});

closeIcon.addEventListener("click", (e) =>{
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    saidbar.style.marginLeft = "-60%";

});

