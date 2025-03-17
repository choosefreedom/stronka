
document.querySelectorAll('.item').forEach(item => {
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