import { createApp } from 'vue'
import App from './App.vue'

// CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

// Vuex
import store from './store'

let app = createApp(App);

// filters
app.config.globalProperties.$filters = {
    valueInUSD(value) {
        return new Intl.NumberFormat("en-us", {style: "currency", currency: "USD"}).format(value);
    }
};

app.use(store);

app.mount('#app');
