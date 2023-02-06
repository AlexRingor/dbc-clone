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
        <div class="footer_wrapper flex flex-col p-8 md:flex-row">
            <DBCVue />
            <FooterLinksVue />
        </div>
        <CopyrightVue />
    </footer>
</template>
