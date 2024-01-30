
$(document).ready(function () {

    $('.slider-1').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        vertical: true,
    });

    const slickNext = document.querySelector('.slider-1 .slick-next')
    const slickPrev = document.querySelector('.slider-1 .slick-prev')

    slickPrev.innerText = '';
    slickNext.innerText = '';

    const arrowImage = document.createElement('img');
    arrowImage.src = './img/share/arrow-left.svg';
    arrowImage.alt = '';
    slickPrev.appendChild(arrowImage.cloneNode(true));
    slickNext.appendChild(arrowImage);

});

// $(document).ready(function () {

//     function initSlider() {
//         $('.slider-2').slick({
//             infinite: false,
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             responsive: [
//                 {
//                     breakpoint: 1310,
//                     settings: {
//                         slidesToShow: 1,
//                         slidesToScroll: 1,
//                     }
//                 }
//             ]
//         });
//     }

//     initSlider();

//     const slickNext = document.querySelector('.slider-2 .slick-next');
//     const slickPrev = document.querySelector('.slider-2 .slick-prev');

//     slickPrev.innerText = '';
//     slickNext.innerText = '';

//     const arrowImage = document.createElement('img');
//     arrowImage.src = './img/share/arrow-left.svg';
//     arrowImage.alt = '';
//     slickPrev.appendChild(arrowImage.cloneNode(true));
//     slickNext.appendChild(arrowImage);

//     $(window).resize(function () {
//         // Destroy the existing slick slider
//         $('.slider-2').slick('unslick');
//         // Re-initialize the slick slider
//         initSlider();
//     });

// });
$(document).ready(function () {

    function initSlider() {
        $('.slider-2').slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1310,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }

    function destroySlider() {
        if ($('.slider-2').hasClass('slick-initialized')) {
            $('.slider-2').slick('unslick');
        }
    }

    function setupSliderArrows() {
        const slickNext = document.querySelector('.slider-2 .slick-next');
        const slickPrev = document.querySelector('.slider-2 .slick-prev');

        slickPrev.innerText = '';
        slickNext.innerText = '';

        const arrowImage = document.createElement('img');
        arrowImage.src = './img/share/arrow-left.svg';
        arrowImage.alt = '';
        slickPrev.appendChild(arrowImage.cloneNode(true));
        slickNext.appendChild(arrowImage);
    }

    initSlider();
    setupSliderArrows();

    $(window).resize(function () {
        destroySlider();
        initSlider();
        setupSliderArrows();
    });

});
$(document).ready(function () {-3

    function initSlider() {
        $('.slider-2-2').slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1310,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }

    function destroySlider() {
        if ($('.slider-2-2').hasClass('slick-initialized')) {
            $('.slider-2-2').slick('unslick');
        }
    }

    function setupSliderArrows() {
        const slickNext = document.querySelector('.slider-2-2 .slick-next');
        const slickPrev = document.querySelector('.slider-2-2 .slick-prev');

        slickPrev.innerText = '';
        slickNext.innerText = '';

        const arrowImage = document.createElement('img');
        arrowImage.src = './img/share/arrow-left.svg';
        arrowImage.alt = '';
        slickPrev.appendChild(arrowImage.cloneNode(true));
        slickNext.appendChild(arrowImage);
    }

    initSlider();
    setupSliderArrows();

    $(window).resize(function () {
        destroySlider();
        initSlider();
        setupSliderArrows();
    });

});
$(document).ready(function () {

    function initSlider() {
        $('.slider-2-3').slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1310,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }

    function destroySlider() {
        if ($('.slider-2-3').hasClass('slick-initialized')) {
            $('.slider-2-3').slick('unslick');
        }
    }

    function setupSliderArrows() {
        const slickNext = document.querySelector('.slider-2-3 .slick-next');
        const slickPrev = document.querySelector('.slider-2-3 .slick-prev');

        slickPrev.innerText = '';
        slickNext.innerText = '';

        const arrowImage = document.createElement('img');
        arrowImage.src = './img/share/arrow-left.svg';
        arrowImage.alt = '';
        slickPrev.appendChild(arrowImage.cloneNode(true));
        slickNext.appendChild(arrowImage);
    }

    initSlider();
    setupSliderArrows();

    $(window).resize(function () {
        destroySlider();
        initSlider();
        setupSliderArrows();
    });

});


// $(document).ready(function () {

//     $('.slider-3').slick({
//         infinite: false,
//         slidesToShow: 3,
//         slidesToScroll: 3,
//     });

//     const slickNext = document.querySelector('.slider-3 .slick-next')
//     const slickPrev = document.querySelector('.slider-3 .slick-prev')

//     slickPrev.innerText = '';
//     slickNext.innerText = '';

//     const arrowImage = document.createElement('img');
//     arrowImage.src = './img/share/arrow-left.svg';
//     arrowImage.alt = '';
//     slickPrev.appendChild(arrowImage.cloneNode(true));
//     slickNext.appendChild(arrowImage);

// });

$(document).ready(function () {

    function initSlider() {
        $('.slider-3').slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1310,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }

    function destroySlider() {
        if ($('.slider-3').hasClass('slick-initialized')) {
            $('.slider-3').slick('unslick');
        }
    }

    function setupSliderArrows() {
        const slickNext = document.querySelector('.slider-3 .slick-next');
        const slickPrev = document.querySelector('.slider-3 .slick-prev');

        slickPrev.innerText = '';
        slickNext.innerText = '';

        const arrowImage = document.createElement('img');
        arrowImage.src = './img/share/arrow-left.svg';
        arrowImage.alt = '';
        slickPrev.appendChild(arrowImage.cloneNode(true));
        slickNext.appendChild(arrowImage);
    }

    initSlider();
    setupSliderArrows();

    $(window).resize(function () {
        destroySlider();
        initSlider();
        setupSliderArrows();
    });

});