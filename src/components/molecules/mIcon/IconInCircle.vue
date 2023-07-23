<template>
    <div class="circle" :style="circleStyle">
        <Icon size="1.5" :icon-name="iconName" />
    </div>
</template>

<script>
    import Icon from '@/components/atoms/mIcon/Icon.vue'

    export default {
        components: {
            Icon
        },
        props: {
            iconName: {
                type: String,
                default: 'phone'
            },
            background: {
                type: String,
                default: '#5036CF'
            },
        },
        computed: {
            circleStyle() {
                return {
                    background: this.background
                }
            }
        }
    }
</script>
<style>
    .circle {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin:auto;
        text-align: center;
    }
</style>