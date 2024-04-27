const choises = ['rock','paper','scissors']
let computerWins = 0;
let userWins = 0
document.getElementById('rock-button').addEventListener('click',function(){
    playGame('rock')
})

document.getElementById('paper-button').addEventListener('click',function(){
    playGame('paper')
})

document.getElementById('scissors-button').addEventListener('click',function(){
    playGame('scissors')
})
document.getElementById('computer-variant').addEventListener('click',function(){
    const computerChoise = choises[Math.floor(Math.random()* choises.length)]
    console.log('userChoise',computerChoise)
    playGameWithComputer(computerChoise)
})

function playGame(userChoise){
    document.getElementById('winOrLose').innerHTML = ''
}
function playGameWithComputer(computerChoise){
    const userChoise = choises[Math.floor(Math.random()* choises.length)]
    console.log('userChoise',userChoise)
    let result = ''
    if(
        (userChoise === 'rock' && computerChoise === 'scissors') || 
        (userChoise === 'scissors' && computerChoise === 'paper') ||
        (userChoise === 'paper' && computerChoise === 'rock')
    ){
        userWins ++;
        result = 'Ви виграли!'
        document.getElementById('winOrLose').style.color = 'green'
    }
    else if(userChoise === computerChoise)
    {
        result = 'Нічия :('
        document.getElementById('winOrLose').style.color = 'black'
    } else{
        computerWins ++
        result = "Комп'ютер виграв"
        document.getElementById('winOrLose').style.color = 'red'
    }
    document.getElementById('winOrLose').innerHTML = result
    document.getElementById('comp-score-text').innerHTML = computerWins
    document.getElementById('user-score-text').innerHTML = userWins
}