
function startClasification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/PhmwIT-xH/model.json',modelReady)
}
function modelReady(){
    classifier.classify(gotResults);

}
function gotResults(error,results){
    console.log('got results')
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r= Math.floor(Math.random()*255)+1;
        random_number_g= Math.floor(Math.random()*255)+1;
        random_number_b= Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML= "I can hear- "+results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy- "+(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img1=document.getElementById("animal_image");

        if (results[0].label=="cat") {
        img1.src="cat.jpg"   
        }
       else if (results[0].label=="chicken") {
            img1.src="chicken.png"
               
            }
       else if (results[0].label=="cow") {
             img1.src="cow.jpg"
               
                }
       else if (results[0].label=="dog") {
            img1.src="dog.jpg"   
                    }
 
}
}