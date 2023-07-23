<template>
    <div class="semi-circle" :style="semiSircleStyle"></div>
</template>

<script>
    export default {
        props: {
            background: {
                type: String,
                default: '#ffffff'
            },
            transform: {
                type: String,
                default: '0px'
            }
        },
        computed: {
            semiSircleStyle() {
                return {
                    background: this.background,
                    transform: this.transform
                }
            }
        }
    }
</script>

<style>
    .semi-circle{
        width: 436px;
        height: 218px;
        border-radius: 0 0 218px 218px;
    }
</style>