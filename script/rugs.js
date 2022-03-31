var link = document.querySelectorAll("#Rugs > div:nth-child(n+4)");
for (var i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function () {
        window.open("../rugscards.html");
    });
}