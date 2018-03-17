import NavComponent from './components/NavComponent.vue';
import AboutComponent from './components/AboutComponent.vue';
import ServicesComponent from './components/ServicesComponent.vue';
import ContactComponent from './components/ContactComponent.vue';

import VueRouter from 'vue-router';

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import $ from 'jquery';

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');


window.Vue = require('vue');
window.$ = window.jQuery = $;

Vue.use(BootstrapVue);
Vue.use(VueRouter);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('nav-component', require('./components/NavComponent.vue'));
Vue.component('about', require('./components/AboutComponent.vue'));
Vue.component('services', require('./components/ServicesComponent.vue'));
Vue.component('contact', require('./components/ContactComponent.vue'));

const routes = [
    {path: '/', component: AboutComponent},
    //{ path: '/about', component: AboutComponent },
    { path: '/services', component: ServicesComponent },
    { path: '/contact', component: ContactComponent}
]

const router = new VueRouter({
  routes // forma corta para routes: routes
})

const app = new Vue({
  router
}).$mount('#app')

$(function() {
    "use strict";
    contact();
    initMap();



    /*==================================================================
    [ Validate ]
    var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var message = $('.validate-input textarea[name="message"]');


    $('.validate-form').on('submit',function(){
        var check = true;

        if($(name).val().trim() == ''){
            showValidate(name);
            check=false;
        }


        if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check=false;
        }

        if($(message).val().trim() == ''){
            showValidate(message);
            check=false;
        }

        return check;
    });


    $('.validate-form .input').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }*/



});

function contact() {
    /*==================================================================
    [ Focus Contact ]*/
    $('.input').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        });
    });

}
function initMap() {
    var uluru = {lat: 19.496175, lng: -99.114703};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: uluru,
      streetViewControl: false,
      mapTypeControl: false,
      zoomControl: true,
      zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_CENTER
      },
      scaleControl: true,
      fullscreenControl: true,
      gestureHandling: 'greedy',
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map,
      animation: google.maps.Animation.DROP,
    });
    marker.addListener('click', toggleBounce);
}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}
