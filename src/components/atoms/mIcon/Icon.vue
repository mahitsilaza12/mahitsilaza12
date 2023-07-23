<template>
    <vue-fontawesome :icon="iconName" class="icon"></vue-fontawesome>
</template>

<script>
    export default {
        props: {
            iconName: {
                type: String,
                default: 'phone'
            }
        }
    }
</script>

<style>
    .icon{
        color: #FFFFFF;
        width: 18px;
        height: 20px;
    }
</style>