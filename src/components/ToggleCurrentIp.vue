<template>
    <v-switch
        ref="toggler"
        height=4
        label='Use Current IP'
        v-model='state'
        @mouseup.stop
        @mousedown.stop
    ></v-switch>
</template>

<script>
export default {
    props: {
        value: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        state: {
            get() { return this.value; },
            set(state) { this.$emit('input', state); }
        },
    },
    mounted() {
        this.$refs
            .toggler
            .$el
            .querySelector('label')
            .style
            .fontSize = 11 + 'px';
    },
}
</script>
