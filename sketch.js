let b;
let sponge=[];
let pressCount=3;
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight,WEBGL);
  canvas.parent("canvas-container");
  b=new Box(0,0,0,200);
  sponge.push(b);
}

function mousePressed() {
  if(pressCount==1){
    return
  }else{
    let next =[];
    for(let box of sponge){
      let newboxes = box.generate()
      next = next.concat(newboxes);  
    }
    sponge=next;
    pressCount=pressCount-1;

  }

}

function draw() {
  background(51);
  lights();
  stroke(255,100);
  noFill();
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);

  for(let i=0; i<sponge.length; i++){
    sponge[i].show();
  }
}
