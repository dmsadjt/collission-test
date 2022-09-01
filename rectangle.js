export class Rectangle{
    constructor(x, y, speed, game){
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 100;
        this.speed = speed;
        this.vx = 0;
        this.vy = 0;
        // this.rect2 = rect2;
    }
    
    update(){
        if (this.collision()){
            this.speed = -this.speed;
        }

        this.vx = this.speed ;
        this.vy = this.speed ;
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
    }

    render(context){
        context.strokeRect(this.x, this.y, this.width, this.height);
    }


    collision(){
        return this.x + 100 > this.game.width || this.x < 0 || this.y + 100 > this.game.height || this.y < 0;
    }
}