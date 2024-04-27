document.getElementById('equals').addEventListener('click', function(){
    let firstNumber = parseFloat(document.getElementById('first-input').value) 
    let secondNumber = parseFloat(document.getElementById('second-input').value) 
    let operation = document.querySelector('.button__list .active').textContent.trim()
    let result;
        switch(operation){
            case '+': 
                result = firstNumber + secondNumber;
            break;
            case '-':
                result = firstNumber - secondNumber;
            break;
            case '*':
                result = firstNumber * secondNumber;
            break;
            case '/':
                result = firstNumber / secondNumber;
            break;
            default:
                result = 'Invalid operation';
        }
        document.getElementById('result-p').textContent = result.toFixed(5)
})
let buttons = document.querySelectorAll('.button__calculator')
console.log(buttons)
buttons.forEach(function(button){
    button.addEventListener('click',function(){
        buttons.forEach(function(btn){
            console.log('btn:',btn)
            btn.classList.remove('active')
        })
       this.classList.add('active')
    })
})