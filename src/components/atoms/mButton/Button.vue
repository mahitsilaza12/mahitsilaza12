<template>
    <button :style="buttonStyle" class="authentication-button">{{ label }}</button>
  </template>
  
<script>
    export default {
        name: 'Button',
        props: {
            label: {
                type: String,
                default: 'Button'
            },
            color: {
                type: String,
                default: '#2196f3'
            },
            backgroundColor: {
                type: String,
                default: '#ffffff'
            },
            height: {
                type: String,
                default: '40px'
            },
            width: {
                type: String,
                default: '98px'
            },
            fontSize: {
                type: String,
                default: '16px'
            }
        },
            computed: {
                buttonStyle() {
                    return {
                    color: this.color,
                    backgroundColor: this.backgroundColor,
                    height: this.height,
                    width: this.width
                }
            }
        }
    }
</script>

<style>
    .authentication-button {
        border-radius: 68px;
        text-align: center;
        border-width: 0px;
        font-weight: 600;
    }
</style>
  