const s3 = ( p ) => {
    let bar=[];
    let dragged=false;
    let x = 100;
    let y = 100;
  
    p.setup = () => {
      p.createCanvas(200, 200);
      p.rectMode(p.CENTER);
      p.fill(20);
      p.stroke(255, 251, 249);
      p.strokeWeight(4);
    };
  
    p.draw = () => {
        p.background(255, 251, 249);
        p.translate(p.width / 2, p.height / 2);
        let num = 10;
        let intervalX = p.map(p.mouseX, 0, p.width, 40, -40);
        let intervalY = p.map(p.abs(p.mouseX - p.width / 2), 0, p.width / 2, 0, -20);
        let rectX = 30;
        let rectY =50;
        let tilt = p.map(p.mouseX, 0, p.width, -20, 10);
        // let constantVal= constrain(tilt,30,50);
        for(let i = num - 1; i > 0; i--){
          p.push();
          let rhytm = p.map(Math.pow(p.abs(Math.sin(p.frameCount * 0.03 - i * 0.3)), 50), 0, 1, 0, -50)
                      * p.map(p.abs(p.mouseX - p.width / 2), 0, p.width / 2, 0, 1);
          p.translate(intervalX * (i - num / 2.0), intervalY * (i - num / 2.0) + rhytm);
          p.beginShape();
          p.vertex(-rectX / 2.0, -rectY / 2.0 + tilt);
          p.vertex(rectX / 2.0, -rectY / 2.0 - tilt);
          p.vertex(rectX / 2.0, rectY / 2.0 - tilt);
          p.vertex(-rectX / 2.0, rectY / 2.0 + tilt);
          p.endShape(p.CLOSE);
          p.pop();
        }
    };



};
  
let c3 = new p5(s3,"container3");
