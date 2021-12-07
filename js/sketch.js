// var Engine = Matter.Engine,
//   //    Render = Matter.Render,
//     World = Matter.World,
//     MouseConstraint = Matter.MouseConstraint,
//     Mouse = Matter.Mouse,
//     Bodies = Matter.Bodies;




const s = ( sketch ) => {
    let bar=[];
    let dragged=false;
    let x = 100;
    let y = 100;
  
    sketch.setup = () => {
      sketch.createCanvas(200, 200);
      bar=new Bar(10,100,50,50,0.3,10);
    };
  
    sketch.draw = () => {
      sketch.background(0);
    //   sketch.fill(255);
    //   sketch.rect(x,y,50,50);
      bar.display();
      bar.drag(dragged);
    };
    sketch.mousePressed=()=>{
        dragged=true;
    };
    sketch.mouseReleased=()=>{
        dragged=false;
    };

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
            sketch.fill(255);
            sketch.stroke(0);
            sketch.strokeWeight(2);
            sketch.rect(this.x,this.y,this.w,this.h,40);
        }
        drag(dragged){
            if(dragged){
                if(this.w<sketch.mouseX){
                    this.w=sketch.mouseX-20+this.v*this.delay;
                }else{
                    this.w=sketch.mouseX;
                }
            }
        }
    }
};
  
let c1 = new p5(s,"container1");
