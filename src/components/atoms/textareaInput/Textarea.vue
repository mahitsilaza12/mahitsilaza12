<template>
    <textarea :class="className" :placeholder="placeholderName" :model="modelName" rows="3"></textarea>
</template>

<script>
    export default {
        name: 'Textarea',
        props: {
            placeholderName: {
                type: String,
                default: 'nom'
            },
            className: {
                type: String,
                default: 'form-group'
            },
            modelName: {
                type: String,
                default:'name'
            }
        },
        computed: {
            placeholder() {
                return {
                    placeholderName: this.placeholderName
                }
            },
            class() {
                return {
                    className: this.className
                }
            },
            model() {
                return {
                    modelName : this.modelName
                }
            }
        }
        
    }
</script>