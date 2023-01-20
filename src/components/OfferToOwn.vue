<template>
    <div class="oto wrapper">
        <div class="left-col col">
            <div>
                <img src="@/assets/images/oto_logo.svg" alt="offer to own logo">
            <p>Offer to Own is a centralised digital platform that creates a new and better way to get from sale to settlement. It unites buyers, sellers and agents to enable a better buying and selling experience for everyone. While the sale-to-settlement was once a complex and inefficient process, Offer to Own is reinventing the wheel with digital solutions founded on efficiency and ease. Setting new standards, and technological innovation is at the heart of Offer to Own’s success. Offer to Own is currently available in Queensland with plans to expand across Australia in 2022.</p>
            <div class="cta">
                <button class="team-btn">Contact Team</button>
                <button class="web-btn">Visit Website</button>
            </div>
            </div>
        </div>
        <div class="right-col col">
            <img src="@/assets/images/oto_phone.svg" alt="offer to own phone">
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

div.oto {

    p {
        font-size: 16px;
    }
    display: flex;
    flex-wrap: wrap;

    .left-col, .right-col {
        box-sizing: border-box;
        width: 50%;
        color: $gray;
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 26px;
    }

    .left-col {
        @media (max-width:1000px) {
            width: 100%;
            object-fit: none;
        }
            p   {
            margin: 32px 0;
        }

        @media (max-width: 597px) {
            img {
                max-width: 209px;
            }
        }
    }

    .right-col {
        img {
            width: 100%;
        }

        @media (max-width:1000px) {
            width: 100%;
            
            img {
                width: 100%;
                margin: 32px 0;
            }
        }
    }

    .cta {
        .team-btn {
            background: $primary;
            color: white;
            border: 2px solid #01093F;
            border-radius: 30px;
            width: 226px;
            height: 58px;
            margin-right: 26px;
            @media (max-width: 597px) {
                width: 100%;
                height: 58px;
                margin-bottom: 16px;
            }
        }

        .web-btn {
            border: 2px solid #01093F;
            border-radius: 30px;   
            background: white;
            width: 226px;
            height: 58px;
            @media (max-width: 597px) {
                width: 100%;
                height: 58px;
                margin-bottom: 16px;
            }
        }
    }
}
</style>