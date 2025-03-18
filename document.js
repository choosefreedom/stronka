
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', function () {
        const content = this.querySelector('.content');
        const decorImg = this.querySelector('.decorator_img');
        const decorHide = this.querySelector('.decor_hide');


        content.classList.toggle('open');


        this.classList.toggle('open');


        if  (decorImg.style.display === 'none') {
            decorImg.style.display = 'block';
            decorHide.style.display = 'none';
        } else {
            decorImg.style.display = 'none';
            decorHide.style.display = 'block';
        }
    });
});

document.querySelectorAll('.item_col').forEach(item => {
    item.addEventListener('click', function () {
        const content = this.querySelector('.content');
        const decorImg = this.querySelector('.decorator_img');
        const decorHide = this.querySelector('.decor_hide');


        content.classList.toggle('open');


        this.classList.toggle('open');


        if  (decorImg.style.display === 'none') {
            console.log("dupa")
            decorImg.style.display = 'block';
            decorHide.style.display = 'none';
        } else {
            decorImg.style.display = 'none';
            decorHide.style.display = 'block';
        }
    });
});

function onSizeChange() {
    const element = document.getElementById('change2');
    const element2 = document.getElementById('change1');

    const isSmallScreen = window.matchMedia("(max-width: 1120px)").matches;

    // setElementState(element, isSmallScreen);
    // setElementState(element2, !isSmallScreen);

    if (window.matchMedia("(max-width: 1120px)").matches) {
       setElementState(element,true);
       setElementState(element2, false);

    } else {
        setElementState(element,false);
        setElementState(element2,true);
    }
}
function setElementState(element,active = false) {
    if (active) {
        element.classList.add('item_col');
        element.classList.remove('item');
    }
    else {
        element.classList.add('item');
        element.classList.remove('item_col');
    }
}

// Nasłuchujemy zmian rozmiaru ekranu
window.addEventListener('resize', onSizeChange);
// Wywołujemy funkcję przy załadowaniu strony
onSizeChange();


