/*var array = [2, 4, 6, 4, 17, 2, 6, 17, 4, 16, 8, 2, 4, 8];
function elementCount(arr, element){
    return arr.filter((currentElement) => currentElement == element).length;
};
console.log(elementCount(array, 6));*/
const count = (arr, e) =>{
    let c = 0;
    for (i=0; i < arr.length; i++){
        if (arr[i] == e){
            c++;
        }
    }return c;
}
const M_index = () =>{
    for (j=0; j < arr.length; j++){
        if ((count(arr[j],0)) && count(arr[j],1) == 2){
            return j;
        }
    }
    for (j=0; j < arr.length; j++){
        if ((count(arr[j],0)) && count(arr[j],2) == 2){
            return j;
        }
    }
    for (j=0; j < arr.length; j++){
        if ((count(arr[j],0)) == 2 && count(arr[j],1)){
                return j;
        }
    }
    for (j=0; j < arr.length; j++){
        if ((count(arr[j],0)) == 3){
                return j;
        }
    }
    for (j=0; j < arr.length; j++){
        if ((count(arr[j],0)) == 3){
                return j;
        }
    }
    for (j=0; j < arr.length; j++){
        if ((count(arr[j],0))){
                return j;
        }
    }
}
const Easy = () =>{
         if (!t[0]){
        com_fill(0);
        }
    else if (!t[1]){
        com_fill(1);
    }
    else if (!t[2]){
        com_fill(2);
    }
    else if (!t[3]){
        com_fill(3);
    }
    else if (!t[4]){
        com_fill(4);
    }
    else if (!t[5]){
        com_fill(5);
    }
    else if (!t[6]){
        com_fill(6);
    }
    else if (!t[7]){
        com_fill(7);
    }
    else if (!t[8]){
        com_fill(8);
    }
}
const Medium = () =>{
    arr = [[t[0], t[1], t[2]],
           [t[3], t[4], t[5]],
           [t[6], t[7], t[8]],
           [t[0], t[3], t[6]],
           [t[1], t[4], t[7]],
           [t[2], t[5], t[8]],
           [t[0], t[4], t[8]],
           [t[2], t[4], t[6]]];
    if (M_index() == 0){
        if (!t[0]){
            com_fill(0);
        }
        else if (!t[1]){
            com_fill(1);
        }
        else if (!t[2]){
            com_fill(2);
        }
    }
    else if (M_index() == 1){
        if (!t[3]){
            com_fill(3);
        }
        else if (!t[4]){
            com_fill(4);
        }
        else if (!t[5]){
            com_fill(5);
        }
    }
    else if (M_index() == 2){
        if (!t[6]){
            com_fill(6);
        }
        else if (!t[7]){
            com_fill(7);
        }
        else if (!t[8]){
            com_fill(8);
        }
    }
    else if (M_index() == 3){
        if (!t[0]){
            com_fill(0);
        }
        else if (!t[3]){
            com_fill(3);
        }
        else if (!t[6]){
            com_fill(6);
        }
    }
    else if (M_index() == 4){
        if (!t[1]){
            com_fill(1);
        }
        else if (!t[4]){
            com_fill(4);
        }
        else if (!t[7]){
            com_fill(7);
        }
    }
    else if (M_index() == 5){
        if (!t[2]){
            com_fill(2);
        }
        else if (!t[5]){
            com_fill(5);
        }
        else if (!t[8]){
            com_fill(8);
        }
    }
    else if (M_index() == 6){
        if (!t[0]){
            com_fill(0);
        }
        else if (!t[4]){
            com_fill(4);
        }
        else if (!t[8]){
            com_fill(8);
        }
    }
    else if (M_index() == 7){
        if (!t[2]){
            com_fill(2);
        }
        else if (!t[4]){
            com_fill(4);
        }
        else if (!t[6]){
            com_fill(6);
        }
    }
}
const computerturn = (Difficulty) =>{
    setTimeout(() => {
        if (Difficulty == "easy"){
            Easy();
        }
        if (Difficulty == "medium"){
            Medium();
        }
        if (Difficulty == "hard"){
            Hard();
        }
        console.log("br");
}, 300);
setTimeout(() => {
    if (CheckWin()){humanturn = true;}
}, 600);
}
