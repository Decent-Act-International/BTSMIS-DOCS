const accordionButtons = document.getElementsByClassName('accordion-btn');

for (let i = 0; i < accordionButtons.length; i++) {
    accordionButtons[i].addEventListener('click', function() {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
}
