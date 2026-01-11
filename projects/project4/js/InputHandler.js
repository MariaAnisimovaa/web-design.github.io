class InputHandler {
    constructor(game) {
        this.game = game;
        this.keys = {};
        
        // Привязываем методы для удаления
        this.boundHandleKeyDown = this.handleKeyDown.bind(this);
        this.boundHandleKeyUp = this.handleKeyUp.bind(this);
        
        // Добавляем обработчики
        document.addEventListener('keydown', this.boundHandleKeyDown);
        document.addEventListener('keyup', this.boundHandleKeyUp);
    }
    
    handleKeyDown(event) {
        // Прыжок только при первом нажатии
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
        if (this.keys['ArrowLeft'] || this.keys['KeyA']) {
            this.game.player.moveLeft();
        }
        
        if (this.keys['ArrowRight'] || this.keys['KeyD']) {
            this.game.player.moveRight();
        }
    }
    
    // НОВЫЙ МЕТОД - сброс состояния клавиш
    resetKeys() {
        this.keys = {};
    }
    
    // Очистка обработчиков
    cleanup() {
        document.removeEventListener('keydown', this.boundHandleKeyDown);
        document.removeEventListener('keyup', this.boundHandleKeyUp);
    }
}