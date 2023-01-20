<script>
import IconQuickOffersVue from '@/components/icons/IconQuickOffers.vue'
import IconInstantNotifVue from '@/components/icons/IconInstantNotif.vue'
import IconConfidenceVue from '@/components/icons/IconConfidence.vue'

export default {
    components: {
        IconQuickOffersVue,
        IconInstantNotifVue,
        IconConfidenceVue
    }
}
</script>

<template>
    <div class="buyers wrapper">
        <div class="left-col col">
            <img src="@/assets/images/buyers_couple.png" alt="couple">
        </div>
        <div class="right-col col">
            <h6>Buyers</h6>
            <h1>
                Your New Digital Offer Management & Communication Platform  
            </h1>
            <p>
                Offer to Own is a new digital offer management and communication platform designed for the agent who is always on the go. Save time, stay informed and in control with Offer to Own.
            </p>
            <div class="buyers-content-wrapper">
                <div class="buyers-item">
                    <IconQuickOffersVue/>
                    <div class="buyers-item-text">
                        <h3>Quick offers</h3>
                        <p>Offer to Own makes submitting offers a simple and convenient process.</p>
                    </div>
                </div>
                <div class="buyers-item">
                    <IconInstantNotifVue/>
                    <div class="buyers-item-text">
                        <h3>Instant Notifications  </h3>
                        <p>Don’t get left in the dark, track your offer’s progress with real time notifications.</p>
                    </div>
                </div>
                <div class="buyers-item">
                    <IconConfidenceVue/>
                    <div class="buyers-item-text">
                        <h3>Confidence</h3>
                        <p>Access support from a trusted conveyancing team as well as qualified building and pest inspectors .</p>
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
    .col {
        box-sizing: border-box;
        width: 50%;
    }

    .right-col {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: baseline;
        padding-right: 32px;
        padding-left: 32px;

        h6 {
            font-family: 'Georgia';
            font-style: italic;
            font-weight: 400;
            font-size: 24px;
            line-height: 34px;
            margin: 32px 0 8px 0;
            color: $gold;
        }

        h1 {
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 48px;
            line-height: 56px;
            margin-bottom: 16px;
            color: $primary;
        }

        p {
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 300;
            font-size: 18px;
            line-height: 26px;
            margin-bottom: 8px;
            color: $gray;
        }

        .buyers-item {
            display: flex;
            align-items:flex-start;
            margin-bottom: 22px;
            .buyers-item-text {
                margin: 0 0 8px 8px;

                h3 {
                    color: $primary;
                    font-family: 'Roboto', sans-serif;
                    font-style: normal;
                    font-weight: 700;
                    font-size: 20px;
                    line-height: 28px;
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