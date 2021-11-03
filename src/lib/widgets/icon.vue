<script lang="ts">
    import {defineComponent} from 'vue'

    export default defineComponent({
        props: {
            viewBox: {
                type: String,
                required: true,
            },
        },
        setup(props, context) {
            return {viewBox: props.viewBox}
        },
    })

    export interface Test {
        prova: string
    }
</script>

<template>
    <svg version="1.1" :viewBox="viewBox" xmlns="http://www.w3.org/2000/svg">
        <slot/>
    </svg>
</template>
