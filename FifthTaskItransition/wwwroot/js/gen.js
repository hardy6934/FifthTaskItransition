

function Init(seed, errors){ 
    let resultTable = document.getElementById('ResultOfGeneration');
    const GetGeneratetData = `${window.location.origin}/home/PersonPreview?count=1000&seed=${seed}&page=1&pageSize=20&errors=${errors}`;

fetch(GetGeneratetData).then(function (response) {
    return response.text();
})
    .then(function (response) {
        resultTable.innerHTML = response;
    })
    .catch(function () {
        console.log("something went wrong")
    }); 
}
 

var errors = document.getElementById("textBox");
var seed = document.getElementById("Seed");

Init(seed.value, errors.value)