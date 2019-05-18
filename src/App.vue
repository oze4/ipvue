<template>
    <v-app>
        <v-content :style="{ height: content.calculatedHeight + 'px' }">
            <snackbar v-model='isSnackbarShown' :message='snackbarMessage' />
            <topbar :extension-height="topbarExtension.height" />
            <map-form />
        </v-content>
    </v-app>
</template>

<script>
import * as Cookies from './plugins/cookies.js';

export default {
    components: {
        Topbar: () => import('./components/Topbar.vue'),
        MapForm: () => import('./components/MapForm.vue'),
    },
    beforeCreate() {

    },
    created() {
        window.addEventListener('resize', this.handleResize)
        this.handleResize();
    },
    mounted() {
        if (location.protocol === "https:") {
            Cookies.set('____vipmapperredirection____', 'true', 1);
            location.replace("http://" + location.hostname);
            return false;
        } else {
            setTimeout((vm) => {
                if ((Cookies.get('____vipmapperredirection____')) === 'true') {
                    vm.isSnackbarShown = true;
                }
                Cookies.remove('____vipmapperredirection____');
            }, 300, this);
        }
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize)
    },
    data() {
        return {
            isSnackbarShown: false,
            snackbarMessage: "You have been redirected from https to http due to Mixed Content issues",
            content: {
                calculatedHeight: 0,
            },
            topbarExtension: {
                height: 300,
            },
        }
    },
    methods: {
        handleResize() {
            this.content.calculatedHeight = window.innerHeight > this.topbarExtension.height ?
                window.innerHeight + this.topbarExtension.height :
                window.innerHeight;
        },
    },
}
</script>
