let image=document.querySelector(".Slider_image");
let translate=0;


setInterval(() => {
   if(translate >=0 && translate < 400) {
      translate+=100;
      console.log(" ")
   }
   else{
      translate = 0;
   }
   image.style.transition="2s";
   image.style.transform='translatex(-${translate}%)';
},3000) 