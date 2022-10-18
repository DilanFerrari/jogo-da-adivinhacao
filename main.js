const input = document.querySelector('#input')
const form = document.querySelector('form')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#playAgain')
let randomNumber = Math.round(Math.random() * 10)
let counter = 1;

btnTry.addEventListener('click', tryClick)
btnReset.addEventListener('click', playAgain)
document.addEventListener('keydown', enterDown)

function tryClick(event) {
    event.preventDefault()
    if(input.value < 0 || input.value > 10 || input.value == "") {
        shakeForm()
    } else {
        input.style.border = "none"
        if(Number(input.value) == randomNumber) {
            toggleScreen()
            screen2.querySelector("h2").innerHTML = `Acertou em ${counter} tentativas`
        }
        input.value = ""
        counter++
    }
}
function playAgain() {
    toggleScreen()
    randomNumber = Math.round(Math.random() * 10)
    counter = 0;
}
function toggleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}
function enterDown(e) {
    if (e.key == 'Enter' && screen1.classList.contains('hide')) {
        playAgain()
    }
}
function shakeForm() {
    input.style.border = "2px solid red"
    form.animate([
        { transform: 'translateX(-10px)'},
        { transform: 'translateX(10px)'},
        { transform: 'translateX(-10px)'},
        { transform: 'translateX(1px)'},
        { transform: 'translateX(0px)'}
    ], {
        duration: 500
    }); 
    setTimeout(alertForm, 300)
}
function alertForm () {
    alert("O local deve ser prenchido com um número de 0 a 10!")
}