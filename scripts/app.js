const buttonFullScreen = document.querySelector('.header__btn')

document.addEventListener('mousemove', (e) => {
    Object.assign(document.documentElement, {
        style: `
            --move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
            --move-y: ${(e.clientY - window.innerHeight / 2) * -.005}deg;
        `
    })
})

buttonFullScreen.addEventListener('click', () => {
    const bodyElement = document.body
    let req = bodyElement.requestFullscreen()
        if (req) {
            req.call(bodyElement)
        }
})