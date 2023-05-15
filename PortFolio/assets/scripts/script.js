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
