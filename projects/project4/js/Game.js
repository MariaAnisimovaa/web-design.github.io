class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        
        this.currentLevel = 0;
        this.score = 0;
        this.lives = 3;
        this.gameState = 'menu'; // menu, playing, gameOver, levelComplete
        
        this.player = new Player(this);
        this.inputHandler = new InputHandler(this);
        this.platforms = [];
        this.coins = [];
        this.enemies = [];
        this.portal = null;
        
        this.loadLevel(this.currentLevel);
        this.setupEventListeners();
    }
    
    loadLevel(levelIndex) {
        const level = LEVELS[levelIndex];
        if (!level) return;
        
        // Полная перезагрузка всех объектов
        this.platforms = level.platforms.map(p => new Platform(p.x, p.y, p.width, p.height));
        this.coins = level.coins.map(c => new Coin(c.x, c.y));
        
        // Важно: создаем новых врагов каждый раз, чтобы сбросить их состояние
        this.enemies = level.enemies.map(e => new Enemy(e.x, e.y, e.speed, e.range));
        
        this.portal = level.portal;
        
        // Сброс позиции игрока
        this.player.x = level.playerStart.x;
        this.player.y = level.playerStart.y;
        this.player.velocityY = 0;
        this.player.velocityX = 0;
        this.player.isOnGround = false;
        this.player.canJump = true;
        this.player.jumpCooldown = 0;
        
        console.log('Уровень загружен. Монет:', this.coins.length, 'Врагов:', this.enemies.length);
    }
    
    setupEventListeners() {
        document.addEventListener('keydown', (event) => {
            this.inputHandler.handleKeyDown(event);
        });
        
        document.addEventListener('keyup', (event) => {
            this.inputHandler.handleKeyUp(event);
        });
    }
    
    start() {
        this.gameState = 'playing';
        this.gameLoop();
    }
    
    gameLoop() {
        if (this.gameState !== 'playing') return;
        
        this.update();
        this.render();
        
        requestAnimationFrame(() => this.gameLoop());
    }
    
    update() {
        // Обновление обработчика ввода (движение)
        this.inputHandler.update();
        
        // Обновление игрока
        this.player.update();
        
        // Обновление врагов
        this.enemies.forEach(enemy => enemy.update());
        
        // Проверка столкновений
        Collision.checkPlayerPlatforms(this.player, this.platforms);
        Collision.checkPlayerCoins(this.player, this.coins, this);
        Collision.checkPlayerEnemies(this.player, this.enemies, this);
        Collision.checkPlayerPortal(this.player, this.portal, this);
        
        // Проверка падения за экран
        if (this.player.y > this.height) {
            this.loseLife();
        }
    }
    
    render() {
        // Очистка canvas
        this.ctx.fillStyle = '#0f3460';
        this.ctx.fillRect(0, 0, this.width, this.height);
        
        // Отрисовка фона (звезды)
        this.drawBackground();
        
        // Отрисовка игровых объектов
        this.platforms.forEach(platform => platform.draw(this.ctx));
        this.coins.forEach(coin => coin.draw(this.ctx));
        this.enemies.forEach(enemy => enemy.draw(this.ctx));
        
        // Отрисовка портала
        if (this.portal) {
            this.drawPortal();
        }
        
        this.player.draw(this.ctx);
        this.updateUI();
    }
    
    drawBackground() {
        this.ctx.fillStyle = 'white';
        for (let i = 0; i < 50; i++) {
            const x = Math.sin(i * 0.5) * 100 + (Date.now() * 0.0001 * i) % this.width;
            const y = (i * 15) % this.height;
            const size = Math.random() * 2 + 1;
            this.ctx.fillRect(x, y, size, size);
        }
    }
    
    drawPortal() {
        const pulse = Math.sin(Date.now() * 0.005) * 5 + 10;
        this.ctx.fillStyle = `rgba(0, 180, 219, ${0.5 + Math.sin(Date.now() * 0.01) * 0.3})`;
        this.ctx.beginPath();
        this.ctx.arc(this.portal.x, this.portal.y, 20 + pulse, 0, Math.PI * 2);
        this.ctx.fill();
        
        this.ctx.strokeStyle = '#00b4db';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.arc(this.portal.x, this.portal.y, 25 + pulse, 0, Math.PI * 2);
        this.ctx.stroke();
    }
    
    updateUI() {
        document.getElementById('score').textContent = `Очки: ${this.score}`;
        document.getElementById('lives').textContent = `Жизни: ${this.lives}`;
        document.getElementById('level').textContent = `Уровень: ${this.currentLevel + 1}`;
    }
    
    addScore(points) {
        this.score += points;
    }
    
    loseLife() {
        this.lives--;
        if (this.lives <= 0) {
            this.gameOver();
        } else {
            this.restartLevel();
        }
    }
    
    completeLevel() {
        this.gameState = 'levelComplete';
        document.getElementById('levelComplete').style.display = 'flex';
        
        setTimeout(() => {
            this.currentLevel++;
            if (this.currentLevel >= LEVELS.length) {
                this.winGame();
            } else {
                document.getElementById('levelComplete').style.display = 'none';
                this.loadLevel(this.currentLevel);
                this.gameState = 'playing';
                this.gameLoop();
            }
        }, 2000);
    }
    
    winGame() {
        this.addScore(1000); // Бонус за прохождение
        document.getElementById('finalScore').textContent = this.score;
        document.getElementById('gameOver').style.display = 'flex';
        document.getElementById('gameOver').querySelector('h2').textContent = 'Поздравляем! Вы выиграли!';
    }
    
    gameOver() {
        this.gameState = 'gameOver';
        document.getElementById('finalScore').textContent = this.score;
        document.getElementById('gameOver').style.display = 'flex';
    }
    
    restartLevel() {
        this.loadLevel(this.currentLevel);
        this.gameState = 'playing';
        this.gameLoop();
    }
    
    restart() {
        this.currentLevel = 0;
        this.score = 0;
        this.lives = 3;
        this.loadLevel(this.currentLevel);
        this.start();
    }
}