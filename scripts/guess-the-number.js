const inputGuess = document.querySelector('.guess-the-number__input')
const buttonGuess = document.querySelector('.guess-the-number__button')
const dandruffGuessSvg = document.querySelector('.guess-the-number__svg')
const answerGuess = document.querySelector('.guess-the-number__text')
const secretNumber = Math.floor(Math.random() * 100 + 1)
buttonGuess.addEventListener('click',function(event){
    
    if(!isNaN(inputGuess.value)){
        const guess = parseInt(inputGuess.value)
        if(guess === secretNumber){
            console.log(typeof guess)
            inputGuess.value = '';
            answerGuess.textContent = `Вітаю, ви вгадали число!${secretNumber}`
            answerGuess.style.color = 'green'
        } else{
            inputGuess.value = '';
            answerGuess.textContent = (guess > secretNumber) ? `Загадне число менше, ніж ${guess} `: `Загадане число більше ніж ${guess}`
            answerGuess.style.color = 'red'
        }
    } else{
        inputGuess.value = '';
        answerGuess.textContent = "Введіть ваше число"
        answerGuess.style.color = 'black'
    }
    setTimeout(()=>{
        answerGuess.style.opacity = 1
    },100)
})