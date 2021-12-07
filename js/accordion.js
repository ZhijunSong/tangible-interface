class Accordion{
    constructor(x,y,intervalX,intervalY,num,tilt){
        this.x=x;//   float rectX = 100;//   float rectY = 200;
        this.y=y;
        this.intervalX=intervalX;//   float intervalX = map(mouseX, 0, width, 40, -40);
        this.intervalY=intervalY;//   float intervalY = map(abs(mouseX - width / 2), 0, width / 2, 0, -20);
        this.num=num;//   int num = 10;
        this.tilt=tilt;//   float tilt = map(mouseX, 0, width, -20, 20);
    }
    display(){
        rectMode(CENTER);
        fill(20);
        stroke(255, 251, 249);
        strokeWeight(4);
        translate(width / 2, height / 2);

        for(let i = 0;i<this.num-1;i--){
            let rhytm = map(Math.pow(abs(Math.sin(frameCount * 0.03 - i * 0.3)), 50), 0, 1, 0, -50)
            * map(abs(mouseX - width / 2), 0, width / 2, 0, 1);
            pop();
            translate(intervalX * (i - num / 2.0), intervalY * (i - num / 2.0) + rhytm)//translate(intervalX * (i - num / 2.0), intervalY * (i - num / 2.0) + rhytm);
            beginShape();
            vertex(-this.x / 2.0, -this.y/ 2.0 + this.tilt);
            vertex(this.x / 2.0, -this.y / 2.0 - this.tilt);
            vertex(this.x / 2.0, this.y / 2.0 - this.tilt);
            vertex(-this.x / 2.0, this.y / 2.0 + this.tilt);
            endShape(CLOSE);
            push();
        }
    }
}
