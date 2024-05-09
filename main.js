
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas = createCanvas(450, 400);
    canvas.position(680, 240);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
 }

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
 } 


function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX =" + noseX +" noseY =" + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX =" + leftWristX + " rightWristX =" + rightWristX + " difference = " + difference);
    }
 }

 function draw() {
    background('#969A97');
    fill('#C5E90B');
    stroke('#C5E90B');
    square(noseX, noseY, difference);
 }