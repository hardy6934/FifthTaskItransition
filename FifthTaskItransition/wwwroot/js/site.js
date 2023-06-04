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


var download = document.getElementById("downloadCSV");

download.onclick = function () {

    var rows = window.document.querySelectorAll("table tr");

    var allColumns = [];

    for (var i = 0; i < rows.length; i++) {
        var cols = rows[i].querySelectorAll('td');
        for (var j = 0; j < cols.length; j++) {
            allColumns.push(cols[j].textContent+';')
        }
    }

    const chunkArray = (arr, cnt) => arr.reduce((prev, cur, i, a) => !(i % cnt) ? prev.concat([a.slice(i, i + cnt)]) : prev, []);

    var CSVData = chunkArray(allColumns, 5);
     

    let csvContent = "data:text/csv;charset=utf-8,";

    for (var key in CSVData) {
        CSVData[key].forEach(function (e, i) {
            CSVData[key][i] = (e || "").replace(/\s*\n\s*/g, "");
        });
    } 

    var result = CSVData.join("\n");
     
    var encodedUri = encodeURI(csvContent) + '\ufeff' + encodeURI(result);
    window.open(encodedUri);
 }