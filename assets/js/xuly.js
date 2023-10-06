// Đóng mở menu
window.addEventListener('DOMContentLoaded', function() {
    var menu_nav = document.querySelector(".menu-nav");
    var menu = document.querySelectorAll("#sub-header .nav li");

    menu_nav.addEventListener('click', function() {

        menu.forEach(e => {
            e.classList.toggle('active');
        });


    })
})