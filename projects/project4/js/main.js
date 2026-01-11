window.addEventListener('load', function() {
    const canvas = document.getElementById('gameCanvas');
    let currentGame = null;
    let isGameRunning = false;

    // Создаем новую игру с правильной очисткой
    function createNewGame() {
        // Если есть старая игра - останавливаем её
        if (currentGame) {
            currentGame.stopGameLoop();
            // Очищаем обработчики событий
            if (currentGame.inputHandler && currentGame.inputHandler.cleanup) {
                currentGame.inputHandler.cleanup();
            }
        }
        
        // Создаем новую игру
        currentGame = new Game(canvas);
        return currentGame;
    }

    // Начать игру
    document.getElementById('startButton').addEventListener('click', () => {
        document.getElementById('menu').style.display = 'none';
        document.getElementById('restartButton').style.display = 'block';
        
        if (!currentGame || currentGame.gameState === 'gameOver' || currentGame.gameState === 'menu') {
            createNewGame();
        }
        currentGame.start();
    });

    // Перезапустить уровень
    document.getElementById('restartButton').addEventListener('click', () => {
        if (currentGame) {
            currentGame.restartLevel();
        }
    });

    // Перезапустить всю игру
    document.getElementById('restartGameButton').addEventListener('click', () => {
        document.getElementById('gameOver').style.display = 'none';
        createNewGame();
        currentGame.start();
    });

    // Глобальный обработчик клавиши R
    document.addEventListener('keydown', function(event) {
        if (event.code === 'KeyR' && currentGame && currentGame.gameState === 'playing') {
            currentGame.restartLevel();
            event.preventDefault(); // Предотвращаем стандартное поведение
        }
    });
});