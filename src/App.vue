<template>
  <Header/>
  <Mobile-nav/>
  <Achievement/>
  <Expertise/>
  <Tariff/>
  <OurDev/>
  <Team/>
  <Cases/>
  <Partners/>
  <FAQ/>
  <Footer/>
</template>

<script>

import Header from "../Components/Header.vue";
import MobileNav from "../Components/MobileNav";
import Achievement from "../Components/Achievement";
import Expertise from "../Components/Expertise";
import Tariff from "../Components/Tariff";
import OurDev from "../Components/OurDev";
import Team from "../Components/Team";
import Cases from "../Components/Cases";
import Partners from "../Components/Partners";
import FAQ from "../Components/FAQ";
import Footer from "../Components/Footer";

export default {
  components: {
    Header,
    MobileNav,
    Achievement,
    Expertise,
    Tariff,
    OurDev,
    Team,
    Cases,
    Partners,
    FAQ,
    Footer
  }

}
</script>

<style>



</style>