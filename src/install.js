import VuePoorEditor from './main.vue'

console.log(VuePoorEditor)
export default function install (Vue) {
  Vue.component('VuePoorEditor', VuePoorEditor)
}

if (typeof window !== 'undefined' && typeof window.Vue !== 'undefined') {
  window.Vue.use(install)
}
