var SpeechRecognition = window.webkitSpeechRecognition;

// var recognition = new window.webkitSpeechRecognition();
var recognition = new SpeechRecognition();

// var John = new human();
// var Ralph = new human();
// var Tamanna = new human();
// SpeechRecognition API has lots of pre-built functions: start(), speak(), onresult()

function startbtn()
{
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start(); // conversion of our speech to text
    // John.speak();
} 

//  onresult function holds all the values of speech converted to text.
// we can merge defining a function and calling a function in the same command
// calling the function
// John.speak("Hi! I am John");
// defining the function
//      John.speak(){
//      commands to make the computer speak
//      }


recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
 
//99
// speakcomputer();
//  speak() function inside the onresult function is to 
//automate the process of speaking the text as soon as we give the voice command. I
//100

      if(Content =="take my selfie")
      {
        console.log("taking selfie: ");
        speakcomputer();
      }

}

// convert text into speech


function speakcomputer(){
   // speechSynthesis is an API that converts text to speech
    var synth = window.speechSynthesis;
//99
  //  speak_data = document.getElementById("textbox").value;
//100
    speak_data = "Taking your Selfie in 5 seconds";

   //  pre-built function converts text into speech
    var utterThis = new SpeechSynthesisUtterance(speak_data);
// utterThis holds the converted audio data

// pre-built function speak() .  speak() function is to trigger the system to speak whatever
//is passed inside this speak function
  
synth.speak(utterThis);

Webcam.attach(camera);

// setTimeout(local function, delay time in milliseconds);

//setTimeout(function(){take_snapshot();}  , 5000);


    setTimeout(function()
    { 
        take_snapshot(); 
        save();
    } , 5000);
    
}


 
var camera = document.getElementById("camera"); // return <div>
// pre-built function set() in webcam.js library
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality: 90  //  means the quality of the live view of the webcam
});


//100
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = "<img id='selfie_image' src=' "+ data_uri + " '> ";
        
      
    });

     // '<img id="selfie_image" src="' + data_uri + ' "> ';
// Webcam.snap() is a predefined function of webcam.js which is used to take a selfie, this function contains data_uri that can be used to show preview of the
// image which generates after taking a snapshot. 

//  
}

//100
function save()
{
  link = document.getElementById("link"); // return the <a>    // link holds <a>
  image = document.getElementById("selfie_image").src ; // return data_uri URL
  link.href = image; // <a href ="data_uri">
  link.click(); // click() is applied on <a>
}
