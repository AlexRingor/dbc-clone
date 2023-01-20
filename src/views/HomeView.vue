<script>
import Hero from "../components/Hero.vue";
import OfferToOwn from "../components/OfferToOwn.vue";
import CityDivider from '../components/CityDivider.vue'
import Agents from '../components/Agents.vue'
import Buyers from "../components/Buyers.vue";
import MeetTheTeamVue from "../components/MeetTheTeam.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Hero,
    OfferToOwn,
    CityDivider,
    Agents,
    Buyers,
    MeetTheTeamVue,
    Footer
}
}
</script>

<template>
  <main>
    <Hero image="homepage_hero.svg"/>
    <OfferToOwn/>
    <CityDivider/>
    <Agents/>
    <Buyers/>
    <MeetTheTeamVue/>
    <Footer/>
  </main>
</template>
