
const txt = 
`During Big Bang the Universe Exploded and a whole new journey began.\n
With the creation of Universe 6 stones also borned that hold the power to change the UNIVERSE.\n
Anyone who posses this INFINITY STONES can do whatever they want.\n 
`

const storyCon = document.getElementById("startStory")
const speed = 1
let i=0



function typeWriter() {
  
    if (i < txt.length) {

      storyCon.innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
    else{
      document.getElementById("container2").style.display = "block";
    }
  }