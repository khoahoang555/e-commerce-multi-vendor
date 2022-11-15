let indexImg = 0;
let timeDelay = 3000;
let autoRunSlide = null;
let timer = null;
let sliderIndex = 0;
let timeEvent = 0;

changeImage();
openInterval();
getTimeEvent();
startTimeEvent();

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
    $("#popup-category").mouseenter(function() {
        $(".modal-page").css("display", "block");
    });

    $("#popup-category").mouseleave(function() {
        $(".modal-page").css("display", "none");
    });

    $('#btn-next').on('click', function(event) {
        nextImage();
        delayInterval();
    });

    $('#btn-back').on('click', function(event) {
        backImage();
        delayInterval();
    });

    // $('#btn-back-event').on('click', function(event) {
    //     backEventFL();
    // });

    // $('.btn-next-event').on('click', function(event) {
    //     //console.log($('.btn-next-event').attr('aria-label'));
    //     //console.log($(this).attr('aria-label'));
    //     const idEvent = $(this).attr('aria-label')
    //     nextEventFL(idEvent);
    // });
    

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

window.onresize = function() {
    let width = Math.min(document.documentElement.clientWidth, window.innerWidth || 0);
    resizeBanner(width);
    resizeIconContainer(width);
}

window.addEventListener('load', function () {
    let width = Math.min(document.documentElement.clientWidth, window.innerWidth || 0);
    resizeBanner(width);
    resizeIconContainer(width);
    //disableBtnBackFL();
    //disableBtnNextFL();
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

// function nextEventFL(id) {
//     sliderIndex += 244;
//     $(".event-body-grid-fl").attr("style", `transform: translate3d(-${sliderIndex}px, 0, 0)`);
//     enableBtnBackFL();
//     disableBtnNextFL(id);
    
//     console.log("demo");
// }

// function backEventFL() {
//     sliderIndex -= 244;
//     $(".event-body-grid-fl").attr("style", `transform: translate3d(-${sliderIndex}px, 0, 0)`);
//     enableBtnNextFL();
//     disableBtnBackFL();
// }

// function disableBtnNextFL(id) {
//     $(document).ready(function(){
//         let widthCommonContainer = $(".common-container").width();
//         let widthTotalItem = getTotalWidthItemFL(id);
        
//         if (((widthCommonContainer + sliderIndex) >= widthTotalItem) || (widthTotalItem == 0)) {
//             $(".direct-next").attr("style", "display: none;");
//         }
//     });  
// }

// function disableBtnBackFL() {
//     $(document).ready(function(){
//         if (sliderIndex === 0) {
//             $(".direct-back").attr("style", "display: none");
//         }
//     });  
// }

// function enableBtnNextFL() {
//     $(document).ready(function(){
//         $(".direct-next").removeAttr('style');
//     });
// }

// function enableBtnBackFL() {
//     $(document).ready(function(){
//         $(".direct-back").removeAttr('style');
//     });
// }

// function getTotalWidthItemFL(id) {
//     return $("#card-container-" + id).length * 244;
// }

function getTimeEvent() {
    $(document).ready(function(){
        let time = $("#timeEvent").val();
        timeEvent = new Date(time).getTime();
    });
}

function startTimeEvent() {
    var startEvent = setInterval(() => {
        let now = new Date().getTime();
        var distance = timeEvent - now;
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        $(document).ready(function(){
            $("#hour").text(String(hours).length < 2 ? '0' + hours : hours);
            $("#minute").text(String(minutes).length < 2 ? '0' + minutes : minutes);
            $("#second").text(String(seconds).length < 2 ? '0' + seconds : seconds)
        });
    }, 1000);
}



