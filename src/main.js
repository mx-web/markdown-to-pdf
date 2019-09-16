import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

var pdfMake = require("pdfmake/build/pdfmake");
var pdfFonts = require("pdfmake/build/vfs_fonts");
pdfMake.vfs = pdfFonts.pdfMake.vfs;

var htmlToPdfMake = require("html-to-pdfmake");
require('tailwindcss/dist/tailwind.css');

require('simplemde/dist/simplemde.min.css');

import SimpleMDE from "simplemde";

Vue.prototype.$SimpleMDE = SimpleMDE;
Vue.prototype.htmlToPdfMake = htmlToPdfMake;
Vue.prototype.pdfMake = pdfMake;


new Vue({
  render: h => h(App),
}).$mount('#app')
