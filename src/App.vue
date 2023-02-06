<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import routes_json from './links.json'
import Careers from './views/CareersView.vue'
import './style.css'

export default {
    data() {
        return {
            routes: routes_json,
            mobileNav: false,
        };
    },
    created() {
      
    },
    methods: {
      navChange(linkID) {
        this.routes[0].path = "/home"
      },
      toggleNav() {
        this.mobileNav = !this.mobileNav
      },
    },
    components: { Careers },
    
}
</script>

<template>
    <div>
      <header>
          <div class="navigation wrapper">
            <!-- <RouterLink to="/"> -->
              <img alt="dbc logo" src="@/assets/images/DeepBlueCompanyLogo.svg"/>
            <!-- </RouterLink> -->
              <ul :class="{ showNav: mobileNav }" class="hidden bg-white z-50 w-full shadow-lg shadow-slate-400 items-left fixed flex-col md:flex-row md:flex md:item-right md:relative md:shadow-none md:justify-end">
                <img class="ml-4 pt-4 md:hidden" alt="dbc logo" src="@/assets/images/DeepBlueCompanyLogo.svg" width="200"/>
                  <li @click="toggleNav" class="py-4 px-2" v-for="link in routes" :key="link.id">
                      <RouterLink class="w-full inline-block hover:bg-orange-200" :to="link.path">{{link.name}}</RouterLink>
                  </li>
              </ul>
              <div :class="{ showNav: mobileNav }" class="z-50 mr-4  md:hidden flex items-center">
                <button :class="{hidden:mobileNav}" @click="toggleNav" class="text-gray-500 w-10 h-10 relative focus:outline-none bg-white outline-none mobile-menu-button hover:text-gray-500 hover:bg-gray-100 rounded-md ">
                  <div class="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                    <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out" :class="{'rotate-45': open,' -translate-y-1.5': !open }"></span>
                    <span aria-hidden="true" class="block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out" :class="{'opacity-0': open } "></span>
                    <span aria-hidden="true" class="block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out" :class="{'-rotate-45': open, ' translate-y-1.5': !open}"></span>
                </div>
                </button>
                <button :class="{hidden:!mobileNav}" @click="toggleNav" type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 md:hidden">
                  <span class="sr-only">Close menu</span>
                  <!-- Heroicon name: outline/x -->
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
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
      // border-bottom: 2px solid #E3AB63;
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
  .showNav {
    display: flex !important;
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
