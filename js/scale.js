class Bar{
    constructor(x,y,w,h,delay,v){
        this.x=x;
        this.y=y;
        this.delay=delay;
        this.w=w;
        this.h=h;
        this.v=v;
    }
    display(){
        // rectMode(CENTER);
        fill(255);
        stroke(0);
        strokeWeight(2);
        rect(this.x,this.y,this.w,this.h,40);
    }
    drag(dragged){
        if(dragged){
            if(this.w<mouseX){
                this.w=mouseX-20+this.v*this.delay;
            }else{
                this.w=mouseX;
            }
        }
    }
}