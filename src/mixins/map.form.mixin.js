import axios from 'axios';

export default {
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
                timeout: 0,
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
        removeMap(e) {
            let i = this.locations.indexOf(e);
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
                this.throwToastError(`Invalid Query Error: '${this.host}' is not a valid host!`, 8000);
            }
        },
        throwToastError(message, timeout) {
            this.leafletMap.timeout = timeout;
            this.leafletMap.errorMessage = message;
            this.leafletMap.isError = true;
        },
        handleGenerateMap(event) {
            if (this.formIsValid) {
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
                                this.throwToastError(`Something went wrong querying '${u}' ${err}`, 0);
                            }).then(newLocation => {
                                this.newLocationCheck(newLocation);
                                if (event instanceof KeyboardEvent) event.target.blur();
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
                                this.throwToastError(`Something went wrong querying '${u}' ${err}`, 0);
                            }).then(newLocation => {
                                this.newLocationCheck(newLocation);
                                if (event instanceof KeyboardEvent) event.target.blur();
                            });
                        }
                        break;
                }
            } else {
                this.throwToastError(`Please fill out all fields!`, 7000);
            }
        }
    },
}