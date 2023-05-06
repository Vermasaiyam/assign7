var index = 0;
function changeColours(){
    var colors = ["red", "Green","blue","orange","yellow","purple"]

    document.getElementsByTagName("body")[0].style.background = colors[index++];

    if (index > colors.length - 1){
        index=0;
    }
}