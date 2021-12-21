function preload(){
  posenet=ml5.poseNet(video,modelLoaded)
  posenet.on('pose',gotposes)
}

function setup(){
  let cnv = createCanvas(400, 400);
 cnv.parent('myContainer');
  video=createCapture(VIDEO)
  video.hide()
      
}

function draw(){
image(video,0,0,400,400)
}

function modelLoaded(){
console.log("Model is Loaded!")
}