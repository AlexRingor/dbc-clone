<script>
import EmployeeProfileVue from "./meet-the-team/EmployeeProfile.vue";

export default {
    components: {
        EmployeeProfileVue
    }
}
</script>
<template>
    <div class="meet-the-team">
        <h2>Offer To Own</h2>
        <h1>Meet the team</h1>
        <div class="team-wrapper px-8 flex flex-col justify-between md:flex-row md:justify-around">
            <div class="col first-col">
                <EmployeeProfileVue 
                    image="avatar_1.png" 
                    employeeName="Alexander Ringor"
                    jobTitle="State Property Manager QLD"
                    email="martin.hesse@offertoown.com.au"
                />
            </div>
            <div class="col second-col">
                <EmployeeProfileVue 
                    image="avatar_2.png" 
                    employeeName="Jenna Thompson"
                    jobTitle="Industry Growth Property Manager"
                    email="jenna.thompson@offertoown.com.au"
                />
            </div>
            <div class="col third-col">
                <EmployeeProfileVue 
                    image="avatar_3.png" 
                    employeeName="Alexander Ringor"
                    jobTitle="Industry Growth Property Manager"
                    email="rebecca.smart@offertoown.com.au"
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

div.meet-the-team {
    background-color: $primary;
    padding-bottom: 76px;
    h1,h2 {
        text-align: center;
    }

    h1 {
        margin-top: 8px;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 56px;        
        color: $white;
    }
    h2 {
        padding-top: 76px;
        font-family: 'Georgia';
        font-style: italic;
        font-weight: 400;
        font-size: 24px;
        line-height: 34px;
        color: $gold;
    }

    
}
</style>