         /// header change de couleurs JS


window.addEventListener('DOMContentLoaded', () => {
  const head = document.querySelector('header');
  const startColor = [42, 42, 42, 1]; 
  const endColor = [30, 30, 30]; 
  const height = 500;
  
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const percentage = Math.min(scrollPosition / height, 5);
  const newColor = startColor.map((value, index) => {
  return value + (endColor[index] - value) * percentage;
  });
    head.style.backgroundColor = `rgb(${newColor.join(',')})`;
  });
})


         /// carte qui glisse JS

let carteBtn = document.getElementById("carte_btn_id");
let carte2 = document.querySelector(".carte2");
let carte = document.querySelector(".carte");

//carte2 glisse gauche>droite
carteBtn.addEventListener("click", function() {
  if (carte2.style.left === "47%" ) {
    carte2.style.left = "16%" ;
    
  } else {
    carte2.style.left = "47%";
  }

  carte2.style.transitionDuration = "0.2s";
  carte2.style.transitionTimingFunction = "cubic-bezier(0.5, 0.5, 0.4, 0.3)"



//carte  scale ^up
  if (carte.style.transform === "scale(1.02)") {
    carte.style.transform = "scale(1)";
    
  } else {
    carte.style.transform = "scale(1.02)";
  }

  carte.style.transitionDuration = "0.4s"

// bouton effet
  if (carteBtn.style.backgroundColor === "balck")
  carteBtn.style.backgroundColor = "transaprent"
  
});
