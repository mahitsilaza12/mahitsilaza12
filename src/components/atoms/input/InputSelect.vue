<template>
    <label class="label" for=""> {{ label }} </label>
    <select name="option" id="font" class="form-select" style="width: 277px;">
        <option v-for="(font, index) in fonts" :value="font" :key="index">{{ font }}</option>
    </select>
</template>

<script>
    export default {
        name: "InputSelect",
        props: {
            label: {
                type: String,
            }
        },
        data() {
            return {
                fonts: ["Inter", "Roboto", "Montserrat", "Open Sans", "Lato"],
            };
        }
    }
</script>
<style>
    .form-select {
        height: 42px;
    }
    .label {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #474554;
    }
</style>
