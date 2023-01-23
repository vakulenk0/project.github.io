function faq() {
    let questions = document.getElementsByClassName("question");
    let questions_div = document.getElementsByClassName("question-answer");
    for (let i = 0; i < questions_div.length; i++) {
        questions_div[i].style.width = (questions[i].offsetWidth+28).toString()+"px";
        questions_div[i].addEventListener("click", function () {
            questions_div[i].classList.toggle("active-question-answer");
            if (!questions_div[i].className.includes("active-question-answer")) {
                questions_div[i].style.width = (questions[i].offsetWidth + 28).toString() + "px";
            }
            else {
                questions_div[i].style.width = "1250px"
                for (let j = 0; j < questions_div.length; j++) {
                    if (j !== i && questions_div[j].className.includes("active-question-answer")) {
                        questions_div[j].classList.toggle("active-question-answer");
                        questions_div[j].style.width = (questions[j].offsetWidth + 28).toString() + "px";
                    }
                }
            }
        });
    }
}

window.addEventListener("DOMContentLoaded", function () {
    let red = document.getElementById('tt');
    if(window.screen.width <= 1040){
        red.style.display = "none";
    }
    $(".reviews-slider").on("init", function () {
        $(".reviews-slide-current-num").text("0" + 1);
    });
    $(".reviews-slider").on("afterChange", function (event, slick, currentSlide) {
        $(".reviews-slide-current-num").text("0" + (currentSlide + 1));
    });
    $(".reviews-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        arrows: true,
        dots: false,
        fade: true,
        adaptiveHeight: true,
        easing: true,
        appendArrows: ".reviews-slider-arrows",
        prevArrow: "<button class=\"slick-prev\"></button>",
        nextArrow: "<button class=\"slick-next\"></button>",
    });
    $(".partners-list-slider-1").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        autoplay: true,
        speed: 300,
    });
    $(".partners-list-slider-2").slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
    });
    faq();
});