// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;
const totalSlides = slides.length;

// Function to move slider
function updateSlider() {
  const offset = -currentIndex * 100; 
  slider.style.transform = `translateX(${offset}%)`;
}

// Next button event
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
});

// Previous button event
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
});

// Auto-slide functionality every 6 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
}, 8000); // 8 seconds