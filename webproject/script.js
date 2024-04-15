let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

/*function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}*/

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let description = document.getElementById("imageDescription");
    let slideDescriptions = document.querySelectorAll('.mySlides .text');
  
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
  
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  
    slides[slideIndex-1].style.display = "block";
    // Update the text box with the description from the current slide
    description.innerHTML = slideDescriptions[slideIndex-1].innerHTML;
  }

 
  
  /*function playAudio1() {
    var audio = document.getElementById("myAudio");
    audio.play();
  }
  
  function pauseAudio1() {
    var audio = document.getElementById("myAudio");
    audio.pause();
  }
  
  function stopAudio1() {
    var audio = document.getElementById("myAudio");
    audio.pause();
    audio.currentTime = 0; // Reset the time
  }


  function playAudio2() {
    var audio = document.getElementById("myAudio2");
    audio.play();
  }
  
  function pauseAudio2() {
    var audio = document.getElementById("myAudio2");
    audio.pause();
  }
  
  function stopAudio2() {
    var audio = document.getElementById("myAudio2");
    audio.pause();
    audio.currentTime = 0; // Reset the time
  }

  function playAudio3() {
    var audio = document.getElementById("myAudio3");
    audio.play();
  }
  
  function pauseAudio3() {
    var audio = document.getElementById("myAudio3");
    audio.pause();
  }
  
  function stopAudio3() {
    var audio = document.getElementById("myAudio3");
    audio.pause();
    audio.currentTime = 0; // Reset the time
  }*/

// function to stop all audio tracks
function stopAllAudio() {
    var audios = document.getElementsByTagName('audio');
    for (var i = 0; i < audios.length; i++) {
        audios[i].pause();
        audios[i].currentTime = 0;
    }
}

// Play a specific audio track
function playAudio(trackId) {
    stopAllAudio(); // Stop all audio tracks before playing a new one
    var audio = document.getElementById(trackId);
    audio.play();
}

// play audio functions to use the utility function
function playAudio1() {
    playAudio("myAudio");
}

function playAudio2() {
    playAudio("myAudio2");
}

function playAudio3() {
    playAudio("myAudio3");
}

function playAudio4() {
    playAudio("myAudio4");
}

// Pause and stop functions can remain the same
function pauseAudio1() {
    var audio = document.getElementById("myAudio");
    if (audio) {
      audio.pause();
    } else {
      console.log("Audio element not found");
    }
    
}

function stopAudio1() {
    var audio = document.getElementById("myAudio");
    audio.pause();
    audio.currentTime = 0;

}

function pauseAudio2() {
    var audio = document.getElementById("myAudio2");
    audio.pause();
}

function stopAudio2() {
    var audio = document.getElementById("myAudio2");
    audio.pause();
    audio.currentTime = 0;
}

function pauseAudio3() {
    var audio = document.getElementById("myAudio3");
    audio.pause();
}

function stopAudio3() {
    var audio = document.getElementById("myAudio3");
    audio.pause();
    audio.currentTime = 0;
}

function pauseAudio4() {
    var audio = document.getElementById("myAudio4");
    audio.pause();
}

function stopAudio4() {
    var audio = document.getElementById("myAudio4");
    audio.pause();
    audio.currentTime = 0;
}

  


  
  
  
  