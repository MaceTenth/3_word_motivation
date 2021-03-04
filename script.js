var audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'audio.mp3');
console.log(audioElement);
audioElement.load();

window.addEventListener("mousemove", function() { 
  audioElement.play(); 
}, true);

const panels = document.querySelectorAll(".panel");

function toggleOpen() {

  
    if (this.children[1].style.display === "block") {
      this.children[1].style.display = "";
    }else{
      this.children[1].style.display = "block";
    }
    
    
    this.classList.toggle("open")
 
  

  }

  function toggleActive(e) {

    
    
    if (e.propertyName.includes("flex")) {
      this.classList.toggle("open-active");
    }

   

    
  }

  panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
  panels.forEach((panel) =>
    panel.addEventListener("transitionend", toggleActive)
);

const animated = document.querySelector('.frame-5');
const animatedDiv = document.querySelector('.container')

animated.addEventListener('animationend', () => {
setTimeout(() => {
animatedDiv.style.display = "none";
}, 3000);

});



