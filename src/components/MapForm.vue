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
                                            v-model='map.options.host'
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
                                            v-model='map.options.apiKey'
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
                            @click="showMap = true"
                            v-ripple
                            color="green"
                            :disabled="!formIsValid"
                        >Generate Map</v-btn>
                        <v-btn
                            @click="showMap = false"
                            v-ripple
                            color="red"
                            :disabled="!map.show"
                        >Clear Map</v-btn>
                    </v-container>
                </v-flex>
            </v-layout>
        </v-container>
        <generate-map v-if="map.show" :map-options='map.options' :key='map.key'></generate-map>
    </div>
</template>

<script>
export default {
    components: {
        ToggleCurrentIp: () => import('./ToggleCurrentIp.vue'),
        ProviderSelect: () => import('./ProviderSelect.vue'),
        GenerateMap: () => import('./GenerateMap.vue'),
    },
    data() {
        return {
            formIsValid: false,
            hostIpShow: false,
            apiKeyShow: false,
            toggleChecked: false,
            rules: {
                requiredField: [(v) => !!v || "This field is required!"],
                requiredFieldWithToggle: [
                    (v) => {
                        if (this.toggleChecked) return true;
                        return !!v || "This field is required!"
                    }
                ],
            },
            map: {
                show: false,
                key: Date.now(),
                options: {
                    provider: null,
                    host: null,
                    apiKey: null,
                },
            },
        }
    },
    computed: {
        selectedProvider: {
            get() {
                return this.map.options.provider;
            },
            set(provider) {
                if (provider !== '' && provider !== undefined) {
                    this.map.options.provider = provider;
                    this.apiKeyShow = provider.isKeyRequired;
                    this.hostIpShow = true;
                } else {
                    this.hostIpShow = this.apiKeyShow = false;
                }
            },
        },
        showMap: {
            get() {
                return this.map.show;
            },
            set(value) {
                this.map.show = value;
                this.map.show && value ?
                    this.map.key = Date.now() :
                    this.map.show = false;
            }
        }
    },
    watch: {
        toggleChecked() {
            if (this.map.options.host !== '') this.map.options.host = '';
            this.$refs.host_ip_field.reset();
        },
    },
    methods: {
        resetForm() {
            this.map.options.host = this.map.options.apiKey = '';
            this.$refs.form.reset();
        },
    },
}
</script>
