<script>
import DBCVue from "./footer-bits/DBC.vue";
import FooterLinksVue from "./footer-bits/FooterLinks.vue";
import CopyrightComponent from "./footer-bits/CopyrightComponent.vue";

export default {
  components: {
    DBCVue,
    FooterLinksVue,
    CopyrightComponent,
  },
};
</script>

<template>
  <footer class="footer">
    <div class="footer_wrapper flex flex-col p-8 md:flex-row justify-center">
      <DBCVue />
      <FooterLinksVue />
    </div>
    <CopyrightComponent />
  </footer>
</template>
