class Player {
    constructor(game) {
        this.game = game;
        this.width = 30;
        this.height = 50;
        this.x = 50;
        this.y = 200;
        this.velocityY = 0;
        this.velocityX = 0;
        this.speed = 5;
        this.jumpForce = -15;
        this.gravity = 0.8;
        this.isOnGround = false;
        this.color = '#e94560';
        
        // Добавляем свойства для лучшего контроля прыжка
        this.canJump = true;
        this.jumpCooldown = 0;
    }
    
    update() {
        // Обновление кулдауна прыжка
        if (this.jumpCooldown > 0) {
            this.jumpCooldown--;
        }
        
        // Применение гравитации
        this.velocityY += this.gravity;
        
        // Обновление позиции
        this.x += this.velocityX;
        this.y += this.velocityY;
        
        // Ограничения по границам экрана
        if (this.x < 0) this.x = 0;
        if (this.x + this.width > this.game.width) this.x = this.game.width - this.width;
        
        // Сброс горизонтальной скорости (будет установлена в InputHandler)
        this.velocityX = 0;
        
        // Обновление состояния прыжка
        if (this.isOnGround) {
            this.canJump = true;
        }
    }
    
    draw(ctx) {
        // Тело игрока
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        
        // Шлем космонавта
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(this.x + this.width / 2, this.y + 15, 12, 0, Math.PI * 2);
        ctx.fill();
        
        // Визуализация стекла шлема
        ctx.fillStyle = 'rgba(0, 180, 219, 0.3)';
        ctx.beginPath();
        ctx.arc(this.x + this.width / 2, this.y + 15, 10, 0, Math.PI * 2);
        ctx.fill();
        
        // Отладочная информация (можно удалить после тестирования)
        if (this.isOnGround) {
            ctx.fillStyle = 'green';
            ctx.fillRect(this.x, this.y - 10, 5, 5);
        }
    }
    
    moveLeft() {
        this.velocityX = -this.speed;
    }
    
    moveRight() {
        this.velocityX = this.speed;
    }
    
    jump() {
        if (this.isOnGround && this.canJump && this.jumpCooldown === 0) {
            this.velocityY = this.jumpForce;
            this.isOnGround = false;
            this.canJump = false;
            this.jumpCooldown = 10; // Небольшая задержка между прыжками
        }
    }
    
    // Добавляем метод для полного сброса состояния
    reset() {
        this.velocityY = 0;
        this.velocityX = 0;
        this.isOnGround = false;
        this.canJump = true;
        this.jumpCooldown = 0;
    }
}