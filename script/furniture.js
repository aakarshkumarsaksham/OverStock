var link = document.querySelectorAll("#furniture > div");
for (var i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function () {
        window.open("../furniturecards.html");
    });
}