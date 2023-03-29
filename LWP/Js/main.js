window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__Lista'),{
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        dots: '.carousel__indicadores',
        arrows: {
        prev: '.carousel_anterior',
        next: '.carousel_siguiente'
        }
        // responsive: [
        //     {
        //       // screens greater than >= 775px
        //     breakpoint: 400,
        //     settings: {
        //         // Set to `auto` and provide item width to adjust to viewport
        //         slidesToShow: 2,
        //         slidesToScroll: 2
        //     }
        //     },{
        //       // screens greater than >= 1024px
        //     breakpoint: 800,
        //     settings: {
        //         slidesToShow: 4,
        //         slidesToScroll: 4,
        //     }
        // }
        // ]
    });

});

