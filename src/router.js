import Vue from 'vue'
import VueRouter from 'vue-router'

import Usuarios from './components/Usuarios.vue'
import Formulario from './components/Formulario.vue'


Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/formulario', component: Formulario },
        { path: '/usuarios', component: Usuarios },
    ]
})

