var timer = 60;
var score = 0;
var hitrn = 0;



// Event Bubbling

// jispe click karoge wo element par event raise hoga,
// aur event listener na milne par event element ke parent par 
//listener dhundega, waha bhi na milne par event parent
// ke parent ke parent par listener dhundega

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}




function makeBubble(){
    var clutter = "";

for(var i = 1; i<= 70;i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML =  clutter;
}


function runTimer(){
    var timerint = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
        
        
     }, 1000);

}


document.querySelector("#pbtm")
.addEventListener("click", function(details){
    var clickedNumber = (Number(details.target.textContent));
    // alert("Chal raha hai");
    if(clickedNumber == hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }

});

runTimer();
makeBubble();
getNewHit();
