(()=> {
    let theHeader = document.querySelector(".main-heading");
    let theIcons = document.querySelectorAll(".icon");


    function logElement() {
    console.log('clicked on an element:', this.id);
    }

    theHeader.addEventListener("click", logElement);

    theIcons.forEach(icon => icon.addEventListener("click", logElement));
})();