<template>
    <div>
        <v-container>
            <v-layout justify-center wrap>
                <v-flex xs12 md10>
                    <v-card class="elevation-10">
                        <v-form v-model='formIsValid' ref='form'>
                            <v-container>
                                <v-layout justify-center wrap>
                                    <v-flex xs12 md4>
                                        <provider-select v-model='selectedProvider' @cleared='resetForm'></provider-select>
                                    </v-flex>
                                    <v-flex v-if="hostIpShow" xs12 md4>
                                        <v-text-field
                                            label='Hostname or IP'
                                            v-model='host'
                                            hide-details
                                            clearable
                                            required
                                            :rules="rules.requiredFieldWithToggle"
                                            :disabled='toggleChecked'
                                            ref='host_ip_field'
                                        ></v-text-field>
                                        <toggle-current-ip v-model='toggleChecked'></toggle-current-ip>
                                    </v-flex>
                                    <v-flex v-if="apiKeyShow" xs12 md4>
                                        <v-text-field
                                            label='API Key'
                                            v-model='provider.apiKey'
                                            hide-details
                                            clearable
                                            required
                                            :rules="rules.requiredField"
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-form>
                    </v-card>
                    <v-container class="text-xs-center">
                        <v-btn
                            @click="handleGenerateMap"
                            v-ripple
                            color="green"
                            :disabled="!formIsValid"
                        >Generate Map</v-btn>
                    </v-container>
                </v-flex>
            </v-layout>
        </v-container>
        <leaflet-map
            v-for="(location, index) in locations"
            :key="index"
            :latitude="location.lat"
            :longitude="location.lon"
        >
            <template slot="title">Click Marker For More Info</template>
            <v-btn slot="close-button" icon>
                <v-icon color="red">cancel_presentation</v-icon>
            </v-btn>
        </leaflet-map>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    components: {
        ToggleCurrentIp: () => import('./ToggleCurrentIp.vue'),
        ProviderSelect: () => import('./ProviderSelect.vue'),
        LeafletMap: () => import('./LeafletMap.vue'),
    },
    data() {
        return {
            // location: { lat: [mandatory][string|number], lon: [mandatory][string/number], popUpData: string, isPopUpJson: boolean }
            locations: [{
                lat: "29.7545",
                lon: "-95.4093",
            }],
            formIsValid: false,
            hostIpShow: false,
            apiKeyShow: false,
            toggleIsChecked: false,
            host: null,
            rules: {
                requiredField: [(v) => !!v || "This field is required!"],
                requiredFieldWithToggle: [
                    (v) => {
                        if (this.toggleChecked) return true;
                        return !!v || "This field is required!"
                    }
                ],
            },
            provider: {
                currentlySelected: null,
                apiKey: null,
            },
        }
    },
    computed: {
        selectedProvider: {
            get() {
                return this.provider.currentlySelected;
            },
            set(provider) {
                if (provider !== '' && provider !== undefined) {
                    this.provider.currentlySelected = provider;
                    this.apiKeyShow = provider.isKeyRequired;
                    this.hostIpShow = true;
                } else {
                    this.hostIpShow = this.apiKeyShow = false;
                }
            },
        },
        toggleChecked: {
            get() {
                return this.toggleIsChecked;
            },
            set(value) {
                this.toggleIsChecked = value;
                if (value) {
                    if (this.host !== '') this.host = '';
                    this.$refs.host_ip_field.reset();
                }
            }
        },
    },
    watch: {
        toggleChecked() {
            if (this.map.options.host !== '') this.map.options.host = '';
            this.$refs.host_ip_field.reset();
        },
    },
    methods: {
        handleGenerateMap(){
            return null;
        },
        resetForm() {
            this.map.options.host = this.map.options.apiKey = '';
            this.$refs.form.reset();
        },
        getIpApiData(provider) {
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
        }
    },
}
</script>
