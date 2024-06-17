const formJs = document.getElementById('form')
const button2 = document.getElementById('submit')
const root = document.getElementById('root')

button2.addEventListener('click', () => {
    const cant1 = Number(document.getElementById('cant1').value)
    const cant2 = Number(document.getElementById('cant2').value)
    const cant3 = Number(document.getElementById('cant3').value)

    const suma = cant1 + cant2 + cant3;
    
    if (suma >= 10) {
        root.innerHTML = '<p>Llevas demasiados stickers</p>'
    } else {
        root.innerHTML = `<p>Llevas ${suma} stickers</p>`
    }
})
