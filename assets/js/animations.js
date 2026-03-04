// Fade In Animation on Scroll
document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.2
    });

    cards.forEach(card => {
        observer.observe(card);
    });

});


// Button Click Animation
document.addEventListener("click", function(e){
    if(e.target.classList.contains("btn-download")){
        e.target.classList.add("clicked");
        setTimeout(() => {
            e.target.classList.remove("clicked");
        }, 300);
    }
});