let initialDPR = window.devicePixelRatio;
let zoomLevel = 1;

function checkZoom() {
    let currentDPR = window.devicePixelRatio;

    if (currentDPR < initialDPR || zoomLevel < 1) {
        document.getElementById("blockContainer").classList.add("show");
        document.querySelector(".intro").classList.add("hide");
    } else {
        document.getElementById("blockContainer").classList.remove("show");
        document.querySelector(".intro").classList.remove("hide");
    }
}


window.addEventListener("resize", checkZoom);


window.addEventListener("wheel", (event) => {
    if (event.ctrlKey) {
        zoomLevel *= event.deltaY > 0 ? 0.9 : 1.1;
        checkZoom();
    }
});


function navigateTo(page) {
    window.location.href = page;
}
