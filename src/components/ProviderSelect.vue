<template>
    <v-select
        v-model='selectedProvider'
        :label='dropdown.label'
        :items="apiProviders"
        item-text="name"
        clearable
        @click:clear='cleared'
        return-object
        persistent-hint
        :hint='dropdown.hint'
        required
        :rules="rules.requiredField"
    >
        <template v-slot:selection='data'>
            {{ data.item.name }}
            <span v-if="data.item.isKeyRequired" class="mdi mdi-key red--text"></span>
        </template>
        <template v-slot:item='data'>
            {{ data.item.name }}
            <span v-if="data.item.isKeyRequired" class="mdi mdi-key red--text"></span>
        </template>
    </v-select>
</template>

<script>
export default {
    props: {
        value: {
            type: [String, Object]
        },
    },
    data() {
        return {
            apiProviders: [{
                    name: "http://ip-api.com",
                    isKeyRequired: false,
                },
                {
                    name: "http://ipstack.com",
                    isKeyRequired: true,
                },
            ],
            dropdown: {
                label: 'Select API Provider',
                hint: `<small><i class='mdi mdi-key red--text'></i> means API key is required</small>`,
            },
            rules: {
                requiredField: [(v) => !!v || "This field is required!"]
            },
        }
    },
    computed: {
        selectedProvider: {
            get() {
                return this.value
            },
            set(selectedProvider) {
                this.$emit('input', selectedProvider)
            }
        },
    },
    methods: {
        cleared() {
            this.$emit('cleared', true);
        }
    },
}
</script>
