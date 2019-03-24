<template>
    <div>
        <v-layout row wrap justify-center mb-5>
            <v-flex xs10 sm10 md10 lg10>
                <v-card elevation="24" style="overflow-x:auto;">
                    <v-toolbar color="primary lighten-1" dark flat height="50">
                        <v-spacer></v-spacer>
                        <v-toolbar-title>
                            <slot name="title" />
                        </v-toolbar-title>
                        <v-spacer></v-spacer>
                        <slot name="close-button" />
                    </v-toolbar>
                    <div :id='mapId' :style="{ height: mapHeight + 'px', zIndex: 0 }"></div>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export default {
    props: {
        latitude: {
            type: [String, Number],
            required: true,
        },
        longitude: {
            type: [String, Number],
            required: true,
        },
        popUpData: {
            type: [String],
            required: false,
        },
        popUpIsJson: {
            type: Boolean,
            default: false,
            required: false,
        }
    },
    computed: {
        mapHeight() {
            this.resizeMap();
            return this.$vuetify.breakpoint.height - 150;
        },
        mapId() {
            return `map-card-${this._uid}`;
        },
    },
    data() {
        return {
            map: null,
            mapAttribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            mapTileLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        };
    },
    mounted() {
        this.buildMap();
    },
    methods: {
        resizeMap() {
            if (this.map !== null) {
                setTimeout((vm) => {
                    vm.map.invalidateSize();
                }, 200, this);
            }
        },
        buildMap() {
            try {
                let lat = this.latitude;
                let lon = this.longitude;
                this.map = L.map(this.mapId, {
                    zoomControl: false
                }).setView([lat, lon], 13);
                this.map.scrollWheelZoom.disable();
                L.control.zoom({
                    position: 'bottomleft'
                }).addTo(this.map);
                L.tileLayer(this.mapTileLayer, {
                    attribution: this.mapAttribution,
                    maxZoom: 14,
                    minZoom: 10,
                }).addTo(this.map);
                let marker = L.marker([lat, lon], {
                    title: `lat: ${lat} | lon: ${lon}`,
                    riseOnHover: true,
                });
                if (this.popUpData !== null) {
                    let finalPopUpData;
                    if (this.popUpIsJson) {
                        finalPopUpData = `<v-card>
                    <pre style="overflow-x:auto;overflow-y:auto;">${JSON.stringify(JSON.parse(this.popUpData), undefined, 2)}</pre>
                    </v-card>`
                    } else {
                        finalPopUpData = this.popUpData
                    }
                    marker.bindPopup(finalPopUpData, {
                        maxWidth: 200,
                        maxHeight: 150,
                        keepInView: true,
                    }).addTo(this.map);
                } else {
                    marker.addTo(this.map);
                }
                this.map.invalidateSize();
            } catch (err) {
                this.$emit('error', err);
            }
        },
    },
}
</script>
