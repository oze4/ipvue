<template>
    <v-snackbar
        :style="{ width: width + 'px' }"
        v-model='isShown'
        :color='color'
        :timeout='timeout'
        vertical
        top
        left
        multi-line
        auto-height
    >{{ message }}
        <v-btn
            :ripple=false
            @click='isShown = false'
            dark
            flat
        >{{ buttonMessage }}</v-btn>
        <v-progress-linear
            v-if="timeout>0"
            :active='progress.active'
            :value='progress.value'
            :color='progress.color'
        ></v-progress-linear>
    </v-snackbar>
</template>

<script>
export default {
    name: "snackbar",
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        message: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: false,
            default: "info",
        },
        timeout: {
            type: Number,
            required: false,
            default: 6000
        },
        buttonMessage: {
            type: String,
            required: false,
            default: 'Close',
        },
        width: {
            type: String,
            required: false,
            default: '30',
        },
    },
    data() {
        return {
            progress: {
                timeout: this.timeout,
                active: true,
                value: 0,
                color: 'green',
                interval: 0,
            },
        }
    },
    watch: {
        value() {
            if (this.value) {
                this.doProgressBar();
            } else {
                clearInterval(this.progress.interval);
            }
        }
    },
    computed: {
        isShown: {
            get() {
                return this.value
            },
            set(isShown) {
                this.$emit('input', isShown)
            }
        }
    },
    methods: {
        doProgressBar() {
            if (this.timeout > 0) {
                this.progress.value = 99; // ensure our progress bar is 'full'
                let step = 100, // how often to update progress bar
                    totalTime = this.progress.timeout,
                    chunk = totalTime / step,
                    factor = 100 / chunk;

                this.progress.interval = setInterval(() => {
                    if (this.progress.value <= 0) {
                        this.isShown = false;
                    }
                    this.progress.value -= factor;
                }, step);
            }
        }
    },
}
</script>
