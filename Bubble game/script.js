
var timer =60;
var score=0;
var hitrn = 0;
function makeBubble(){
    var clutter = "";
for(var i = 1; i<=105; i++){
    var rn = Math.floor(Math.random()*10)
   clutter+= `<div class="bubble">${rn}</div>`
}


document.querySelector("#pbtm").innerHTML=clutter;
}

function incScore(){
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}

function gethit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").innerHTML=hitrn;
}  

function runTimer(){
  var timerint =  setInterval(function(){
        if(timer>0){
            timer--;

            document.querySelector("#timerval").textContent = timer;

        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>,`;
        }
        
      

    },1000)
}

// nila - int  , black  - String
document.querySelector("#pbtm").addEventListener("click",function(details){
    var clickedNum = (Number(details.target.textContent));
    if(clickedNum===hitrn){
        incScore();
        makeBubble();
        gethit();
    }
  

})

gethit();
runTimer();
makeBubble();























