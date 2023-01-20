<template>
    <div class="footer-links">
        <div class="col">
            <div>About</div>
            <ul>
                <li>Who are we</li>
                <li>Our history</li>
                <li>Our leaders</li>
            </ul>
        </div>
        <div class="col">
            <div>Careers</div>
            <ul>
                <li>Our Core</li>
                <li>Life at DBC</li>
                <li>Join us</li>
            </ul>
        </div>
        <div class="col">
            <div>Brands</div>
            <ul class="links">
                <li>Offer to Own</li>
                <li>Conveyancing.com.au</li>
                <li>Rapid Building Inspections</li>
                <li>First Class Legal</li>
            </ul>
        </div>
        <div class="col">
            <div>Investors</div>
            <ul>
                <li>Shareholders</li>
                <li>Corporate governance</li>
                <li>Report & Resources</li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
div.footer-links {
    max-width: 940px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    margin-top: 70px;
    div.col {
        div {
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 24px;
            color: $primary;
        }
        width: calc(100%/4);
        ul {
            list-style-type: none;
            padding: 0;
            margin: 8px 0;

            li {
                font-family: 'Roboto', sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 22px;
                color: $gray;
                margin-top: 16px;
            }
        }
    }
}
</style>