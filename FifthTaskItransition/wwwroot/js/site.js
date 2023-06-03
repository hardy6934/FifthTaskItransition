var slider = document.getElementById("customRange3");
var text = document.getElementById("textBox"); 
 
slider.oninput = function () {
    text.value = slider.value;
}

text.oninput = function () {
    slider.value = text.value;
    if (text.value > 1000) {
        text.value = 1000;
    }
}


var buttonRnd = document.getElementById("Random");
var Seedtext = document.getElementById("Seed");
 


buttonRnd.onclick = function () {
    Seedtext.value = Math.floor(Math.random() * 100000);
    Init(Seedtext.value, text.value);
    page = 2;
}
Seedtext.onchange = function () {
    Init(Seedtext.value, text.value);
    page = 2;
}

text.onchange = function () {
    Init(Seedtext.value, text.value);
    page = 2;
}
slider.onchange = function () {
    Init(Seedtext.value, text.value);
    page = 2;
}
