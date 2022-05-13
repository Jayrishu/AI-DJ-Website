harryp="";
peterp = "";
leftWristx = 0;
leftWristy = 0;
rightWristx = 0;
rightWristy = 0;
function preload(){
    harryp = loadSound("harry_potter_hedwig.mp3");
    peterp = loadSound("music2.mp3");
}
function setup(){
    canvas = createCanvas(500,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose", gotPoses);
}
function draw(){
    image(video,0,0,600,500);
}
function modelLoaded(){
    console.log("Model Is Loaded");
}
function gotPoses(results){
    if (results.length > 0) {
        console.log(results);
        leftWristx = results[0].pose.leftWrist.x;
        leftWristy = results[0].pose.leftWrist.y;
        rightWristx = results[0].pose.rightWrist.x;
        rightWristy = results[0].pose.rightWrist.y;
    }
}
