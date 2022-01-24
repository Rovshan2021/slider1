let next = document.querySelector("#next");
let prev = document.querySelector("#prev");
let img = document.querySelector("#slid");
let xett = document.getElementById("xett");
let count = 0;
let sekil = ["dodge01.jpg","dodge02.jpg","dodge03.jpg","dodge04.jpg","dodge05.jpg","dodge06.jpg"];
let xettime = setInterval(Xett, 40);
let time = setInterval(Next,4000);

deyish(sekil[count]);
Xett();

function deyish(x) {
    
    img.src = x;
    
}


function Next(){
    
    if (count<sekil.length-1) {
        count++
        deyish(sekil[count]);
        
    }else{
        count=0;
        
    };
    
    deyish(sekil[count]);Xett();
}

next.onclick = function() {
    if (count<sekil.length-1) {
        count++
        deyish(sekil[count]);
    }else{
        count=0

    };
    deyish(sekil[count]);Xett();
    
   
}
prev.onclick = function() {
    
    if(count == 0){
        count = sekil.length - 1;
    }else{
        count--
    }
    deyish(sekil[count]);Xett();
    
}

document.onkeydown = Key;

function Key (e) {
    e = e || window.event;
    
    if (e.keyCode == "39") {
        if (count<sekil.length-1) {
            count++
            
            deyish(sekil[count]);
        }else{
            count=0
        };
        deyish(sekil[count]);Xett();
    }

    if (e.keyCode == "37") {
        
        if(count == 0){
            count = sekil.length - 1;
        }else{
            count--
        }
        deyish(sekil[count]);Xett();
    }
}

function Xett(){
    count += 9;
    if (count <= 900) {
        xett.style.width = count + "px";
        
    } else{
        count = 0;
    }
    
}






