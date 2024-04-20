const inputGuess = document.querySelector('.guess-the-number__input')
const buttonGuess = document.querySelector('.guess-the-number__button')
const dandruffGuessSvg = document.querySelector('.guess-the-number__svg')
const answerGuess = document.querySelector('.guess-the-number__text')
const secretNumber = Math.floor(Math.random() *100 + 1)

// buttonGuess.addEventListener('click', function(event){
//     const guess = parseInt(inputGuess.value)
//     if (typeof guess === 'int'){
//         console.log('dfsgfdh')
//         if(guess === secretNumber){
//             answerGuess.textContent = `Ви вгадали число, це число ${secretNumber}`
//             inputGuess.value = ''
//         }
//         else{
//             if(guess > secretNumber){
//                 answerGuess.textContent = `Число ${guess} > за секретне число`
//                 inputGuess.value = ''
//             }
//             if(guess < secretNumber){
//                 answerGuess.textContent = `Число ${guess} < за секретне число`
//                 inputGuess.value = ''
//             }
//         }
//     }
//     else{
//         answerGuess.textContent = 'Будь-ласка введіть число'
//     }
//     answerGuess.style.opacity = '1'
// })

buttonGuess.addEventListener('click',function(event){
    const guess = parseInt(inputGuess.value)
    if(typeof guess !== 'string'){
        
        if(guess === secretNumber){
            inputGuess.value = '';
            answerGuess.textContent = `Вітаю, ви вгадали число!${secretNumber}`
            answerGuess.style.color = 'green'
        }
        else{
            inputGuess.value = '';
            answerGuess.textContent = (guess > secretNumber ? `Загадане число менше ніж ${guess}` : `Загадане число більше ніж ${guess}`)
            answerGuess.style.color = 'red' 
        }
    }
    else{
        inputGuess.value = '';
        answerGuess.textContent = `Введіть число`
        answerGuess.style.color = 'black'
    }
    setTimeout(()=>{
        answerGuess.style.opacity = '1'
    },100)

})