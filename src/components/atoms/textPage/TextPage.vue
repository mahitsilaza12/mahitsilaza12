<template>
    <div>
        <p :style="textStyle" class="text"><slot></slot></p>
    </div>
</template>
<script>
    export default {
        name:'TextPage',
        props: {
            color: {
                type: String,
                default: '#ffffff'
            },
            fontSize: {
                type: String,
                default: '10px'
            },
            fontWeight: {
                type: String,
                default: '50px'
            },
            lineHeight: {
                type: String,
                default: '20px'
            }
        },
        computed: {
            textStyle() {
                return {
                    color: this.color,
                    fontSize: this.fontSize,
                    fontWeight: this.fontWeight,
                    lineHeight: this.lineHeight
                }
            }
        }
}
</script>
<style>

</style>