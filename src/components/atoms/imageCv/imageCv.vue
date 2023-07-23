<template>
    <div>
        <img :src="imageSrc" alt="">
    </div>
</template>

<script>
    export default {
     name:'imageCv',
     props: {
        imagePath: {
            type: String,
            required: true
        }
     },
     data() {
        return {
            imageSrc: this.imagePath
        }
     }   
    }
</script>