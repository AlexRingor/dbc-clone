<script>
export default {
    name: "Employee Profile",
    props: ['image', 'employeeName', 'jobTitle', 'email']
}
</script>

<template>
    <div class="employee-profile-wrapper flex flex-col items-center py-4">
        <img :src="`src/assets/images/avatar/${image}`" :alt="image">
        <h5>{{ employeeName }}</h5>
        <h6>{{ jobTitle }}</h6>
        <a :href="`mailto:${email}`">{{ email }}</a>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
div.employee-profile-wrapper {
    

    img {
        width: 100px;
    }

    h5 {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: $gold;
    }
    h6 {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
        color: $white;
    }
    a {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: $white;
        text-decoration: none;
    }
}
</style>