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
