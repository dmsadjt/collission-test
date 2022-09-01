import { Rectangle } from "./rectangle.js";

const canvas = document.getElementById('tester');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 500;

class Game {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.rect1 = new Rectangle(0, 0, 1, this, this.rect2);
        this.rect2 = new Rectangle(this.width - 100, this.height - 100, 2, this, this.rect1);
    }

    update() {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        this.rect1.update();
        this.rect2.update();
    }

    render() {
        this.rect1.render(ctx);
        this.rect2.render(ctx);

    }
}

const game = new Game(CANVAS_WIDTH, CANVAS_HEIGHT);

function animate() {

    game.update();
    game.render();

    requestAnimationFrame(animate);
}


animate();