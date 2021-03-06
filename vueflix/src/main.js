import Vue from 'vue'
import VueRouter from 'vue-router';
import Acceuil from './components/Acceuil.vue'
import Films from './components/Films.vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import MovieDetail from './components/MovieDetail.vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: '/', component: Acceuil },
  { path: '/Films', component: Films },
  { path: '/MovieDetail/:id', name: "detail", component: MovieDetail },

]

const router = new VueRouter({
  routes // raccourci pour `routes: routes`
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')





