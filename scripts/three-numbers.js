const inputOne = document.getElementById('one-input')
const inputTwo = document.getElementById('two-input')
const inputThree = document.getElementById('three-input')
const highestNumberElement = document.getElementById('time-result')

function findHighestNumber(){
    const num1 = parseFloat(inputOne.value)
    const num2 = parseFloat(inputTwo.value)
    const num3 = parseFloat(inputThree.value)
    if(!Number.isNaN(num1) &&  !Number.isNaN(num2) && !Number.isNaN(num3)){
        const maxNumber = Math.max(num1,num2,num3)
        highestNumberElement.textContent = `Найбільше число, яке ви ввели - ${maxNumber}`
    }else{
        highestNumberElement.textContent = `Найбільше число, яке ви ввели - не вказано`

    }
}
inputOne.addEventListener('input',findHighestNumber)
inputTwo.addEventListener('input',findHighestNumber)
inputThree.addEventListener('input',findHighestNumber)