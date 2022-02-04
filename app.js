function slidesPlugin(activeSlide = 1) {
    const slides = document.querySelectorAll('.slide')
    const slideWrapper = document.querySelector('.container')
    slides[activeSlide].classList.add('active')

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
}
slidesPlugin()
