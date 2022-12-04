import Vue from 'vue'

const miMixinGlobal = {
    methods: {
    },
    computed: {
        mostrarUsers() {
            let users = this.$store.state.users
            return users
        }
    }
}

Vue.mixin(miMixinGlobal)