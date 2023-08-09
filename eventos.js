document.addEventListener("DOMContentLoaded", function () {
    const divselect = document.querySelector("div");
    const btn = document.querySelector("button");
    
    divselect.addEventListener("click", function() {
    alert('Hola! Soy el div');
    });

    btn.addEventListener("click", function() {
        event.stopPropagation()
        alert('Hola!');
    });
});