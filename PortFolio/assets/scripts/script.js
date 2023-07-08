function navMob() {
    var Nav = document.getElementById('mobile-menu')
    Nav.classList.toggle('mobile-menu')
}

function closeNav() {
    var close = document.getElementById('mobile-menu')
    close.classList.toggle('mobile-menu')
}


function collapseNavbar() {
    var navbar = document.getElementById("mobile-menu");
    if (window.innerWidth <= 768) {
      navbar.classList.toggle('mobile-menu')
    }
  }


window.addEventListener("load",function(){
  const preLoader=document.querySelector('.loading-container')
  const body=document.querySelector('.theme')
  preLoader.style.display="none"
  body.style.display="block"
});

document.addEventListener("DOMContentLoaded", function() {
  const slideshow = document.querySelector(".certs");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  let slideIndex = 0;

  const slides = slideshow.querySelectorAll("div");
  const totalSlides = slides.length;

  function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[index].style.display = "block";
  }

  function nextSlide() {
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlide(slideIndex);
  }

  function prevSlide() {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    showSlide(slideIndex);
  }

  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);

  showSlide(slideIndex);
  setInterval(nextSlide, 5000); // Change slide every 3 seconds
});
