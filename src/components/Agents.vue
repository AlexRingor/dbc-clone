<script>
import IconThumbsUp from '@/components/icons/IconThumbsUp.vue'
import IconCloud from '@/components/icons/IconCloud.vue'
import IconBell from '@/components/icons/IconBell.vue'
import IconCommunications from '@/components/icons/IconCommunications.vue'

export default {
    components: {
        IconThumbsUp,
        IconCloud,
        IconBell,
        IconCommunications
    }
}
</script>

<template>
    <div class="agents wrapper">
        <div class="left-col col">
            <h6>Agents</h6>
            <h1>
                Your New Digital Offer Management & Communication Platform  
            </h1>
            <p>
                Offer to Own is a new digital offer management and communication platform designed for the agent who is always on the go. Save time, stay informed and in control with Offer to Own.
            </p>
            <div class="agents-content-wrapper">
                <div class="agents-item">
                    <IconThumbsUp/>
                    <div class="agents-item-text">
                        <h3>Completely Free</h3>
                        <p>Offer to Own is completely free. There are no hidden costs or subscription plans. Save money and keep your own costs down.</p>
                    </div>
                </div>
                <div class="agents-item">
                    <IconCloud/>
                    <div class="agents-item-text">
                        <h3>CRM Integration</h3>
                        <p>Less time spent on admin, more time to focus on what really matters with a digital solution that integrates with your CRMs.</p>
                    </div>
                </div>
                <div class="agents-item">
                    <IconBell/>
                    <div class="agents-item-text">
                        <h3>Real-time notifications</h3>
                        <p>Get updates on new offers and any updated offers with alerts in Offer to Own and push notification sent by SMS.</p>
                    </div>
                </div>
                <div class="agents-item">
                    <IconCommunications/>
                    <div class="agents-item-text">
                        <h3>Improved Communication   </h3>
                        <p>Get the best results possible through streamlined direct communication between buyers & agents.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="right-col col">
            <img src="@/assets/images/agents_sold.svg" alt="sold">
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

div.agents {
    display: flex;
    .col {
        box-sizing: border-box;
        width: 50%;
    }

    .left-col {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: baseline;
        padding-right: 32px;

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

        .agents-item {
            display: flex;
            align-items:flex-start;
            margin-bottom: 22px;
            .agents-item-text {
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

    .right-col {
        img {
            width: 100%;
            object-fit: cover;
            height: 100%;
        }
    }
}
</style>