// home page
const headBG = document.getElementById('headBG');
const menuBtn = document.getElementsByClassName('menuBtn')[0];
const footer = document.querySelector('footer');


menuBtn.addEventListener('click', menuOpen);


function menuOpen() {
    if (headBG.style.transform === 'translateY(calc(var(--menuHeight) * -1))') {
        headBG.style.transform = 'none';
    } else {
        headBG.style.transform = 'translateY(calc(var(--menuHeight) * -1))';
    }
    menuBtn.classList.toggle('opened');
};