noseX=0;
noseY=0;
difference=0;
leftwristX=0;
rightwristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550, 550);
    canvas=createCanvas(550, 430);
    canvas.position(800, 150);
    video.position(150, 100);
    PoseNet=ml5.poseNet(video, modelloaded);
    PoseNet.on("pose", gotPose);
    }
    
    function modelloaded(){
        console.log("PoseNet is Initialised");
    }
    
    function gotPose(results){
        if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX ="+noseX+"  noseY="+ noseY);
        leftwristX=results[0].pose.leftWrist.x;
        rightwrist=results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX);
        console.log("leftwrist X ="+leftwristX+"  rightwrist X ="+rightwristX);
        }
    }
    
    
    function draw(){
        background("#696969");
        fill("#fc0384");
        textSize(50);
        text("Varsha", noseX, noseY, difference);
    }