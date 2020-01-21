import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Home from './components/Home.vue';

// dynamic imports
const About = () => import('./components/About.vue');
const Contact = () => import('./components/Contact.vue');

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: '/', component: Home },
    {path: '/about', component: About},
    {path: '/contact', component: Contact}
  ]
})

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')