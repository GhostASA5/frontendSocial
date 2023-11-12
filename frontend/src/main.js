import {
  createApp
} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './settings';
import chat from '@/plugins/websocket';
import vClickOutside from 'click-outside-vue3';
import useVuelidate from '@vuelidate/core';
import vTooltip from 'v-tooltip';
import VueToastify from 'vue-toastify';
import scroll from './directives/scroll';
import pattern from './directives/pattern';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import VueSelect from "vue-select";
import EmojiPicker from "vue3-emoji-picker";
import 'vue3-emoji-picker/css'

const app = createApp(App);

app
  .use(router)
  .use(store)
  .use(chat, {
    server: '82.202.214.42'
  })
  .use(vClickOutside)
  .use(useVuelidate)
  .use(vTooltip)
  .use(VueToastify)
  .directive('scroll', scroll)
  .directive('pattern', pattern)
  .component('VueDatePicker', VueDatePicker)
  .component("v-select", VueSelect)
  .component("EmojiPicker", EmojiPicker)
  .mount('#app')