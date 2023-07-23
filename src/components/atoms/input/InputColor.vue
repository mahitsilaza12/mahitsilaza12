<template>
    <span class="label">{{ label }}</span>
    <div class="color-input-container">
        <div
            class="color-image"
            :style="{ backgroundColor: colorName }"
            @click="selectColor"
        ></div>
        <span id="color-name">{{ colorName }}</span>
        <input
            type="color"
            ref="colorPicker"
            class="color-input"
            style="display: none;"
            @input="updateColor"
        />
    </div>
</template>
  
<script>
    export default {
        name: "InputColor",
        props: {
            label: {
                type: String,
            },
        },
        data() {
            return {
                colorName: "#FAFAFA",
            };
        },
        methods: {
            selectColor() {
                this.$refs.colorPicker.click();
            },
            updateColor(event) {
                this.colorName = event.target.value;
            },
        },
        computed: {
            colorImageClass() {
                return {
                    "color-image": true,
                    "color-image-selected": this.colorName !== "#FAFAFA",
                };
            },
        },
    };
</script>
  
<style>
    .color-input-container {
        display: flex;
        align-items: center;
        border: 1px solid #ccc;
        border-radius: 0.375rem;
        height: 42px;
        width: 227px;
    }

    .color-image {
        height: 28px;
        width: 28px;
        margin: 0 8px;
        cursor: pointer;
        border-radius: 50%;
        cursor: pointer;
        border: 1px solid #ccc;
    }

    .color-input {
        flex: 1;
        border: none;
        outline: none;
        background-color: transparent;
    }

    #color-name {
        margin-right: 8px;
    }

    .color-input:focus {
        box-shadow: none;
    }

    .color-image-selected {
        border: 1px solid #ccc;
    }

    .label {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #474554;
    }
</style>
  