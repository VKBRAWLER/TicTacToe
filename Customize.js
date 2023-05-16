let img1 = "circle.png";
let img2 = "cross.png";
let imgNo = 1;
let DisplayImage = document.getElementById("displayimg");
let SelectButton = document.getElementById("sel");

const NextImage = () =>{
    if (imgNo == 4){
        imgNo = 1;
    }
    else{
        imgNo = imgNo + 1;
    }
    RefreshCum();
}
const PreviousImage = () =>{
    if (imgNo == 1){
        imgNo = 4;
    }
    else{
        imgNo = imgNo - 1;
    }
    RefreshCum();
}
const RefreshCum = () =>{
    if (imgNo == 1){
        dis1 = "circle.png";
        dis2 = "cross.png";
    }
    else if (imgNo == 2){
        dis1 = "luffy.png";
        dis2 = "zoro.png";
    }
    else if (imgNo == 3){
        dis1 = "angel.png";
        dis2 = "demon.png";
    }
    else if (imgNo == 4){
        dis1 = "uzumaki.png";
        dis2 = "uchiha.png";
    }
    DisplayImage.innerHTML = "<img src=\"./images/" + dis1 + "\" alt=\"O\"><img src=\"./images/" + dis2 + "\" alt=\"#\">";
    if (img1 == dis1){
        SelectButton.innerHTML = "SELECTED";
    }
    else{
        SelectButton.innerHTML = "SELECT"
    }
}
const SelectionClick = () =>{
    img1 = dis1;
    img2 = dis2;
    RefreshCum();
}

