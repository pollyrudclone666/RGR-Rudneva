var stopped = true
function slideShow(counter) {
    if(stopped === true) {
        return
    }
    if (counter < 20) {
        setTimeout(function () {
            plusSlides(1);
            slideShow(counter);
        }, 1000);
    }
}
function start(currentCount) {
    stopped = !stopped;
    slideShow(currentCount);
}

