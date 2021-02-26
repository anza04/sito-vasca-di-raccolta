
//COMPARSA DELL DESCRIZIONE "INTIMIANO SYSSTEMS COMPANY"
let lettere = document.getElementById("lettere");
let descrizione = document.getElementById("descrizione");
let main = document.getElementById("main");
let back = document.getElementById("back");
let titoli = document.getElementById("titoli");


lettere.addEventListener("mouseenter", function() {
    back.style.opacity = "0";
  });

lettere.addEventListener("mouseleave", function() {
    back.style.opacity = "1";
});

var altezza =$("#main").height()-330;

//SCROLL MAGIC
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  duration: altezza,
  triggerElement: main,
  triggerHook: 0
})
.addIndicators()
.setPin(titoli)
.addTo(controller); 

