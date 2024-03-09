(() => {
    const mobileMenu = document.getElementsByClassName("mobile_header")[0];
        
    function openMenu() {
        mobileMenu.classList.remove("hide-menu");
    }

    const closeMenu = () => {
        mobileMenu.classList.add("hide-menu");
    }

    document.getElementById("hamburge_menu").addEventListener("click", openMenu);
    document.getElementById("close_menu").addEventListener("click", closeMenu);
})();