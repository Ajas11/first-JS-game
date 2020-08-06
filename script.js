var stop=0;
var posx = 140;
var posy = 140;
  function pocni() {
    var speed=10;
    var elem = document.getElementById("ball");   
    var step=1;
    var id;
    var uglic=document.getElementById("ugao").value;
      document.getElementById("bod").innerHTML=uglic;
    if (uglic>=0) {id=setInterval(dd, speed)}
    else if (uglic<0 ) {id=setInterval(gd, speed)}
    document.querySelector(".but1").disabled=true;
    halt=0;
    document.querySelector("#but2").addEventListener("click", function() {
        halt=1; document.querySelector(".but1").disabled=false;});      
    
    function dd() {
    if (posy >= 278) {
      clearInterval(id);
      id=setInterval (gd,speed);
    }
    else if (posx >= 578)  {
      clearInterval(id);
      id=setInterval(dl,speed);
    }
     else {
      posx=posx+step;
      posy=posy+step; 
      if(halt==1){clearInterval(id); posx=140; posy=140}
      elem.style.top = posy + "px"; 
      elem.style.left = posx + "px"; 
    }
            
    }
    function gd() {
      if (posy == 0) {
      clearInterval(id);
      id=setInterval (dd,speed);
    }
    else if (posx == 578)  {
      clearInterval(id);
      id=setInterval(gl,speed);
    } else {
      posx++;
      posy--; 
      if(halt==1){clearInterval(id); posx=140; posy=140}
      elem.style.top = posy + "px"; 
      elem.style.left = posx + "px";
    }
    } 
    function gl() {
    if (posy == 0) {
      clearInterval(id);
      id=setInterval (dl,speed);
    }
    else if (posx == 0)  {
      clearInterval(id);
      id=setInterval(gd,speed);
    }
     else {
      posx--;
      posy--; 
      if(halt==1){clearInterval(id); posx=140; posy=140}
      elem.style.top = posy + "px"; 
      elem.style.left = posx + "px"; 
    }
    }
    function dl() {
    if (posy == 278) {
      clearInterval(id);
      id=setInterval (gl,speed);
    }
    else if (posx == 0)  {
      clearInterval(id);
      id=setInterval(dd,speed);
    }
     else {
      posx--;
      posy++; 
      if(halt==1){clearInterval(id); posx=140; posy=140}
      elem.style.top = posy + "px"; 
      elem.style.left = posx + "px"; 
    }
    }
    if (stop=1) {return;}
  }
  function zaustavi() {
  //stop=1;
  //clearInterval(id);
    //var elem = document.getElementById("ball");
    //posx = 140;
    //posy = 140;
    //elem.style.top = posy + "px";
    //elem.style.left = posx + "px"; 
  //elem.style.top= 140;
}

$(document).ready(function(){
  $("#inf").click(function() {
      alert("      --   Ajas JS game  --  Zeforge Academy  --   Prva JS igra  --  Vjezbaj bilijar  --");
   });
   
});