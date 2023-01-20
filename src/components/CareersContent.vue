
<template>
    <div class="careers-content-container">
        <h1>Careers</h1>
    <p>Our goals, growth and success have all been led by our amazing people. Talented, motivated and ever-curious, at Deep Blue Company (DBC) our people live our values while individually creating and collaboratively sharing ideas that drive our vision to be a market-leading provider of property technologies and services from sale-to-settlement.</p>
    <img src="@/assets/images/video_thumbnail.svg" alt="">
    </div>
    <div class="life-dbc-section">
        <div class="life-dbc-col">
            <h3>At DBC, you are our difference. </h3>
            <button>Life at DBC</button>
        </div>
        <div class="life-dbc-col">
            A career at Deep Blue Company means joining a community of people who bring their best selves to work, challenge the ordinary, embrace collaboration and take pride in truly owning their roles. We have the structure of an experienced business with the mindset of a scale-up that is constantly looking for opportunities to be better than we were yesterday. Our teams are empowered to drive creativity, innovation and customer experience; and create new solutions to old problems.
        </div>

    </div>
</template>

<styled lang="scss" scoped>
@import '@/assets/scss/variables';

.careers-content-container {
    h1{
        text-align: center;
        margin-top: 67px;
        color: $primary;
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 56px;
    }
    p {
        color: $gray;
        max-width: 1110px;
        margin: 0 auto;
        margin-top: 67px;
    }

    img {
        max-width: 790px;
        max-height: 453px;
        display: block;
        margin: 67px auto;
        width: 100%;
    }   

     

    .life-dbc-section {
        max-width: 1110px;
        margin: 0 auto;
        display: flex;
    }

    .life-dbc-section div:first-child {
        max-width: 40%;
        }
}

</styled>