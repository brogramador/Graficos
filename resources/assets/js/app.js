
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.Vue = require('vue');
require('iview');
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//Vue.component('Grafico', require('./components/Grafico.vue'));
Vue.component("table_iview", require('./components/table_iview.vue'));

const app = new Vue({
    el: '#app',
    data:{
    //  tipo_seleccionado:"line",
      //  botones:[{valor:"line",texto:"Lineas"},
        //    {valor:"bar",texto:"Barras"},
          //  {valor:"ring",texto:"Circulo"},
            //{valor:"pie",texto:"Paste"}],
        visible: false
    },
    methods: {
       // Actu_grafico: function(index, botone) {
         //   this.tipo_seleccionado = botone.valor;
        //},
        show: function () {
            this.visible = true;
        }
    },
});



