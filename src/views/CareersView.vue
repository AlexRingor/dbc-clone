<script>
import CareersContent from "../components/CareersContent.vue";
import HeroComponent from "@/components/HeroComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
  components: {
    HeroComponent,
    CareersContent,
    FooterComponent,
  },
};
</script>

<template>
  <div>
    <HeroComponent image="careers_hero.svg" />
    <CareersContent />
    <FooterComponent />
  </div>
</template>
