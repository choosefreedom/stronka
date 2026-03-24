// cookies
const cookies = {
    getItem: (key) => {
        const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
        return cookies[key];
    },
    setItem: (key, value) => {
        document.cookie = `${key}=${value}; path=/`;
    },
};

const storageType = cookies;
const agreementProperty = 'cookies_agreement';

const showPopup = () => !storageType.getItem(agreementProperty);
const saveToStorage = () => storageType.setItem(agreementProperty, true);

window.onload = () => {
    const consentPopup = document.getElementById('cookies_popup');
    const acceptBtn = document.getElementById('accept');

    const acceptFn = (event) => {
        console.log("dupa");
        saveToStorage();
        consentPopup.classList.add('hidden');
    };

    acceptBtn.addEventListener('click', acceptFn);


    if (showPopup()) {
        console.log("dupa");
        consentPopup.classList.remove('hidden');
    }
};

// menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    toggle.addEventListener('click', () => {

        nav.classList.toggle('show-menu');


        toggle.classList.toggle('show-icon');
    });
}

// closing after click anywhere
showMenu('menuicon', 'nav-menu');

document.addEventListener('click', (event) => {
    const nav = document.getElementById('nav-menu');
    const toggle = document.getElementById('menuicon');

    const clickedInsideNav = nav.contains(event.target);
    const clickedToggle = toggle.contains(event.target);

    if (!clickedInsideNav && !clickedToggle && nav.classList.contains('show-menu')) {
        nav.classList.remove('show-menu');
        toggle.classList.remove('show-icon');
    }
});
