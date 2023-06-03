let page = 2;


const throttle = (func, limit) => {
    let lastFunc
    let lastRan
    return function () {
        const context = this
        const args = arguments
        if (!lastRan) {
            func.apply(context, args)
            lastRan = Date.now()
        } else {
            clearTimeout(lastFunc)
            lastFunc = setTimeout(function () {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args)
                    lastRan = Date.now()
                }
            }, limit - (Date.now() - lastRan))
        }
    }
}


document.addEventListener('scroll', throttle(function () {

    let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;

    if (windowRelativeBottom < document.documentElement.clientHeight + 100) {
        var errors = document.getElementById("textBox");
        var seed = document.getElementById("Seed");

        let resultTable = document.getElementById('ResultOfGeneration');
        const GetGeneratetDataAfterScroll = `${window.location.origin}/home/PersonPreview?count=1000&seed=${seed.value}&page=${++page}&pageSize=10&errors=${errors.value}`;

        fetch(GetGeneratetDataAfterScroll).then(function (response) {
            return response.text();
        })
            .then(function (response) {
                resultTable.innerHTML = resultTable.innerHTML + response;

            })
            .catch(function () {
                console.log("something went wrong")
            });
    };
}, 1000));   

 
