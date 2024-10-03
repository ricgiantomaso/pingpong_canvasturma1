class Pad{ 
    constructor(c, keyboard){
        this.c = c;
        this.keyboard = keyboard;
        this.vel=5;
        this.largura = 20;
        this.altura = 100;
        this.x=5;
        this.y=(c.canvas.height/2)-(this.altura/2);

    }
    management(){
    
        if (this.keyboard.cima) 
            if (this.y > 0 && this.y - 5)
                this.y-=this.vel;
        if (this.keyboard.baixo)
            if (this.y < this.c.canvas.height-this.altura - 5) 
                this.y+=this.vel;            
    }
    draw(){
        this.management();
        this.c.fillStyle = "green";
        this.c.fillRect(this.x, this.y, this.largura, this.altura);
    }
   
}






