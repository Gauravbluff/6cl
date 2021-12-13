$('.banner-main').owlCarousel({
    loop:true,
    margin:10,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay:false,
    animateOut: 'fadeOut',
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$('.college').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})