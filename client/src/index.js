import Vue from 'vue';
import App from './App.vue';

const app = new Vue({
    el: '#app',
    template: '<App />',
    components: {
      App
    }
});

// Needed for Hot Module Replacement
if(typeof(module.hot) !== 'undefined') {
    module.hot.accept() // eslint-disable-line no-undef  
}