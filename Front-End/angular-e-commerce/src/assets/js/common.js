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

    // $(window).resize(function () {
    //     let win = $(this);
    //     let height = win.height();
    //     let width = win.width();
    //     if (width < 980) {
    //         console.log(width);
    //     }
    // });
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
    let width = window.innerWidth;
    //console.log(width);
    resizeBanner(width);
}

// $("#banner-resize").load(function() {
//     console.log('this is first load');
//     let width = window.innerWidth;
//     resizeBanner(width);
// });

// $("#banner-resize").on('load', function(){
    
//     let width = window.innerWidth;
//     console.log(width);
//     resizeBanner(width);
// });

window.addEventListener('load', function () {
    let width = window.innerWidth;
    console.log(width);
    resizeBanner(width);
});

function resizeBanner(width) {
    if (width < 750) {

        let bannerWidth = width - 40;
        let minusHeight = (750 - width) / 4; 
        let bannerHeight = 286 - minusHeight;
        console.log(bannerHeight);
        //let bannerHeight = 286;
        //$(document).ready(function(){
            //$("#banner-resize").width(bannerWidth);            
        //});
        $("#banner-resize").attr('style', `width: ${bannerWidth}px !important; 
                                           height: ${bannerHeight}px !important`
                                );
    } else {
        $("#banner-resize").removeAttr('style');
    }
}