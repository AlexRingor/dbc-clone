<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import routes_json from './links.json'
import Careers from './views/CareersView.vue'

export default {
    data() {
        return {
            routes: routes_json
        };
    },
    methods: {
      navChange(linkID) {
        console.log('clicked', this.routes[0].path)
        this.routes[0].path = "/home"
      }
    },
    components: { Careers }
}
</script>

<template>
    <div>
      <header>
          <div class="navigation wrapper">
            <!-- <RouterLink to="/"> -->
              <img alt="dbc logo" src="@/assets/images/DeepBlueCompanyLogo.svg"/>
            <!-- </RouterLink> -->
              <ul>
                  <li v-for="link in routes" :key="link.id">
                      <RouterLink :to="link.path">{{link.name}}</RouterLink>
                  </li>
              </ul>
          </div>
          
      </header>
      <RouterView />
    </div>

</template>

<style lang="scss">
@import '@/assets/base.css';
@import '@/assets/scss/variables';

$primary: #182F57;

.navigation {
    .router-link-exact-active {
      border-bottom: 2px solid #E3AB63;
      padding-bottom: 3px;
    }
  margin-top: 32px;
  padding: 1% 0;
  background-color: white;
  display: flex;
  justify-content: space-between;
  
  ul li {
    margin-left: 8px;
    display: inline-block;
    margin-right: 16px;
    a {
      color: $primary;
      text-decoration: none;
  }
  }
}
body {
  background-color: white;
}
#app {
  background-color: white;
  min-height: 100vh;
  font-weight: normal;
}

.wrapper {
    max-width: 1440px;
    margin: 0 auto;
}
</style>
