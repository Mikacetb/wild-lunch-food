//// Moving plate 
let scroll = 0
let barWidth = 0

const heightScreen = window.innerHeight
const heightTotal = document.body.offsetHeight

const height = heightTotal - heightScreen
const width = document.body.offsetWidth

const x = width / 100
const y = height / 100
const ratio = x / y

document.addEventListener("scroll", function () {
    scroll = window.scrollY;
    barWidth = scroll * ratio
    document.querySelector('.bar').style.width = barWidth + "px";
    if (barWidth <= 0) {
        document.querySelector('.fa-hamburger').style.marginLeft = barWidth + "px";
    } else if (barWidth >= width - 25) {
        document.querySelector('.fa-hamburger').style.marginLeft = barWidth - 35 + "px";
    } else {
        document.querySelector('.fa-hamburger').style.marginLeft = barWidth - 15 + "px";
    }
    console.log(barWidth, width)
})