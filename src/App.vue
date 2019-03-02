<template>
    <v-app>
        <v-content :style="{ height: content.calculatedHeight + 'px' }">
            <snackbar v-model='isSnackbarShown'></snackbar>
            <topbar :extension-height="topbarExtension.height"></topbar>
            <map-form></map-form>
        </v-content>
    </v-app>
</template>

<script>
import Cookies from './plugins/cookies.js';
import Snackbar from './components/Snackbar.vue';
import Topbar from './components/Topbar.vue';
import MapForm from './components/MapForm.vue';

export default {
    components: {
        Snackbar,
        Topbar,
        MapForm,
    },
    beforeCreate() {
        if (location.protocol === "https:") {
            Cookies.set('____vipmapperredirection____', 'true', 1);
            location.replace("http://" + location.hostname);
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize)
        this.handleResize();
    },
    mounted() {
        setTimeout((vm) => {
            if ((Cookies.get('____vipmapperredirection____')) === 'true') {
                vm.isSnackbarShown = true;
            }
            Cookies.remove('____vipmapperredirection____');
        }, 300, this);
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize)
    },
    data() {
        return {
            isSnackbarShown: false,
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
