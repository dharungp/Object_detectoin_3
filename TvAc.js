img=""
status=""
function preload(){
    
    img = loadImage("tvac.jpg");
}

function Back(){
    window.location="index.html"
}


function setup(){
    canvas = createCanvas(500,500)
    canvas.position(315,200);
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detection Object";

    }
function modelLoaded(){
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResults);
    
    }
function gotResults(error,results){
    if(error){
        console.log(error)
    }
    console.log(results)
    objects = results;
    }
function draw(){
    image(img,0,0,500,500)
    if(status != ""){
        for(i = 0;i<objects.length;i++){
            document.getElementById("status").innerHTML = "Status: Object Detected";

            fill();
            percent = floor(objects[i].confidence * 100)
            text(objects[i].label +" "+percent +"%" , objects[i].x +15,objects[i].y +15);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
            }
        }
    }