<script>
import CareersContent from '../components/CareersContent.vue'
import Hero from '@/components/Hero.vue'
import Footer from '../components/Footer.vue';

export default {
  components: {
    Hero,
    CareersContent,
    Footer
  }
}
</script>


<template>
    <div>
      <Hero image="careers_hero.svg"/>
      <CareersContent/>
      <Footer/>
      </div>
</template>
