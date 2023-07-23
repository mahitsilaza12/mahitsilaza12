<template>
    <div class="d-flex">
        <div class="textPerson">
            <Text
                class="text"
                color="#0F172A"
                fontSize="16px"
                fontWeight="600"
                lineHeight="24px"
            >
                {{ text }}
            </Text>
           <Text
                class="textDescription"
                color="#0F172A"
                fontSize="12px"
                fontWeight="400"
                lineHeight="18px"
            >
                {{ textDescription }}
            </Text>
        </div>
        <div>
            <IconInCircle
                class="cercle"
                :icon-name="iconName"
                background="#5036CF"
            />
        </div>
    </div>
</template>

<script>
    import IconInCircle from '../mIcon/IconInCircle.vue';
    import Text from '@/components/atoms/mText/Text.vue';

    export default {
        name: 'MenuPersonal',
        components: {
            IconInCircle,
            Text
        },
        props: {
            text: {
                type: String
            },
            iconName: {
                type: String,
                default: 'user'
            },
            textDescription: {
                type: String
            }
        }
    }
</script>

<style scoped>
    .textPerson {
        text-align: right;
        margin-right: 1rem;
    }
    .textDescription {
        text-align: right;
        margin-top: -15px;
        margin-right: 10px;
    }
    .cercle {
        margin-top: 4px;
    }
</style>