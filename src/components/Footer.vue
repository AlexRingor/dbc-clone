<script>
import DBCVue from './footer-bits/DBC.vue'
import FooterLinksVue from './footer-bits/FooterLinks.vue'
import CopyrightVue from './footer-bits/Copyright.vue'

export default {
    components: {
        DBCVue,
        FooterLinksVue,
        CopyrightVue
    }
}
</script>


<template>
    <footer class="footer">
        <div class="footer_wrapper">
            <DBCVue />
            <FooterLinksVue />
        </div>
        <CopyrightVue />
    </footer>
</template>

<style lang="scss" scoped>
footer .footer_wrapper {
    display: flex;
}
</style>