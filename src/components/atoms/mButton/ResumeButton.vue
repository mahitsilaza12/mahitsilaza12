<template>
    <button class="resume-button" :class="{ 'selected': selected }" @click="selectButton">{{ title }}</button>
</template>
  
<script>
    export default {
        name: 'ResumeButton',
        props: {
            title: {
                type: String,
                required: true
            },
            selected: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            selectButton() {
                this.$emit('button-selected');
            }
        }
    };
</script>
  
<style>
    .resume-button {
        width: 149px;
        height: 149px;
        background: #f1f5f9;
        border-radius: 5px;
        border: none;
    }
  
    .resume-button.selected {
        background: rgba(251, 195, 120, 0.24);
        border: 1px solid #fbc378;
    }
  
    .resume-button:active,
    .resume-button:focus {
        background: rgba(251, 195, 120, 0.24);
        border: 1px solid #fbc378;
    }
  </style>
  