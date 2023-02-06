<template>
  <div class="footer-links flex flex-wrap sm:flex-nowrap">
    <div class="col w-3/6 py-4">
      <div>About</div>
      <ul>
        <li>
          <a class="hover:text-orange-200 hover:font-semibold" href=""
            >Who are we</a
          >
        </li>
        <li>
          <a class="hover:text-orange-200 hover:font-semibold" href=""
            >Our history</a
          >
        </li>
        <li>
          <a class="hover:text-orange-200 hover:font-semibold" href=""
            >Our leaders</a
          >
        </li>
      </ul>
    </div>
    <div class="col w-3/6 py-4">
      <div>Careers</div>
      <ul>
        <li>
          <a class="hover:text-orange-200 hover:font-semibold" href=""
            >Our Core</a
          >
        </li>
        <li>
          <a class="hover:text-orange-200 hover:font-semibold" href=""
            >Life at DBC</a
          >
        </li>
        <li>
          <a class="hover:text-orange-200 hover:font-semibold" href=""
            >Join us</a
          >
        </li>
      </ul>
    </div>
    <div class="col w-3/6 py-4">
      <div>Brands</div>
      <ul class="links">
        <li>
          <a class="hover:text-orange-200 hover:font-semibold" href=""
            >Offer to Own</a
          >
        </li>
        <li>
          <a class="hover:text-orange-200 hover:font-semibold" href=""
            >Conveyancing.com.au</a
          >
        </li>
        <li>
          <a class="hover:text-orange-200 hover:font-semibold" href=""
            >Rapid Building Inspections</a
          >
        </li>
        <li>
          <a class="hover:text-orange-200 hover:font-semibold" href=""
            >First Class Legal</a
          >
        </li>
      </ul>
    </div>
    <div class="col w-3/6 py-4">
      <div>Investors</div>
      <ul>
        <li>
          <a class="hover:text-orange-200 hover:font-semibold" href=""
            >Shareholders</a
          >
        </li>
        <li>
          <a class="hover:text-orange-200 hover:font-semibold" href=""
            >Corporate governance</a
          >
        </li>
        <li>
          <a class="hover:text-orange-200 hover:font-semibold" href=""
            >Report & Resources</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
div.footer-links {
  max-width: 940px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  div.col {
    div {
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: $primary;
    }
    ul {
      list-style-type: none;
      padding: 0;
      margin: 8px 0;

      li {
        font-family: "Roboto", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: $gray;
        margin-top: 16px;
        overflow-wrap: break-word;
      }
    }
  }
}
</style>
