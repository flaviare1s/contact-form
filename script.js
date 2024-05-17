let messageArea = document.querySelector('#message')

function adjustTextareaRows() {
    if (window.innerWidth <= 768) {
        messageArea.rows = 12
    } else if (window.innerWidth > 768 && window.innerWidth <= 1280) {
        messageArea.rows = 8
    } else {
        messageArea.rows = 4
    }
}

window.onload = adjustTextareaRows
window.onresize = adjustTextareaRows