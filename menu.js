
// menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    toggle.addEventListener('click', () => {

        nav.classList.toggle('show-menu');


        toggle.classList.toggle('show-icon');
    });
}


showMenu('menuicon', 'nav-menu');

document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname.endsWith('.html')) {
        const newPath = window.location.pathname.replace('.html', '');
        window.history.replaceState({}, '', newPath);
    }
});
