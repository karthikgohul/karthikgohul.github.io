var show = document.getElementById('nexxt');
var moreHide = document.getElementById('mores-hide');

function more() {
    show.classList.toggle('next');
    moreHide.style.display = "none"
}

function hide() {
    show.classList.toggle('next')
    moreHide.classList.active('mores-hide')
}
