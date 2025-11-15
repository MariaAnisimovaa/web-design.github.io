class Collision {
    static checkPlayerPlatforms(player, platforms) {
        player.isOnGround = false;
        
        for (let platform of platforms) {
            // Проверка столкновения сверху (игрок падает на платформу)
            if (player.velocityY > 0 &&
                player.x < platform.x + platform.width &&
                player.x + player.width > platform.x &&
                player.y + player.height > platform.y &&
                player.y < platform.y) {
                
                player.y = platform.y - player.height;
                player.velocityY = 0;
                player.isOnGround = true;
            }
            
            // Проверка столкновения снизу (игрок ударяется головой)
            if (player.velocityY < 0 &&
                player.x < platform.x + platform.width &&
                player.x + player.width > platform.x &&
                player.y < platform.y + platform.height &&
                player.y + player.height > platform.y + platform.height) {
                
                player.y = platform.y + platform.height;
                player.velocityY = 0;
            }
            
            // Проверка боковых столкновений
            if (player.velocityX !== 0) {
                // Столкновение слева
                if (player.velocityX > 0 &&
                    player.x + player.width > platform.x &&
                    player.x < platform.x &&
                    player.y + player.height > platform.y + 5 && // Небольшой зазор снизу
                    player.y < platform.y + platform.height - 5) { // И сверху
                    
                    player.x = platform.x - player.width;
                }
                
                // Столкновение справа
                if (player.velocityX < 0 &&
                    player.x < platform.x + platform.width &&
                    player.x + player.width > platform.x + platform.width &&
                    player.y + player.height > platform.y + 5 &&
                    player.y < platform.y + platform.height - 5) {
                    
                    player.x = platform.x + platform.width;
                }
            }
        }
    }
    
    static checkPlayerCoins(player, coins, game) {
        for (let i = coins.length - 1; i >= 0; i--) {
            const coin = coins[i];
            
            if (!coin.collected) {
                // Упрощенная проверка столкновения прямоугольник-круг
                const playerCenterX = player.x + player.width / 2;
                const playerCenterY = player.y + player.height / 2;
                const coinCenterX = coin.x;
                const coinCenterY = coin.y;
                
                const dx = playerCenterX - coinCenterX;
                const dy = playerCenterY - coinCenterY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                // Используем радиус столкновения больше визуального радиуса
                const collisionRadius = player.width / 2 + coin.radius * 1.5;
                
                if (distance < collisionRadius) {
                    coin.collected = true;
                    coins.splice(i, 1);
                    game.addScore(100);
                    console.log('Монета собрана! Осталось:', coins.length); // Отладочное сообщение
                }
            }
        }
    }
    
    static checkPlayerEnemies(player, enemies, game) {
        for (let enemy of enemies) {
            // Упрощенная проверка столкновения
            if (player.x < enemy.x + enemy.width &&
                player.x + player.width > enemy.x &&
                player.y < enemy.y + enemy.height &&
                player.y + player.height > enemy.y) {
                
                // Игрок прыгает на врага
                if (player.velocityY > 0 && player.y + player.height < enemy.y + enemy.height / 2) {
                    const index = enemies.indexOf(enemy);
                    if (index > -1) {
                        enemies.splice(index, 1);
                    }
                    player.velocityY = -10; // Отскок
                    game.addScore(200);
                } else {
                    game.loseLife();
                }
            }
        }
    }
    
    static checkPlayerPortal(player, portal, game) {
        if (!portal) return;
        
        const playerCenterX = player.x + player.width / 2;
        const playerCenterY = player.y + player.height / 2;
        const dx = playerCenterX - portal.x;
        const dy = playerCenterY - portal.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 40 && game.coins.length === 0) { // Увеличили радиус портала
            game.completeLevel();
        }
    }
}