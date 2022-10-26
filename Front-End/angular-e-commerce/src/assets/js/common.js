let indexImg = 0;
let timeDelay = 3000;
let autoRunSlide = null;
let timer = null;

changeImage();
openInterval();

function openInterval() {
    autoRunSlide = setInterval(nextImage, timeDelay);
}

function delayInterval() {
    if (autoRunSlide != null || timer != null) {
        window.clearInterval(autoRunSlide);
        window.clearTimeout(timer);
        autoRunSlide = null;
        timer = null;
    }
    timer = setTimeout(openInterval, 5000);
}

function changeImage() {
    $(document).ready(function(){
        let arrItem = $(".carousel-main-item");

        let totalItem = arrItem.length;
        if (indexImg > totalItem - 1) {
            indexImg = 0;
        }

        if (indexImg < 0) {
            indexImg = totalItem - 1;
        }

        let itemImg = null;
        let itemBtn = null;
        for (let i = 0; i < totalItem; i++) {
            itemImg = $(`#item-${i}`).removeClass('active');
            itemBtn = $(`#btn-img-${i}`).removeClass('active');
        }
        itemImg = $(`#item-${indexImg}`).addClass('active');
        itemBtn = $(`#btn-img-${indexImg}`).addClass('active');
    });
}

$(document).ready(function(){
    $('#btn-next').on('click', function(event) {
        nextImage();
        delayInterval();
    });

    $('#btn-back').on('click', function(event) {
        backImage();
        delayInterval();
    });

    $('#btn-back-fl').on('click', function(event) {
        backEventFL();
    });

    $('#btn-next-fl').on('click', function(event) {
        nextEventFL();
    });

    $('.carousel-number').on('click', '.carousel-item-img', function() {
        let index = $(this).index('.carousel-item-img');
        indexImg = index;
        changeImage();
        delayInterval();
    });
});

function nextImage() {
    indexImg++;
    changeImage();
}

function backImage() {
    indexImg--;
    changeImage();
}

let firstLocation = 0;
function nextEventFL() {
    firstLocation += 244;
    $(".fl-body-grid").attr("style", `transform: translate3d(-${firstLocation}px, 0, 0)`);
}

function backEventFL() {
    firstLocation -= 244;
    $(".fl-body-grid").attr("style", `transform: translate3d(-${firstLocation}px, 0, 0)`);
}

window.onresize = function() {
    let width = Math.min(document.documentElement.clientWidth, window.innerWidth || 0);
    resizeBanner(width);
    resizeIconContainer(width);
}

window.addEventListener('load', function () {
    let width = Math.min(document.documentElement.clientWidth, window.innerWidth || 0);
    resizeBanner(width);
    resizeIconContainer(width);
});

function resizeBanner(width) {
    if (width < 750) {
        let bannerWidth = width;
        let minusHeight = (750 - width) / 4; 
        let bannerHeight = 286 - minusHeight;
        $("#banner-resize").attr('style', `width: ${bannerWidth}px !important; 
                                           height: ${bannerHeight}px !important`
                                );
    } else {
        $("#banner-resize").removeAttr('style');
    }
}

function resizeIconContainer(width) {
    if (width < 750) {
        let iconWidth = width;
        $(".common-container").attr('style', `width: ${iconWidth}px !important;`);
    } else {
        $(".common-container").removeAttr('style');
    }
}