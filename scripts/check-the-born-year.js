const chekYearInput = document.querySelector('.input__leap')
let yesNoLeap = document.getElementById('yes-no-leap')
document.querySelector('.input-but__leap').addEventListener('click',function(){
    let userInput = document.getElementById('leap-input').value
    if (userInput){
          if (userInput % 4 === 0){
            chekYearInput.value = ''
            yesNoLeap.textContent = 'Ви народились у високосний рік'
            yesNoLeap.style.color = 'green'
          }
          else{
            chekYearInput.value = ''
            yesNoLeap.textContent = 'Ви не народились у високосний рік'
            yesNoLeap.style.color = 'red'
          }
          yesNoLeap.style.transition = 'all 500ms'
    }
    else{
        chekYearInput.value = ''
            yesNoLeap.textContent = 'Введіть рік народження'
            yesNoLeap.style.color = 'black'
    }
    yesNoLeap.style.opacity = '1'
}) 