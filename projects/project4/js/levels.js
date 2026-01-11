const LEVELS = [
    {
        playerStart: { x: 50, y: 200 },
        platforms: [
            { x: 0, y: 450, width: 200, height: 20 },
            { x: 300, y: 450, width: 200, height: 20 },
            { x: 600, y: 450, width: 200, height: 20 },
            { x: 150, y: 350, width: 100, height: 20 },
            { x: 400, y: 300, width: 100, height: 20 },
            { x: 650, y: 250, width: 100, height: 20 }
        ],
        coins: [
            { x: 100, y: 400 },
            { x: 350, y: 400 },
            { x: 450, y: 250 },
            { x: 700, y: 200 }
        ],
        enemies: [
            { x: 250, y: 430, speed: 2, range: 100 },
            { x: 550, y: 430, speed: 1.5, range: 80 }
        ],
        portal: { x: 750, y: 200 }
    },
    {
        playerStart: { x: 50, y: 200 },
        platforms: [
            { x: 0, y: 450, width: 150, height: 20 },
            { x: 200, y: 400, width: 100, height: 20 },
            { x: 350, y: 350, width: 100, height: 20 },
            { x: 500, y: 300, width: 100, height: 20 },
            { x: 650, y: 250, width: 150, height: 20 },
            { x: 500, y: 200, width: 100, height: 20 },
            { x: 300, y: 200, width: 100, height: 20 }
        ],
        coins: [
            { x: 250, y: 350 },
            { x: 400, y: 300 },
            { x: 550, y: 250 },
            { x: 700, y: 200 },
            { x: 350, y: 150 }
        ],
        enemies: [
            { x: 220, y: 380, speed: 2, range: 60 },
            { x: 520, y: 280, speed: 1.5, range: 50 },
            { x: 320, y: 180, speed: 1, range: 40 }
        ],
        portal: { x: 350, y: 150 }
    }
];