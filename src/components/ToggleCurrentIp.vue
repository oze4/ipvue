<template>
    <v-switch
        ref="toggler"
        :height='height'
        :label='label'
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
    data() {
        return {
            label: 'Use Current IP',
            height: 4,
            fontSize: 11,
        }
    },
    computed: {
        state: {
            get() {
                return this.value;
            },
            set(state) {
                this.$emit('input', state);
            }
        },
        setToggleLabelTextSize() {
            this.$refs.toggler.$el.querySelector('label').style.fontSize = this.fontSize + 'px';
            return null;
        },
    },
    mounted() {
        this.setToggleLabelTextSize;
    },
    methods: {}
}
</script>
