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
                                            placeholder="google.com | 4.2.2.2"
                                            v-model="host"
                                            hide-details
                                            clearable
                                            required
                                            :rules="rules.requiredFieldWithToggle"
                                            :disabled='toggleChecked'
                                            ref='host_ip_field'
                                            @keyup.enter.native="handleGenerateMap"
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
                                            @keyup.enter.native="handleGenerateMap"
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
            :timeout=leafletMap.timeout 
            color="error"
        ></snackbar>
        <leaflet-map
            v-for="(location, index) in locations.slice().reverse()"
            :key="index + location.key"
            :latitude="location.lat"
            :longitude="location.lon"
            :popUpData="location.popUpData"
            :popUpIsJson="location.isPopUpJson"
            @error="handleLeafletError"
        >
            <template v-slot:title>
                <small>Click Marker For More Info</small>
            </template>
            <template v-slot:close-button>
                <v-tooltip top>
                    <template v-slot:activator="{ on }">
                        <v-btn icon v-on="on" @click.native="removeMap(location)">
                            <v-icon large color="red">cancel_presentation</v-icon>
                        </v-btn>
                    </template>
                    <span>Remove Map</span>
                </v-tooltip>
            </template>
        </leaflet-map>
    </div>
</template>

<script>
import MapFormMixin from '../mixins/map.form.mixin';

export default {
    components: {
        ToggleCurrentIp: () => import('./ToggleCurrentIp.vue'),
        ProviderSelect: () => import('./ProviderSelect.vue'),
        LeafletMap: () => import('./LeafletMap.vue'),
    },
    mixins: [MapFormMixin],
}
</script>
