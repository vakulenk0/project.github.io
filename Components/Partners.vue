<template>
  <div class="partners_block my-5">
    <h2 class="partners-title">С нами работают</h2>
    <p class="partners-description mb-3">Десятки компаний доверяют нам самое ценное, что у них есть в интернете
      свои<br> сайты. Мы делаем всё, чтобы наше сотрудничество было долгим.</p>
    <div class="part-slider partners-list-slider-1" v-on:click="sliders">
      <div class="partner-slide">
        <img src="../img/slide/1.jpg" alt="partner-logo-1" class="partner-logo-img">
      </div>
      <div class="partner-slide">
        <img src="../img/slide/8.jpg" alt="partner-logo-2" class="partner-logo-img">
      </div>
      <div class="partner-slide">
        <img src="../img/slide/12.png" alt="partner-logo-6" class="partner-logo-img">
      </div>
      <div class="partner-slide">
        <img src="../img/slide/2.webp" alt="partner-logo-2" class="partner-logo-img">
      </div>
      <div class="partner-slide">
        <img src="../img/slide/3.webp" alt="partner-logo-3" class="partner-logo-img">
      </div>
      <div class="partner-slide">
        <img src="../img/slide/4.webp" alt="partner-logo-4" class="partner-logo-img">
      </div>
      <div class="partner-slide">
        <img src="../img/slide/5.png" alt="partner-logo-5" class="partner-logo-img">
      </div>
      <div class="partner-slide">
        <img src="../img/slide/6.webp" alt="partner-logo-6" class="partner-logo-img">
      </div>
    </div>
    <div class="part-slider partners-list-slider-2">
      <div class="partner-slide">
        <img src="../img/slide/7.jpg" alt="partner-logo-1" class="partner-logo-img">
      </div>
      <div class="partner-slide">
        <img src="../img/slide/3.webp" alt="partner-logo-3" class="partner-logo-img">
      </div>
      <div class="partner-slide">
        <img src="../img/slide/8.jpg" alt="partner-logo-2" class="partner-logo-img">
      </div>
      <div class="partner-slide">
        <img src="../img/slide/9.png" alt="partner-logo-3" class="partner-logo-img">
      </div>
      <div class="partner-slide">
        <img src="../img/slide/10.gif" alt="partner-logo-4" class="partner-logo-img">
      </div>
      <div class="partner-slide">
        <img src="../img/slide/4.webp" alt="partner-logo-4" class="partner-logo-img">
      </div>
      <div class="partner-slide">
        <img src="../img/slide/11.jpg" alt="partner-logo-5" class="partner-logo-img">
      </div>
      <div class="partner-slide">
        <img src="../img/slide/12.png" alt="partner-logo-6" class="partner-logo-img">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sliders",
  data(){
    return{
      className:'1'
    };
  },
  methods: {
    sliders() {
      $(document).ready(function () {
        $('.part-slider').slick({
          arrows: false,
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2500,
          mobileFirst:true,
          responsive: [
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 1
              }
            }
          ]
        });
      });
    }
  }
};
</script>

<style>
/*   partners   */

.partner-logo-img {
  max-width: 350px;
  width: 100%;
}


/* partner */

.partners_block {
  overflow: hidden;
  text-align: center;
  margin-bottom: 42px;
}

.partners-list-slider-1 {
  width: auto;
  margin: 0 10px;
  position: relative;
  right: 25%;
}

.partner-slide {
  border-width: 2px;
  border-radius: 10px;
  border-style: solid;
  border-color: black;
  display: inline-block;
  margin: 5px;
}

.partners_block img {
  border-radius: 10px;
}

/* часть димы */

@media screen and (max-width: 575px) {
  .text-sup {
    font-size: 35px;
  }

  .support-services {
    width: 90%;
    height: 900px;
    flex-direction: row;
    justify-content: space-between;
  }

  .support {
    margin-left: 15px;
  }

  .element-line-support1,
  .element-line-support2 {
    flex-direction: column;
  }

  .help {
    margin-top: 250px;
  }

  .element-support {
    height: 250px;
    max-width: 175px;
    min-width: 120px;
  }

  .divSupport1 {
    width: 80%;
  }

  .divlaptop {
    flex-direction: column;
  }



  .div2-expertise {
    display: none;
  }
}

@media screen and (min-width: 855px) and (max-width: 1155px) {
  .text-help {
    font-size: 11px;
  }
}

@media screen and (min-width: 769px) and (max-width: 855px) {
  .text-help {
    font-size: 10px;
  }
}

@media screen and(max-width: 769px) {
  .div1-expertise {
    width: 200px;
    height: 200px;
  }

  .div1-cases,
  .div2-cases {
    flex-direction: column;
  }
}

@media screen and(max-width: 1330px) {
  #div2 {
    flex-direction: column;
  }
}
</style>