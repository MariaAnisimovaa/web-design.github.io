class InputHandler {
    constructor(game) {
        this.game = game;
        this.keys = {};
        
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        document.addEventListener('keydown', (event) => {
            this.handleKeyDown(event);
        });
        
        document.addEventListener('keyup', (event) => {
            this.handleKeyUp(event);
        });
    }
    
    handleKeyDown(event) {
        // Предотвращаем повторное срабатывание прыжка при зажатии
        if ((event.code === 'Space' || event.code === 'KeyW' || event.code === 'ArrowUp') && 
            !this.keys[event.code]) {
            this.game.player.jump();
        }
        
        this.keys[event.code] = true;
    }
    
    handleKeyUp(event) {
        this.keys[event.code] = false;
    }
    
    update() {
        // Обработка движения с проверкой состояния клавиш
        if (this.keys['ArrowLeft'] || this.keys['KeyA']) {
            this.game.player.moveLeft();
        }
        
        if (this.keys['ArrowRight'] || this.keys['KeyD']) {
            this.game.player.moveRight();
        }
    }
}