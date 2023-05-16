let w1 = document.getElementById('w1');
let w2 = document.getElementById('w2');
let w3 = document.getElementById('w3');
let w4 = document.getElementById('w4');
let w5 = document.getElementById('w5');
let w6 = document.getElementById('w6');
let w7 = document.getElementById('w7');
let w8 = document.getElementById('w8');
let CheckWin = () =>{
    // let aw = [[t[0], t[1], t[2]], [t[3], t[4], t[5]], [t[6], t[7], t[8]], [t[0], t[3], t[6]], [t[1], t[4], t[7]], [t[2], t[5], t[8]], [t[0], t[4], t[8]], [t[2], t[4], t[6]]];
    if (t[0] == 1 && t[1] == 1 && t[2] == 1){
        w1.style.display = "block";
        ShowResults(1);
    }
    else if (t[3] == 1 && t[4] == 1 && t[5] == 1){
        w2.style.display = "block";
        ShowResults(1);
    }
    else if (t[6] == 1 && t[7] == 1 && t[8] == 1){
        w3.style.display = "block";
        ShowResults(1);
    }
    else if (t[0] == 1 && t[3] == 1 && t[6] == 1){
        w4.style.display = "block";
        ShowResults(1);
    }
    else if (t[1] == 1 && t[4] == 1 && t[7] == 1){
        w5.style.display = "block";
        ShowResults(1);
    }
    else if (t[2] == 1 && t[5] == 1 && t[8] == 1){
        w6.style.display = "block";
        ShowResults(1);
    }
    else if (t[0] == 1 && t[4] == 1 && t[8] == 1){
        w7.style.display = "block";
        ShowResults(1);
    }
    else if (t[2] == 1 && t[4] == 1 && t[6] == 1){
        w8.style.display = "block";
        ShowResults(1);
    }
/* Lord aizen on the top where i sit, wanna battle we can mix espada, though you winning your victory is what i conjuring */

    else if (t[0] == 2 && t[1] == 2 && t[2] == 2){
        w1.style.display = "block";
        ShowResults(2);
    }
    else if (t[3] == 2 && t[4] == 2 && t[5] == 2){
        w2.style.display = "block";
        ShowResults(2);
    }
    else if (t[6] == 2 && t[7] == 2 && t[8] == 2){
        w3.style.display = "block";
        ShowResults(2);
    }
    else if (t[0] == 2 && t[3] == 2 && t[6] == 2){
        w4.style.display = "block";
        ShowResults(2);
    }
    else if (t[1] == 2 && t[4] == 2 && t[7] == 2){
        w5.style.display = "block";
        ShowResults(2);
    }
    else if (t[2] == 2 && t[5] == 2 && t[8] == 2){
        w6.style.display = "block";
        ShowResults(2);
    }
    else if (t[0] == 2 && t[4] == 2 && t[8] == 2){
        w7.style.display = "block";
        ShowResults(2);
    }
    else if (t[2] == 2 && t[4] == 2 && t[6] == 2){
        w8.style.display = "block";
        ShowResults(2);
    }
    else if (t[0] && t[1] && t[2] && t[3] && t[4] && t[5] && t[6] && t[7] && t[8]){
        ShowResults(0);
    }
    else{
        return true;
    }
}