<template>
  <div class="copyright">
    <div class="message">
      Copyrights © 2021 Deep Blue Company. All rights reserved.
    </div>
    <div class="terms">
      <ul>
        <li>Sitemap</li>
        <li>Privacy Policy</li>
        <li>Terms and Conditions</li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/variables";
div.copyright {
  height: 109px;
  padding: 0 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid $light-gray;
  .terms {
    ul li {
      display: inline-block;
      margin-left: 32px;
    }
  }
}
</style>
