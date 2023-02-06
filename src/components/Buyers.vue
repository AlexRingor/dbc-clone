<script>
import Icon from '@/components/icons/Icon.vue'

export default {
    components: {
        Icon
    }
}
</script>

<template>
    <div class="buyers wrapper">
        <div class="left-col col hidden md:flex">
            <img src="@/assets/images/buyers_couple.png" alt="couple">
        </div>
        <div class="right-col col md:w-1/2">
            <h6>Buyers</h6>
            <h1 class="text-lg font-bold md:text-4xl">
                Your New Digital Offer Management & Communication Platform  
            </h1>
            <p class="text-sm mb-8 md:text-base">
                Offer to Own is a new digital offer management and communication platform designed for the agent who is always on the go. Save time, stay informed and in control with Offer to Own.
            </p>
            <div class="buyers-content-wrapper">
                <div class="buyers-item">
                    <div>
                        <Icon icon="icon_offers.png" alt="quick offers" width="41"/>
                    </div>
                    <div class="text-base font-bold text-dbcblue ml-4">
                        <h3 class="mb-4 md:text-xl">Quick offers</h3>
                        <p class="text-sm md:text-base">Offer to Own makes submitting offers a simple and convenient process.</p>
                    </div>
                </div>
                <div class="buyers-item">
                    <div>
                        <Icon icon="icon_instant_notif.png" alt="instant notifications" width="41"/>
                    </div>
                    <div class="text-base font-bold text-dbcblue ml-4">
                        <h3 class="mb-4 md:text-xl">Instant Notifications  </h3>
                        <p class="text-sm md:text-base">Don’t get left in the dark, track your offer’s progress with real time notifications.</p>
                    </div>
                </div>
                <div class="buyers-item">
                    <div>
                        <Icon icon="icon_confidence.png" alt="confidence" width="41"/>
                    </div>
                    <div class="text-base font-bold text-dbcblue ml-4">
                        <h3 class="mb-4 md:text-xl">Confidence</h3>
                        <p class="text-sm md:text-base">Access support from a trusted conveyancing team as well as qualified building and pest inspectors .</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

div.buyers {
    background: $light-gray;
    display: flex;

    .right-col {
        padding-right: 32px;
        padding-left: 32px;

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

        .buyers-item {
            display: flex;
            align-items:flex-start;
            margin-bottom: 22px;
            .buyers-item-text {
                margin: 0 0 8px 8px;

                h3 {
                    margin: 8px 0 4px 0;
                }
            }
        }
    }

    .left-col {
        img {
            width: 100%;
            object-fit: cover;
            height: 100%;
        }
    }
}
</style>