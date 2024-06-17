const formJs = document.getElementById('form')
const button3 = document.getElementById('submit3')
const root = document.getElementById('root')

button3.addEventListener('click', () => {
    const number1 = Number(document.getElementById('number1').value)
    const number2 = Number(document.getElementById('number2').value)
    const number3 = Number(document.getElementById('number3').value)

    const clave = `${number1}${number2}${number3}`

    if (clave == 911){
        root.innerHTML = `<p>password 1 correcto</p>`
    } else if (clave == 714) {
        root.innerHTML = `<p>password 2 es correcto</p>`
    }else {
        root.innerHTML = `<p>password incorrecto</p>`
    }
})
