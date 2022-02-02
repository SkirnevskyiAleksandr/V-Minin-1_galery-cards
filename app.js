const slides = document.querySelectorAll('.slide')
const slideWrapper = document.querySelector('.container')

for (const item of slides) {
    item.addEventListener('click', () => {
        removeActive()
        item.classList.add('active')
    })
}
function removeActive() {
    slides.forEach((item) => {
        item.classList.remove('active')
    })
}