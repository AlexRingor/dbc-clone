<script>
import IconComponent from "@/components/icons/IconComponent.vue";

export default {
  components: {
    IconComponent,
  },
};
</script>

<template>
  <div class="agents wrapper md:flex">
    <div class="left-col col md:w-1/2 px-8">
      <h6>Agents</h6>
      <h1 class="text-lg font-bold md:text-4xl">
        Your New Digital Offer Management & Communication Platform
      </h1>
      <p class="text-sm mb-8 md:text-base">
        Offer to Own is a new digital offer management and communication
        platform designed for the agent who is always on the go. Save time, stay
        informed and in control with Offer to Own.
      </p>
      <div class="agents-content-wrapper">
        <div class="agents-item">
          <IconComponent
            class="min-w-[45px]"
            icon="icon_thumbs.svg"
            alt="thumbs up"
            width="45"
          />
          <div class="text-base font-bold text-dbcblue ml-4">
            <h3 class="mb-4 md:text-xl">Completely Free</h3>
            <p class="text-sm md:text-base">
              Offer to Own is completely free. There are no hidden costs or
              subscription plans. Save money and keep your own costs down.
            </p>
          </div>
        </div>
        <div class="agents-item">
          <IconComponent
            class="min-w-[45px]"
            icon="icon_cloud.svg"
            alt="cloud"
            width="45"
          />
          <div class="text-base font-bold text-dbcblue ml-4">
            <h3 class="mb-4 md:text-xl">CRM Integration</h3>
            <p class="text-sm md:text-base">
              Less time spent on admin, more time to focus on what really
              matters with a digital solution that integrates with your CRMs.
            </p>
          </div>
        </div>
        <div class="agents-item">
          <IconComponent
            class="min-w-[45px]"
            icon="icon_bell.svg"
            alt="bell"
            width="45"
          />
          <div class="text-base font-bold text-dbcblue ml-4">
            <h3 class="mb-4 md:text-xl">Real-time notifications</h3>
            <p class="text-sm md:text-base">
              Get updates on new offers and any updated offers with alerts in
              Offer to Own and push notification sent by SMS.
            </p>
          </div>
        </div>
        <div class="agents-item">
          <IconComponent
            class="min-w-[45px]"
            icon="icon_communication.svg"
            alt="communication"
            width="45"
          />
          <div class="text-base font-bold text-dbcblue ml-4">
            <h3 class="mb-4 md:text-xl">Improved Communication</h3>
            <p class="text-sm md:text-base">
              Get the best results possible through streamlined direct
              communication between buyers & agents.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="right-col col hidden md:flex md:w-1/2">
      <img src="@/assets/images/agents_sold.svg" alt="sold" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

div.agents {
  //     display: flex;
  .col {
    box-sizing: border-box;
    // width: 50%;
  }

  .left-col {
    h6 {
      margin: 32px 0 8px 0;
      color: $gold;
    }

    h1 {
      margin-bottom: 16px;
      color: $primary;
    }

    p {
      color: $gray;
    }

    .agents-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 22px;
    }
  }

  .right-col {
    img {
      width: 100%;
      object-fit: cover;
      height: 100%;
    }
  }
}
</style>
