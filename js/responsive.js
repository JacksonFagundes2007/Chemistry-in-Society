// page
const body = document.querySelector('body')
const content = document.querySelector('#content')

// table
const table = document.querySelector('#table')

// box
const box = document.querySelector('#box')

window.addEventListener('load', () => {
    let width = window.innerWidth

    if (width < 1450) {
        content.style.flexDirection = "column"
        box.style.marginLeft = "0"
        box.style.width = "100vw"
        body.style.overflowY = "scroll"
        table.style.marginBottom = "100px"
    }
})