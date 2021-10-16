function startIdentifyingSound() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/m6xNc4N9a/model.json", modelLoaded);
}

function modelLoaded() {
    console.log("inside modelLoaded");
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if(error) {
        console.error(error);
    }
    else {
        console.log(results);
        var red = Math.floor(Math.random()*255);
        var green = Math.floor(Math.random()*255);
        var blue = Math.floor(Math.random()*255);
        document.getElementById("hearLabel").style.color = "rgb("+red+", "+green+", "+blue+")";
        document.getElementById("accuracyLabel").style.color = "rgb("+red+", "+green+", "+blue+")";
        document.getElementById("hear").style.color = "rgb("+red+", "+green+", "+blue+")";
        document.getElementById("accuracy").style.color = "rgb("+red+", "+green+", "+blue+")";
        document.getElementById("hear").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = (results[0].confidence*100).toFixed(2) + "%";
        alien1 = document.getElementById("alien1PNG");
        alien2 = document.getElementById("alien2PNG");
        alien3 = document.getElementById("alien3PNG");
        alien4 = document.getElementById("alien4PNG");
        if(results[0].label == "Background Noise") {
            alien1.src="aliens-01.gif";
            alien2.src="aliens-02.png";
            alien3.src="aliens-03.png";
            alien4.src="aliens-04.png";
        }
        else if(results[0].label == "Typing") {
            alien1.src="aliens-01.png";
            alien2.src="aliens-02.gif";
            alien3.src="aliens-03.png";
            alien4.src="aliens-04.png";
        }
        else if(results[0].label == "Snapping") {
            alien1.src="aliens-01.png";
            alien2.src="aliens-02.png";
            alien3.src="aliens-03.gif";
            alien4.src="aliens-04.png";
        }
        else {
            alien1.src="aliens-01.png";
            alien2.src="aliens-02.png";
            alien3.src="aliens-03.png";
            alien4.src="aliens-04.gif";
        }
    }
}