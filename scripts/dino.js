const canvas = document.getElementById('canvass');
const ctx = canvas.getContext('2d');
const gravity = 0.5;
const jumpStrength = 11;
let isJumping = false;
let dinoY = canvas.height - 40;
let dinoYSpeed = 0;
let obstacles = [];
const dinoImage = document.querySelector(".dino-image")
const cactusImage = document.querySelector(".cactus-image")
let gameover = false;
let gameStarted = false;
let score = 0;

let obstacleSpawnInterval = 100;
let obstacleSpawnCounter = 0;
/*
canvas: Элемент canvas, на котором будет отображаться игра.
ctx: Контекст рисования на canvas.
gravity: Значение гравитации, влияющее на падение динозавра.
jumpStrength: Сила прыжка динозавра.
isJumping: Флаг, указывающий, выполняется ли в данный момент прыжок.
dinoY: Начальная позиция динозавра по оси Y.
dinoYSpeed: Скорость движения динозавра по оси Y.
obstacles: Массив препятствий.
dinoImage, cactusImage: Элементы изображений для динозавра и кактусов.
gameover: Флаг, указывающий на окончание игры.
gameStarted: Флаг, указывающий на начало игры.
score: Очки игрока.
obstacleSpawnInterval: Интервал появления препятствий.
obstacleSpawnCounter: Счетчик для определения времени появления препятствий.
*/

function jump() {
    if (!isJumping && gameStarted) {
        isJumping = true;
        dinoYSpeed = -jumpStrength;
    }
}

document.addEventListener('keydown', event => {
    if (event.code === 'KeyW' && !gameover) {
        if (!gameStarted) {
            gameStarted = true;
            draw();
        }
        jump();
    }
});

function retry() {
    resetGame();
    document.getElementById('retryButton').style.display = 'none';
    draw();
}

function resetGame() {
    gameover = false;
    obstacles = [];
    dinoY = canvas.height - 40;
    dinoYSpeed = 0;
    isJumping = false;
    obstacleSpawnCounter = 0;
}

function drawDino() {
    ctx.drawImage(dinoImage, 50, dinoY, 30, 30);
}

function drawObstacles() {
    obstacles.forEach(obstacle => {
        ctx.drawImage(cactusImage, obstacle.x, canvas.height - obstacle.height, obstacle.width, obstacle.height);
    });
}

function updateDino() {
    dinoY += dinoYSpeed;
    dinoYSpeed += gravity;

    if (dinoY >= canvas.height - 40) {
        dinoY = canvas.height - 40;
        dinoYSpeed = 0;
        isJumping = false;
    }
}

function updateObstacles() {
    obstacles.forEach(obstacle => {
        obstacle.x -= 5;
    });

    if (obstacleSpawnCounter <= 0) {
        if (Math.random() < 0.02) {
            let numObstacles = Math.floor(Math.random() * 3) + 1;
            let lastObstacleX = canvas.width; 
            for (let i = 0; i < numObstacles; i++) {
                let minSpacing = 5;
                let maxSpacing = 20;
                let spacing = minSpacing + Math.random() * (maxSpacing - minSpacing);
                obstacles.push({
                    x: lastObstacleX + spacing, 
                    width: 20 + Math.random() * 10,
                    height: 20 + Math.random() * 70
                });
                lastObstacleX = obstacles[obstacles.length - 1].x + obstacles[obstacles.length - 1].width;
            }
            obstacleSpawnCounter = obstacleSpawnInterval; 
        }
    } else {
        obstacleSpawnCounter--;
    }

    obstacles = obstacles.filter(obstacle => obstacle.x > -obstacle.width);

    
    score += 1;
}

function collisionDetection() {
    obstacles.forEach(obstacle => {
        if (dinoY + 30 >= canvas.height - obstacle.height && dinoY <= canvas.height && 50 + 30 >= obstacle.x && 50 <= obstacle.x + obstacle.width) {
            gameover = true;
            document.getElementById('retryButton').style.display = 'block';
        }
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDino();
    drawObstacles();
    updateDino();
    updateObstacles();
    collisionDetection();
    ctx.fillStyle = "#000000";
    ctx.font = "16px Arial";
    ctx.fillText("Score: " + score, 10, 20);
    if (!gameover) {
        requestAnimationFrame(draw);
    }
    obstacleSpawnCounter--; 
}
document.getElementById('retryButton').onclick = retry;