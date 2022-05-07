harryp="";
peterp = "";
function preload(){
    harryp = loadSound("harry_potter_hedwig.mp3");
    peterp = loadSound("music2.mp3");
}
function setup(){
    canvas = createCanvas(500,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,600,500);
}
