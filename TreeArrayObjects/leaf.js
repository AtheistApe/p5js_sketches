function Leaf(pos) {

  // this.turnedColor = color(0);
  // this.turnedColor = this.pickColor();
  this.turnedColor = lerpColor(color('yellow'), color('red'), random(0,1));

  this.startColor = color('green');
  this.color = this.startColor;
  // this.turnColor = true;
  this.pos = pos.copy();
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0.05);
  this.wind = wind;
  this.dropTime = random(200,5000);
  this.fallTime = this.dropTime;

  this.pickColor = function() {
    return lerpColor(color('yellow'), color('red'), random(0,1));
  }
  // this.pickColor = function() {
  //   var greenRange = Math.floor(Math.random()*271).toString(16);
  //   greenRange = ("0" + greenRange).slice(-2);
  //   return color('#FF'+ greenRange + '00');
  // }

  this.update = function() {
    this.dropTime--;
    if (this.dropTime > 0) {
      this.color = lerpColor(this.startColor, this.turnedColor, (this.fallTime - this.dropTime)/this.fallTime);
    }
    else {
        this.color = this.turnedColor;
        // this.turnColor = false;
        this.acc.add(this.wind);
        this.vel.add(this.acc);
        // console.log(this.vel.x + ", " + this.vel.y)
        if (this.pos.y < height) {
          this.pos.add(this.vel);
        }
        else {
          this.pos.y = height;
          this.acc.set(0, 0);
        }
        // this.wind.set(0, 0);
      }
    }

  this.display = function() {
    // noStroke();
    stroke(this.color);
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, 8, 8);
  }
}
