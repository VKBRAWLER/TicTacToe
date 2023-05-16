let t = [0,0,0,0,0,0,0,0,0];
let arr = [[t[0], t[1], t[2]], [t[3], t[4], t[5]], [t[6], t[7], t[8]], [t[0], t[3], t[6]], [t[1], t[4], t[7]], [t[2], t[5], t[8]], [t[0], t[4], t[8]], [t[2], t[4], t[6]]];
let a0 = document.getElementById('b0');
let a1 = document.getElementById('b1');
let a2 = document.getElementById('b2');
let a3 = document.getElementById('b3');
let a4 = document.getElementById('b4');
let a5 = document.getElementById('b5');
let a6 = document.getElementById('b6');
let a7 = document.getElementById('b7');
let a8 = document.getElementById('b8');
let Difficulty = 'none';
humanturn = true;
a0.addEventListener('click', (e)=>{
    if(humanturn && !t[0]){
        humanturn = false;
        e.target.innerHTML = "<img class=\"pop\" src=\"./images/" + img2 +"\" alt=\"#\">";
        t[0] = 2;
        if(CheckWin()){
            computerturn(Difficulty);}
    }
})
a1.addEventListener('click', (e)=>{
    if(humanturn && !t[1]){
        humanturn = false;
        e.target.innerHTML = "<img class=\"pop\" src=\"./images/" + img2 +"\" alt=\"#\">";
        t[1] = 2;
        if(CheckWin()){
            computerturn(Difficulty);}
    }
})
a2.addEventListener('click', (e)=>{
    if(humanturn && !t[2]){
        humanturn = false;
        e.target.innerHTML = "<img class=\"pop\" src=\"./images/" + img2 +"\" alt=\"#\">";
        t[2] = 2;
        if(CheckWin()){
            computerturn(Difficulty);}
    }
})
a3.addEventListener('click', (e)=>{
    if(humanturn && !t[3]){
        humanturn = false;
        e.target.innerHTML = "<img class=\"pop\" src=\"./images/" + img2 +"\" alt=\"#\">";
        t[3] = 2;
        if(CheckWin()){
            computerturn(Difficulty);}
    }
})
a4.addEventListener('click', (e)=>{
    if(humanturn && !t[4]){
        humanturn = false;
        e.target.innerHTML = "<img class=\"pop\" src=\"./images/" + img2 +"\" alt=\"#\">";
        t[4] = 2;
        if(CheckWin()){
            computerturn(Difficulty);}
    }
})
a5.addEventListener('click', (e)=>{
    if(humanturn && !t[5]){
        humanturn = false;
        e.target.innerHTML = "<img class=\"pop\" src=\"./images/" + img2 +"\" alt=\"#\">";
        t[5] = 2;
        if(CheckWin()){
            computerturn(Difficulty);}
    }
})
a6.addEventListener('click', (e)=>{
    if(humanturn && !t[6]){
        humanturn = false;
        e.target.innerHTML = "<img class=\"pop\" src=\"./images/" + img2 +"\" alt=\"#\">";
        t[6] = 2;
        if(CheckWin()){
            computerturn(Difficulty);}
    }
})
a7.addEventListener('click', (e)=>{
    if(humanturn && !t[7]){
        humanturn = false;
        e.target.innerHTML = "<img class=\"pop\" src=\"./images/" + img2 +"\" alt=\"#\">";
        t[7] = 2;
        if(CheckWin()){
            computerturn(Difficulty);}
    }
})
a8.addEventListener('click', (e)=>{
    if(humanturn && !t[8]){
        humanturn = false;
        e.target.innerHTML = "<img class=\"pop\" src=\"./images/" + img2 +"\" alt=\"#\">";
        t[8] = 2;
        if(CheckWin()){
            computerturn(Difficulty);}
    }
})
const com_fill = (num) =>{
         if (num == 0){
        t[0] = 1;
        a0.innerHTML = "<img class=\"pop\" src=\"./images/" + img1 + "\" alt=\"O\">";
        }
    else if (num == 1){
        t[1] = 1;
        a1.innerHTML = "<img class=\"pop\" src=\"./images/" + img1 + "\" alt=\"O\">";
    }
    else if (num == 2){
        t[2] = 1;
        a2.innerHTML = "<img class=\"pop\" src=\"./images/" + img1 + "\" alt=\"O\">";
    }
    else if (num == 3){
        t[3] = 1;
        a3.innerHTML = "<img class=\"pop\" src=\"./images/" + img1 + "\" alt=\"O\">";
    }
    else if (num == 4){
        t[4] = 1;
        a4.innerHTML = "<img class=\"pop\" src=\"./images/" + img1 + "\" alt=\"O\">";
    }
    else if (num == 5){
        t[5] = 1;
        a5.innerHTML = "<img class=\"pop\" src=\"./images/" + img1 + "\" alt=\"O\">";
    }
    else if (num == 6){
        t[6] = 1;
        a6.innerHTML = "<img class=\"pop\" src=\"./images/" + img1 + "\" alt=\"O\">";
    }
    else if (num == 7){
        t[7] = 1;
        a7.innerHTML = "<img class=\"pop\" src=\"./images/" + img1 + "\" alt=\"O\">";
    }
    else if (num == 8){
        t[8] = 1;
        a8.innerHTML = "<img class=\"pop\" src=\"./images/" + img1 + "\" alt=\"O\">";
    }
}