document.addEventListener('DOMContentLoaded', function () {
    var myModal = new bootstrap.Modal(document.getElementById('myAutoModal'), {});
    myModal.show();
});

// document.addEventListener('click',()=>{
//   var btnmodal = new bootstrap.Modal(document.getElementById('myAutoModal'),{});
//   btnmodal.show();
// });

// ====....[navigation bar scroll to background color apply]
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const navbar = document.getElementById("navbar");
    // Define the scroll distance before the color change (e.g., 50 pixels)
    const scrollThreshold = 50;

    if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
        // User has scrolled down past the threshold
        navbar.classList.add("scrolled");
    } else {
        // User is at the top of the page
        navbar.classList.remove("scrolled");
    }
}


// navigation bar uding on hamburger

document.addEventListener("DOMContentLoaded",function(){
    const hamburger = document.querySelector('.hamburger');

    const navMenu = document.querySelector(".btn-group");

    hamburger.addEventListener("click",function(){
        navMenu.classList.toggle("show")
    })
})
