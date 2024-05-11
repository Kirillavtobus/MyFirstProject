let field = document.getElementById('field')
let ball = document.getElementById('ball')
let ballSpeedX = 0;
let ballSpeedY = 0;
field.addEventListener('mousedown', function(event){
    let fieldRect = field.getBoundingClientRect()
    let ballRect = ball.getBoundingClientRect()

    let mouseX = event.clientX - fieldRect.left
    let mouseY = event.clientY - fieldRect.top
    let ballX = ballRect.left - fieldRect.left + ballRect / 2
    let ballY = ballRect.top - fieldRect.top + ballRect / 2

    let deltaX = mouseX - ballX
    let deltaY = mouseY - ballY

    let angle = Math.atan2(deltaY, deltaX)
    let speed = 5;
})