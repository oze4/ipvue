<template>
    <div>
        <v-layout
            row
            wrap
            justify-center
            mb-5
        >
            <v-flex
                xs10
                sm10
                md10
                lg10
            >
                <v-card ref='map_container' id='map-container'>
                    <v-card-title class='justify-center'>
                        <h3>Click Marker For More Info</h3>
                    </v-card-title>
                    <div id='map-card' ref='map_card' :style="{ height: mapHeight + 'px' }"></div>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import axios from 'axios';
import L from '../plugins/leaflet.js';

export default {
    props: {
        mapOptions: {
            type: Object,
        },
    },
    computed: {
        jsonResponse() {
            return JSON.stringify(this.response, undefined, 2);
        },
        mapHeight() {
            this.resizeMap();
            return this.$vuetify.breakpoint.height - 125;
        },
    },
    data() {
        return {
            response: null,
            map: null,
            mapAttribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            mapTileLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            mapDivId: 'map-card',
        };
    },
    mounted() {
        this.initMap(this.mapOptions);
    },
    methods: {
        resizeMap() {
            if (this.map !== null) {
                setTimeout((vm) => {
                    vm.map.invalidateSize();
                }, 200, this);
            }
        },
        clearMap() {
            if (this.map !== null) this.map.remove();
        },
        handleAxiosError(url, error) {
            alert(`Unable to gather map data from ${url}! We encountered the following error: ${error}`);
        },
        initMap(data) {
            switch (data.provider.name) {
                case "http://ip-api.com":
                    { // No API key required here, but lets verify
                        if (data.provider.isKeyRequired === false) {
                            let h = data.host === undefined ? '' : `/${data.host}`;
                            let u = `http://ip-api.com/json${String(h)}`;
                            axios.get(u).then((res) => {
                                this.buildMap(res, res.data.query, res.data.lat, res.data.lon);
                            }).catch((err) => {
                                this.handleAxiosError(u, err);
                            });
                        }
                        break;
                    }

                case "http://ipstack.com":
                    { // API key is required here, lets verify
                        if (data.provider.isKeyRequired === true) {
                            let h = data.host === undefined ? 'check' : data.host;
                            let u = `http://api.ipstack.com/${String(h)}?access_key=${String(data.apiKey)}`;
                            axios.get(u).then((res) => {
                                this.buildMap(res, res.data.ip, res.data.latitude, res.data.longitude);
                            }).catch((err) => {
                                this.handleAxiosError(u, err);
                            });
                        }
                        break;
                    }
            }
        },
        buildMap(res, ip, lat, lon) {
            this.clearMap();
            this.response = res.data;

            this.map = L.map(this.mapDivId, {
                zoomControl: false
            }).setView([lat, lon], 13)
            this.map.scrollWheelZoom.disable();

            L.control.zoom({
                position: 'bottomright'
            }).addTo(this.map);

            L.tileLayer(this.mapTileLayer, {
                attribution: this.mapAttribution,
                maxZoom: 14,
                minZoom: 10,
            }).addTo(this.map);

            L.marker([lat, lon], {
                title: `IP: ${ip} | lat: ${lat} | lon: ${lon}`,
                riseOnHover: true,
            }).bindPopup(`<h3>Host Information:</h3><v-card><pre id='json-pre'>${this.jsonResponse}</pre></v-card>`, {
                maxWidth: 200,
                maxHeight: 200,
                keepInView: true,
            }).addTo(this.map);

            setTimeout((vm) => {
                vm.map.invalidateSize();
            }, 200, this);
        },
    },
}
</script>

<style scoped>
#json-pre {
    overflow-x: auto;
    overflow-y: auto;
}

#map-container {
    overflow-x: auto;
}
</style>
