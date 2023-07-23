<template>
    <div class="containers">
        <Text
            class="step" 
            color="#0F172A"
            fontSize="14px"
            fontWeight="600"
            lineHeight="20px"
        >
            {{ numero }}
        </Text>
        <Text 
            class="personalTitle"
            color="#000000"
            fontSize="28px"
            fontWeight="700"
            lineHeight="34px"
        >
            {{ textTitle }}
        </Text>
        <Text 
            class="personalParagraph"
            color="#1B294B"
            fontSize="12px"
            fontWeight="400"
            lineHeight="17px"
        >
            {{ textParagraph }}
        </Text>
    </div>
</template>

<script>
    import Text from '@/components/atoms/mText/Text.vue';

    export default {
        name:'PersonalInputFormulaire',
        components: {
            Text
        },
        props: {
            numero: {
                type: String
            },
            textTitle: {
                type: String
            },
            textParagraph: {
                type: String
            }

        }
    }
</script>

<style scoped>
    .step {
        margin-top: 10px;
    }
    .personalTitle {
        margin-top: -10px;
    }
</style>