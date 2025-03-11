
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', function () {
        const content = this.querySelector('.content');
        const decorator = this.querySelector('.decorator');

        // Toggle klasy open na kontencie
        content.classList.toggle('open');
        // Toggle klasy open na całym elemencie
        this.classList.toggle('open');

    });
});

// document.querySelectorAll(".item").forEach(item => {
//     item.addEventListener("click", function () {
//         let decorator = this.querySelector(".decorator");
//
//         if (this.classList.toggle("open")) {
//             decorator.style.backgroundImage = "url('wave_thin_show.png')"; // Ustaw minus po otwarciu
//         } else {
//             decorator.style.backgroundImage = "url('wave_br_hide.png')"; // Ustaw plus po zamknięciu
//         }
//     });
// });