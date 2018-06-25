import VuePoorEditor from './main.js'

VuePoorEditor.init.version = process.env.__VERSION__

export default VuePoorEditor.init

if (typeof window !== 'undefined' && window.Vue) {
  window.VuePoorEditor = VuePoorEditor.init
}
