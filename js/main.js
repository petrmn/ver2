//opened page name crossed

const menuButton = document.getElementById('headMenuBtn');
const menu = document.getElementById('menuTop');

menuButton.addEventListener('click', () => {
    if (menu.style.transform === `scale(1, 1)`) {
        menu.style.transform = `scale(1, 0)`;
    } else {
        menu.style.transform = `scale(1, 1)`;
    };
    menuButton.classList.toggle('opened');
});

const links = document.querySelectorAll('.pageList a');
const bodyId = document.querySelector('body').id;

for (let link of links) {
    if (link.dataset.active == bodyId) {
        link.classList.add('activePg');
    };
};

