LevelPage = document.getElementById("LevelPage");
CustomizePage = document.getElementById("CustomizePage");
PlayPage = document.getElementById("PlayPage");
ResultPage = document.getElementById("result");
result_msg = document.getElementById("result_msg");

function ShowPage(page) {
    LevelPage.style.display = 'none';
    CustomizePage.style.display = 'none';
    PlayPage.style.display = 'none';
    page.style.display = 'block';
}
function ShowResults(num) {
    if (num == 1){
        result_msg.innerHTML = "YOU LOSE";
    }
    if (num == 2){
        result_msg.innerHTML = "YOU WON";
    }
    if (num == 0){
        result_msg.innerHTML = "IT'S TIE";
    }
    setTimeout(() => {
        ResultPage.style.display = "block";
    }, 1000);
}
function Reset() {
    result_msg.innerHTML = "";
    a0.innerHTML = '';
    a1.innerHTML = '';
    a2.innerHTML = '';
    a3.innerHTML = '';
    a4.innerHTML = '';
    a5.innerHTML = '';
    a6.innerHTML = '';
    a7.innerHTML = '';
    a8.innerHTML = '';
    w1.style.display = "none";
    w2.style.display = "none";
    w3.style.display = "none";
    w4.style.display = "none";
    w5.style.display = "none";
    w6.style.display = "none";
    w7.style.display = "none";
    w8.style.display = "none";
    t = [0,0,0,0,0,0,0,0,0];
    ResultPage.style.display = "none";
    humanturn = true;
}