const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const scoreElement = document.getElementById("score");

// Set dimensions
canvas.width = 800;
canvas.height = 500;

// Game State
let score = 0;
let gameActive = true;

// Player Object
const player = {
    x: 50,
    y: canvas.height / 2,
    size: 30,
    speed: 5,
    color: "#0095DD"
};

// Enemies Array
const enemies = [];
const enemySpeed = 4;

// Control Handling
const keys = {};
window.addEventListener("keydown", (e) => keys[e.code] = true);
window.addEventListener("keyup", (e) => keys[e.code] = false);

function spawnEnemy() {
    if (!gameActive) return;
    const size = Math.random() * (40 - 20) + 20;
    enemies.push({
        x: canvas.width,
        y: Math.random() * (canvas.height - size),
        size: size,
        color: "#FF4136"
    });
    // Schedule next spawn
    setTimeout(spawnEnemy, 1000 - Math.min(score * 10, 500));
}

function update() {
    if (!gameActive) return;

    // Move Player
    if (keys["ArrowUp"] && player.y > 0) player.y -= player.speed;
    if (keys["ArrowDown"] && player.y < canvas.height - player.size) player.y += player.speed;
    if (keys["ArrowLeft"] && player.x > 0) player.x -= player.speed;
    if (keys["ArrowRight"] && player.x < canvas.width - player.size) player.x += player.speed;

    // Move Enemies
    for (let i = enemies.length - 1; i >= 0; i--) {
        enemies[i].x -= enemySpeed;

        // Collision Detection
        if (
            player.x < enemies[i].x + enemies[i].size &&
            player.x + player.size > enemies[i].x &&
            player.y < enemies[i].y + enemies[i].size &&
            player.y + player.size > enemies[i].y
        ) {
            gameActive = false;
            alert(`Game Over! Score: ${score}`);
            location.reload(); // Simple restart
        }

        // Remove off-screen enemies and increase score
        if (enemies[i].x + enemies[i].size < 0) {
            enemies.splice(i, 1);
            score++;
            scoreElement.innerText = score;
        }
    }
}

function draw() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Player
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.size, player.size);

    // Draw Enemies
    for (const enemy of enemies) {
        ctx.fillStyle = enemy.color;
        ctx.fillRect(enemy.x, enemy.y, enemy.size, enemy.size);
    }

    // Call next frame
    requestAnimationFrame(gameLoop);
}

function gameLoop() {
    update();
    draw();
}

// Start Game
spawnEnemy();
gameLoop();