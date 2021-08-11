$(document).ready(function() {
    $('.menu').click(function() {
        $('.menu').toggleClass('open-menu');
    });
});





var nav1 = document.querySelector('.nav1');
var nav2 = document.querySelector('.nav2');
var nav3 = document.querySelector('.nav3');
var nav4 = document.querySelector('.nav4');

var home = document.querySelector('.home');
var appswork = document.querySelector('.appswork');
var order = document.querySelector('.order');
var footer = document.querySelector('.footer');

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: "smooth"
    })
}

nav1.addEventListener('click', () => {
    scrollTo(home);
})

nav2.addEventListener('click', () => {
    scrollTo(appswork);
})

nav3.addEventListener('click', () => {
    scrollTo(order);
})

nav4.addEventListener('click', () => {
    scrollTo(footer);
})


var button1 = document.querySelector('.button1');
var button2 = document.querySelector('.button2');
var button3 = document.querySelector('.button3');
var button4 = document.querySelector('.button4');

button1.onclick = function (e) {
    e.preventDefault()
}

button2.onclick = function (e) {
    e.preventDefault()
}

button3.onclick = function (e) {
    e.preventDefault()
}

button4.onclick = function (e) {
    e.preventDefault()
}


$(function () {
    $(window).scroll(function () {
        $('.text_appswork1').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInRight");
            }
        });
    });
})

$(function () {
    $(window).scroll(function () {
        $('.mockup1').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInLeft");
            }
        });
    });
})

$(function () {
    $(window).scroll(function () {
        $('.mockup2').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInRight");
            }
        });
    });
})

$(function () {
    $(window).scroll(function () {
        $('.text_appswork2').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInLeft");
            }
        });
    });
})

$(function () {
    $(window).scroll(function () {
        $('.text_order').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+750) {
                $(this).addClass("fadeInUp");
            }
        });
    });
})



$(document).ready(function() {
	$('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.navigates').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
	});
});