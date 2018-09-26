import Vue from "vue"
import HelloWorld from "./HelloWorld.vue"
new Vue({
  name: "App",
  data: function() {
    return {};
  },
  render: function (h) { 
    return h(HelloWorld)
  }
}).$mount("#app");