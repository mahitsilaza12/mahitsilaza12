<template>
    <Card>
        <div class="card-content">
            <div class="mt-4">
                <IconInCircle :icon-name="iconName" :background="background" />
            </div>
            <div class="mt-3">
                <Text
                    color="#000000"
                    fontSize="20px"
                    fontWeight="600"
                    lineHeight="24px"
                >
                    {{ title }}
                </Text>
            </div>
            <div class="mt-4 content">
                <Text
                    color="#666666"
                    fontSize="14px"
                    fontWeight="400"
                    lineHeight="24px"
                >{{ content }}</Text>
            </div>
        </div>
    </Card>
</template>

<script>
    import Card from '@/components/atoms/mCard/Card.vue'
    import Text from '@/components/atoms/mText/Text.vue'
    import IconInCircle from '@/components/molecules/mIcon/IconInCircle.vue'

    export default {
        components: {
            Card,
            Text,
            IconInCircle,
            IconInCircle
        },
        props: {
            iconName: {
                type: String,
                default: 'phone'
            },
            content: {
                type: String
            },
            background: {
                type: String,
                default: '#5036CF'
            },
            title: {
                type: String
            }
        }
    }
</script>
<style>
    .card-content{
        margin-left: 1em;
    }
    .content{
        text-align: justify;
        margin-right: 1em;
    }
</style>