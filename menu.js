

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    toggle.addEventListener('click', () => {
        // Dodaj/usuń klasę do menu
        nav.classList.toggle('show-menu');

        // Dodaj/usuń klasę do ikony
        toggle.classList.toggle('show-icon');
    });
}

// Wywołanie funkcji, przekazując odpowiednie id elementów
showMenu('menuicon', 'nav-menu');

// indexhtml
if (window.location.pathname.endsWith("index.html")) {
    window.history.replaceState(null, "", window.location.pathname.replace("index.html", ""));
}
