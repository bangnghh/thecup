$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:30,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            1024:{
                items:3
            },
            1366:{
                items:3
            },
            1600:{
                items:4
            }
        }
    })
    //Carousel
    $('.btn-carousel-prev').click(function() {
        $(".carousel-holder .owl-carousel .owl-prev").trigger('click');
    });
    $('.btn-carousel-next').click(function() {
        $(".carousel-holder .owl-carousel .owl-next").trigger('click');
    });

    //Change play button to pause and revert back
    // $('#playBtn').click(function(){
    //     if($(this).find('span').text().trim() == 'play_arrow'){
    //         $(this).find('span').text('pause');
    //         $(this).attr('id','pauseBtn');
    //     } else {
    //         $(this).find('span').text('play_arrow');
    //         $(this).attr('id','playBtn');
    //     }
    // });
    $(document).on('click', '#purchaseHistory', function() {
        console.log("History Clicked!");
        popupPurchase.style.visibility = 'visible';
        //progress.style.width = "50%";
    });
});

// Sound player


