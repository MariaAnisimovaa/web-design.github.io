window.addEventListener('load', function() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    
    const game = new Game(canvas);
    
    document.getElementById('startButton').addEventListener('click', () => {
        document.getElementById('menu').style.display = 'none';
        game.start();
    });
    
    document.getElementById('restartButton').addEventListener('click', () => {
        game.restartLevel();
    });
    
    document.getElementById('restartGameButton').addEventListener('click', () => {
        document.getElementById('gameOver').style.display = 'none';
        game.restart();
    });
});