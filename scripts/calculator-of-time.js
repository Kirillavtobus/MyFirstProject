function calculateTime(){
    let inputValue = parseInt(document.getElementById('start-timer').value)
    let days = Math.floor(inputValue / 86400);
    let hours = Math.floor((inputValue % 86400) / 3600)
    let minutes = Math.floor((inputValue % 3600) / 60)
    let seconds = inputValue % 60
    let timeOut = document.querySelector('.time-calc__time')
    timeOut.textContent = `${days} дні ${hours}:${minutes}:${seconds}`
    let calculateTimeInput = document.querySelector('.input-time__calculator').value = ''
}

document.querySelector('.time-button__calculator').addEventListener('click',calculateTime)