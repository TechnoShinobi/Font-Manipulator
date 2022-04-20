size = 0;
RightWristx = 0;
LeftWristx = 0;

function setup() {
video = createCapture(VIDEO);
video.size(450,550);
video.position(0,0)

canvas = createCanvas(550,450);
canvas.position(560,120);

posenet = ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);
}


function modelLoaded() {
console.log("POSENET IS WORKING SUCCESFULLY");


}


function gotPoses(results) {
if (results.length > 0) {
console.log(results);
nosex = results[0].pose.nose.x;
nosey = results[0].pose.nose.y;
RightWristx = results[0].pose.rightWrist.x; 
LeftWristx = results[0].pose.leftWrist.x;

size = floor(LeftWristx - RightWristx)

} 
}

function draw() {
background("white")
textSize(size)
text("TECHNOSHINOBI",15,80)



}








    
    
    
    
    
    
    
    
    