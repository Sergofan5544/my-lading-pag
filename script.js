// Плавная прокрутка между секциями
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }
}

// Меняем фон шапки при прокрутке
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = '#1B2631';
    } else {
        header.style.backgroundColor = '#2C3A47';
    }
});