const buttonFullScreen = document.querySelector('.header__btn')
let playing = false
let isFullscreen = false
let player = new Audio()
let songPlayer = new Audio()
player.src = '../scripts/audio/rain.mp3'
player.volume = 0.3

songPlayer.src = '../scripts/audio/songs/pastel ghost - silhouette (slowed + muffled).mp3'



document.addEventListener('mousemove', (e) => {
    Object.assign(document.documentElement, {
        style: `
            --move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
            --move-y: ${(e.clientY - window.innerHeight / 2) * -.005}deg;
        `
    })
    let rainAudioContext = new AudioContext()
    rainAudioContext.decayTime = 0
})

player.preload = "auto"
songPlayer.preload = "auto"
player.loop = true


// player.addEventListener('ended', () => {
//     playing = false
// })

buttonFullScreen.addEventListener('click', () => {
    const bodyElement = document.body

    if (isFullscreen && document.fullscreenElement) {
        document.exitFullscreen().then(r => console.log('Fullscreen closed'))
        buttonFullScreen.textContent = 'Погрузиться в атмосферу'
    } else {
        bodyElement.requestFullscreen().then(r => console.log('Now we are fullscreen'))
        buttonFullScreen.textContent = 'Вернуться в реальный мир'
    }
    isFullscreen = !isFullscreen
    if (playing) {
        player.pause()
        songPlayer.pause()
    } else {
        player.play().then(r => console.log('play'))
        songPlayer.play().then(r => console.log('play'))
    }
    playing = !playing
})