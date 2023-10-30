const menu = document.querySelectorAll('.nav-body');
const menuBtn = document.querySelector('.burger-menu');

const body = document.body;

if (menu && menuBtn) {
    menu.forEach(element => {
        menuBtn.addEventListener('click', () => {
            element.classList.toggle('active')
        })
    });
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active')
        body.classList.toggle('lock')
    })
}
