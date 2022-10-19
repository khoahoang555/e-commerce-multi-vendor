let indexImg = 0;
changeImage();

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
    });

    $('#btn-back').on('click', function(event) {
        backImage();
    });

    $('.carousel-number').on('click', '.carousel-item-img', function() {
        let index = $(this).index('.carousel-item-img');
        indexImg = index;
        changeImage();
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
});

function resizeBanner(width) {
    if (width < 750) {
        let bannerWidth = width - 40;
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
    console.log(width);
    if (width < 750) {
        let iconWidth = width - 40;
        $(".common-container").attr('style', `width: ${iconWidth}px !important;`);
    } else {
        $(".common-container").removeAttr('style');
    }
}