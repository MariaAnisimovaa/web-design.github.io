class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        
        this.currentLevel = 0;
        this.score = 0;
        this.lives = 3;
        this.gameState = 'menu';
        
        this.player = new Player(this);
        this.platforms = [];
        this.coins = [];
        this.enemies = [];
        this.portal = null;
        
        // Критически важный флаг
        this.gameLoopRunning = false;
        this.animationFrameId = null;
        
        // Создаем InputHandler ВНЕ конструктора
        this.createInputHandler();
        
        this.loadLevel(this.currentLevel);
    }
    
    createInputHandler() {
        // Удаляем старый InputHandler, если есть
        if (this.inputHandler && this.inputHandler.cleanup) {
            this.inputHandler.cleanup();
        }
        
        // Создаем новый
        this.inputHandler = new InputHandler(this);
    }
    
    loadLevel(levelIndex) {
        const level = LEVELS[levelIndex];
        if (!level) return;
        
        // Останавливаем текущий цикл
        this.stopGameLoop();
        
        // Загружаем объекты
        this.platforms = level.platforms.map(p => new Platform(p.x, p.y, p.width, p.height));
        this.coins = level.coins.map(c => new Coin(c.x, c.y));
        this.enemies = level.enemies.map(e => new Enemy(e.x, e.y, e.speed, e.range));
        this.portal = level.portal;
        
        // Сбрасываем игрока
        this.player.x = level.playerStart.x;
        this.player.y = level.playerStart.y;
        this.player.velocityY = 0;
        this.player.velocityX = 0;
        this.player.isOnGround = false;
        this.player.canJump = true;
        this.player.jumpCooldown = 0;
        
        console.log('Уровень загружен:', levelIndex + 1);
    }
    
    start() {
        if (this.gameLoopRunning) {
            console.warn('Игровой цикл уже запущен!');
            return;
        }
        
        this.gameState = 'playing';
        this.gameLoopRunning = true;
        this.gameLoop();
    }
    
    stopGameLoop() {
        this.gameLoopRunning = false;
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
    }
    
    gameLoop() {
        // Проверяем, нужно ли продолжать
        if (!this.gameLoopRunning || this.gameState !== 'playing') {
            this.gameLoopRunning = false;
            return;
        }
        
        this.update();
        this.render();
        
        this.animationFrameId = requestAnimationFrame(() => this.gameLoop());
    }
    
    update() {
        this.inputHandler.update();
        this.player.update();
        this.enemies.forEach(enemy => enemy.update());
        
        Collision.checkPlayerPlatforms(this.player, this.platforms);
        Collision.checkPlayerCoins(this.player, this.coins, this);
        Collision.checkPlayerEnemies(this.player, this.enemies, this);
        Collision.checkPlayerPortal(this.player, this.portal, this);
        
        if (this.player.y > this.height) {
            this.loseLife();
        }
    }
    
    render() {
        this.ctx.fillStyle = '#0f3460';
        this.ctx.fillRect(0, 0, this.width, this.height);
        
        this.drawBackground();
        
        this.platforms.forEach(platform => platform.draw(this.ctx));
        this.coins.forEach(coin => coin.draw(this.ctx));
        this.enemies.forEach(enemy => enemy.draw(this.ctx));
        
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
        this.stopGameLoop();
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
                this.start();
            }
        }, 2000);
    }
    
    winGame() {
        this.addScore(1000);
        this.stopGameLoop();
        document.getElementById('finalScore').textContent = this.score;
        document.getElementById('gameOver').style.display = 'flex';
        document.getElementById('gameOver').querySelector('h2').textContent = 'Поздравляем! Вы выиграли!';
    }
    
    gameOver() {
        this.stopGameLoop();
        this.gameState = 'gameOver';
        document.getElementById('finalScore').textContent = this.score;
        document.getElementById('gameOver').style.display = 'flex';
    }
    
    restartLevel() {
        console.log('Перезапуск уровня...');
        
        // 1. Останавливаем цикл
        this.stopGameLoop();
        
        // 2. Сбрасываем состояние клавиш (ВАЖНО!)
        if (this.inputHandler) {
            this.inputHandler.resetKeys();
        }
        
        // 3. Загружаем уровень заново
        this.loadLevel(this.currentLevel);
        
        // 4. Сбрасываем состояние
        this.gameState = 'playing';
        
        // 5. Ждем немного перед запуском
        setTimeout(() => {
            this.start();
        }, 100);
    }
    
    restart() {
        this.stopGameLoop();
        this.currentLevel = 0;
        this.score = 0;
        this.lives = 3;
        this.createInputHandler();
        this.loadLevel(this.currentLevel);
        this.gameState = 'playing';
    }
    
    // Метод для полной очистки
    cleanup() {
        this.stopGameLoop();
        if (this.inputHandler && this.inputHandler.cleanup) {
            this.inputHandler.cleanup();
        }
        this.gameState = 'menu';
    }
}