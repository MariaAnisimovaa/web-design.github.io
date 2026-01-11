class Enemy {
    constructor(x, y, speed, range) {
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 20;
        
        // Фиксированные значения скорости и диапазона для предотвращения ускорения
        this.speed = speed || 2;
        this.range = range || 100;
        
        this.startX = x;
        this.direction = 1;
        this.color = '#ff6b6b';
    }
    
    update() {
        // Простое патрулирование без изменения скорости
        this.x += this.speed * this.direction;
        
        // Разворот при достижении границ патрулирования
        if (this.x > this.startX + this.range || this.x < this.startX - this.range) {
            this.direction *= -1;
        }
    }
    
    draw(ctx) {
        // Тело врага
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        
        // "Глаза"
        ctx.fillStyle = 'white';
        ctx.fillRect(this.x + 5, this.y + 5, 8, 8);
        ctx.fillRect(this.x + this.width - 13, this.y + 5, 8, 8);
        
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x + 7, this.y + 7, 4, 4);
        ctx.fillRect(this.x + this.width - 11, this.y + 7, 4, 4);
    }
}