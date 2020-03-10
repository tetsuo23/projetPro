document.onload = ready();

function ready() {
    var test = document.getElementById("firstVideo");
    test.addEventListener("ended", () => {
        document.getElementById("first").style.display = "none"
    });
}

function myHandler() {
    // What you want to do after the event
    document.getElementById("first").style.display = "none"
}

setTimeout(function () {
    document.getElementById("cut").play();
}, 10000);

// document.getElementById("firstVideo").addEventListener("ended", function () {
//     document.getElementById("first").style.display = "none"
// })