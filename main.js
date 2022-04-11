function setup() {
video = createCapture(VIDEO);
video.size(300, 550);
video.position(0, 0)

    canvas = createCanvas(550, 500);
    canvas.position(560, 120);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}


function modelLoaded() {
console.log("POSENET IS WORKING SUCCESFULLY");


}


function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}

function draw() {
    background("black")


}