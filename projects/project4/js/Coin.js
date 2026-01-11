class Coin {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 12;
        this.collected = false;
        this.animationOffset = Math.random() * Math.PI * 2;
        this.rotation = 0;
    }
    
    draw(ctx) {
        if (this.collected) return;
        
        const pulse = Math.sin(Date.now() * 0.01 + this.animationOffset) * 2;
        this.rotation += 0.05;
        
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        // Рисуем звезду
        ctx.fillStyle = '#ffeb3b';
        ctx.beginPath();
        
        // 5 лучей звезды
        for (let i = 0; i < 5; i++) {
            // Внешняя точка луча
            const outerAngle = (i * 2 * Math.PI) / 5;
            const outerX = Math.cos(outerAngle) * (this.radius + pulse);
            const outerY = Math.sin(outerAngle) * (this.radius + pulse);
            
            // Внутренняя точка между лучами
            const innerAngle = outerAngle + Math.PI / 5;
            const innerX = Math.cos(innerAngle) * (this.radius / 2 + pulse / 2);
            const innerY = Math.sin(innerAngle) * (this.radius / 2 + pulse / 2);
            
            if (i === 0) {
                ctx.moveTo(outerX, outerY);
            } else {
                ctx.lineTo(outerX, outerY);
            }
            ctx.lineTo(innerX, innerY);
        }
        
        ctx.closePath();
        ctx.fill();
        
        // Блики
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(-3, -3, 2, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
    }
}