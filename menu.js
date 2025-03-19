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


showMenu('menuicon', 'nav-menu');

