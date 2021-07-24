//https://teachablemachine.withgoogle.com/models/mHQU3No6p/
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera = document.getElementById("webcam_div");
Webcam.attach( '#webcam_div' );
function takeImage(){
    Webcam.snap(function(data_uri){
        document.getElementById("image_div").innerHTML = "<img id='captured_image' src='"+data_uri+"'/>";
    });
}
console.log('ml5 version: ', ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/mHQU3No6p/model.json",modelLoaded);
function modelLoaded(){
    console.log("Model Loaded!");
}