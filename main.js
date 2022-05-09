function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/T9gbnBZtT/model.json',modelready);
}
function modelready(){
    classifier.classify(gotresults);
    
}
var dog=0;
var cat=0;
var elephant=0;

function gotresults(error,results)
{
    if(error)
    {
        console.error(error);
    }
    else{
        console.log(results);
        random_r=Math.floor(Math.random()*255)+1;
        random_g=Math.floor(Math.random()*255)+1;
        random_b=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML="I can Hear - "+results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy - "+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_r+","+random_g+","+random_b+")";

        img=document.getElementById("hearing");

        if(results[0].label=="Cat")
        {
            img.src="cat.jpg";
            cat=cat+1;
        }
        else if(results[0].label=="Dog"){
            img.src="dog.jpg";
            dog=dog+1;
        }
        else if(results[0].label=="Elephant"){
            img.src="elephant.jpg";
            elephant=elephant+1;
        }
        else{
            img1.src="ear.png";
        }
    }
}
