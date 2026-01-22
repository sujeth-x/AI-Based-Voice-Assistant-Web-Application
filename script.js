 const talk = document.querySelector('.talk');
      

    function speak(text){
        const voice = new SpeechSynthesisUtterance(text);
        voice.rate =1;
        voice.volume=1;
        voice.pitch=1;
        speechSynthesis.speak(voice);
    }
    
  function wishme(){
    var day = new Date();
    var hour = day.getHours();

    if(hour>0 && hour<12){
        speak('GOOD MORNING SIR....HOW CAN I HELP YOU?');
    }
    else if(hour>=12 && hour<17){
     speak('GOOD AFTERNOON SIR....HOW CAN I HELP YOU?');
    }
    else{
        speak('GOOD EVENING SIR....HOW CAN I HELP YOU?');
    }
  } 
  addEventListener('load',()=>{
    speak('INITIALIZING SPIDEY...');
    
    wishme();
  })
  
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition =  new SpeechRecognition();
recognition.onresult = (event)=>{
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    talk.textContent = transcript;
  Command(transcript.toLowerCase()); 
    
}

  talk.addEventListener('click',()=>{
    talk.textcontent = "listining...";
    recognition.start();}
  )
  function Command(message){
    if(message.includes('hey') || message.includes('hello')){
        speak('Hello sir,how may i help you?')
    }
    else if(message.includes('what is your name?')){
        speak('my name is spidey..i am a virtual ai');
    }
    else if(message.includes('what can you do?')){
        speak("I'm here to assist you with a variety of tasks like..answering questions,setting reminders,helping with productivity..etc");

    }
    else if(message.includes('who created you?')){
        speak('my boss...and his name is sujith')
    }
    else if(message.includes("open google")){
        window.open("https://google.com", "_blank");
        speak("Opening Google...")
    }
    else if(message.includes("open viskamnix")){
        window.open("https://www.viskamnix.com", "_blank");
        speak("opening VISKAMNIX techologies")
    }
    else if(message.includes("open spotify")){
        window.open("https://open.spotify.com/","_blank");
        speak("opening spotify....")
    }
    else if(message.includes("open youtube")){
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...")
    }
    else if(message.includes("open facebook")){
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...")
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
	    speak(finalText);
  
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speak(finalText);
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speak(finalText);
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric" ,year:'numeric'})
        const finalText = date;
        speak(finalText);
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speak(finalText);
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speak(finalText);
    }
} 