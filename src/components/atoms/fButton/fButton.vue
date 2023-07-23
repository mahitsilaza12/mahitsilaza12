<template>
    <button :style="styleButton"  class="login-button"> <slot></slot> {{ label }}</button>
</template>

<script>
    export default {
        props: {
            label: {
                type: String,
                default: ''
            },
            color: {
                type: String,
                default: '#2196f3'
            },
            backgroundColor: {
                type: String,
                default: '#ffffff'
            },
            icon: {
                type: String,
                default:''
            }
        },
        computed: {
            styleButton() {
                return {
                    color: this.color,
                    backgroundColor: this.backgroundColor,
                    icon: this.icon
                }
            }
        }
    }
</script>

<style>
    #login-button {

    }
</style>