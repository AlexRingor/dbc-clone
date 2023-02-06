<script>
import HeroComponent from "../components/HeroComponent.vue";
import OfferToOwn from "../components/OfferToOwn.vue";
import CityDivider from "../components/CityDivider.vue";
import AgentsComponent from "../components/AgentsComponent.vue";
import BuyersComponent from "../components/BuyersComponent.vue";
import MeetTheTeamVue from "../components/MeetTheTeam.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
  components: {
    HeroComponent,
    OfferToOwn,
    CityDivider,
    AgentsComponent,
    BuyersComponent,
    MeetTheTeamVue,
    FooterComponent,
  },
};
</script>

<template>
  <main>
    <HeroComponent image="homepage_hero.svg" />
    <OfferToOwn />
    <CityDivider />
    <AgentsComponent />
    <BuyersComponent />
    <MeetTheTeamVue />
    <FooterComponent />
  </main>
</template>
