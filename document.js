
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', function () {
        const content = this.querySelector('.content');
        const decorator = this.querySelector('.decorator');

        // Toggle klasy open na kontencie
        content.classList.toggle('open');
        // Toggle klasy open na całym elemencie
        this.classList.toggle('open');

        // Zmieniamy kolor dekoratora na podstawie stanu
        if (this.classList.contains('open')) {
            decorator.style.backgroundColor = '#007bff'; //
        } else {
            decorator.style.backgroundColor = 'red'; //
        }
    });
});

