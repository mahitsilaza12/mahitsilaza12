<template>
    <div class="advice-card" style="height: 384px;">
        <slot :active-color="activeColor"></slot>
    </div>
</template>

<script>
    export default {
        name: 'AdviceCard',
        props: {
            activeColor: {
                type: String,
                default: '#512CC9'
            }
        }
    }
</script>

<style>
    .advice-card {
        width: 256px;
        height: 384px;
        background: #FFFFFF;
        border: 1px solid #E5EAF1 !important;
        border-radius: 9px;
        border: none;
        transition: all 0.3s ease-in-out;
    }

    .active {
        background: #512CC9;
        border: none !important;
        padding-top: 0;
        margin-top: 0;
    }
</style>