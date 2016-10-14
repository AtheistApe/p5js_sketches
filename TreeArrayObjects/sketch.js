// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var tree = [];
var leaves = [];
var offset = 0;
var wind;

function setup() {
  createCanvas(640, 480);
  // background(255);
  randomSeed();
  // wind = createVector(0, 0);
  var b = new Branch(createVector(width / 2, height), createVector(0, -1), 150, 1);
  tree.push(b);
}

function draw() {
  background(255);
  offset += 10;
  wind = createVector(map(noise(offset),0,1,-0.001,0.001), 0);
  for (var i = 0; i < tree.length; i++) {
    // Get the branch, update and draw it
    tree[i].update();
    tree[i].render();

    if (tree[i].timeToBranch()) {
      if (tree.length <= 2048) {
        tree.push(tree[i].branch(random(20, 40))); // Add one going right
        tree.push(tree[i].branch(random(-10, -30))); // Add one going left
      } else {
        leaves.push(new Leaf(tree[i].end));
      }
    }
  }
  //println(leaves.length);

  for (var j = 0; j < leaves.length; j++) {
    // leaves[i].turnedColor = leaves[i].pickColor();
    leaves[j].update();
    leaves[j].display();
  }
  // background(255);
}
