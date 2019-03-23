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
                                            v-model="host"
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
        <snackbar
            v-model="leafletMap.isError"
            :message="leafletMap.errorMessage"
            :timeout=0
            color="error"
        ></snackbar>
        <leaflet-map
            v-for="(location, index) in locations"
            :key="location.key"
            :latitude="location.lat"
            :longitude="location.lon"
            :popUpData="location.popUpData"
            :popUpIsJson="location.isPopUpJson"
            @error="handleLeafletError"
        >
            <template slot="title">Click Marker For More Info</template>
            <v-tooltip top slot="close-button">
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on" @click.native="removeMap(index)">
                        <v-icon large color="red">cancel_presentation</v-icon>
                    </v-btn>
                </template>
                <span>Remove Map</span>
            </v-tooltip>
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
            /** example of location object *
             location: { 
                lat: [string|number], 
                 lon: [string|number], 
                 popUpData: string, 
                 isPopUpJson: boolean,
                 key: string [must be unique - used for :key],
             } 
             */
            locations: [],
            formIsValid: false,
            hostIpShow: false,
            apiKeyShow: false,
            toggleIsChecked: false,
            host: null,
            leafletMap: {
                isError: false,
                errorMessage: "",
            },
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
            if (this.host !== '') this.host = '';
            this.$refs.host_ip_field.reset();
        },
    },
    methods: {
        removeMap(i) {
            this.locations.splice(i, 1);
        },
        resetForm() {
            this.host = this.provider.apiKey = '';
            this.$refs.form.reset();
        },
        handleLeafletError(e) {
            this.leafletMap.errorMessage = "Error!! " + e;
            this.leafletMap.error = true;
        },
        newLocationCheck(nl) {
            if (nl.lat !== undefined && nl.lon !== undefined) {
                this.locations.push(nl);
            } else {
                this.leafletMap.errorMessage = `Invalid Query Error: '${this.host}' is not a valid host!`;
                this.leafletMap.isError = true;
            }
        },
        handleGenerateMap() {
            const selected = this.provider.currentlySelected;
            switch (selected.name) {
                case "http://ip-api.com":
                    if (!selected.isKeyRequired && !this.apiKeyShow) {
                        let h = this.host === undefined ? '' : `/${this.host}`;
                        let u = `http://ip-api.com/json${String(h)}`;
                        axios.get(u).then((res) => {
                            return {
                                lat: res.data.lat,
                                lon: res.data.lon,
                                popUpData: JSON.stringify(res.data),
                                isPopUpJson: true,
                                key: new Date().getTime(),
                            };
                        }).catch((err) => {
                            this.leafletMap.errorMessage = `Something went wrong querying '${u}' ${err}`;
                            this.leafletMap.isError = true;
                        }).then(newLocation => {
                            this.newLocationCheck(newLocation);
                        });
                    }
                    break;

                case "http://ipstack.com":
                    if (selected.isKeyRequired && this.apiKeyShow) {
                        let h = this.host === undefined ? 'check' : this.host;
                        let u = `http://api.ipstack.com/${String(h)}?access_key=${String(this.provider.apiKey)}`;
                        axios.get(u).then((res) => {
                            return {
                                lat: res.data.latitude,
                                lon: res.data.longitude,
                                popUpData: JSON.stringify(res.data),
                                isPopUpJson: true,
                                key: new Date().getTime(),
                            };
                        }).catch((err) => {
                            this.leafletMap.errorMessage = `Something went wrong querying ${u}! ${err}`;
                            this.leafletMap.isError = true;
                        }).then(newLocation => {
                            this.newLocationCheck(newLocation);
                        });
                    }
                    break;
            }
        }
    },
}
</script>
