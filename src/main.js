import htmlExtractor from './util/html-extractor'
const Template = `
  <div>
    <div :style="style" id="box-area" contenteditable>
    </div>
  </div>
`

const init = (Vue, option = {}) => {
  return Vue.component('vue-poor-editor', {
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {
      value: {
        title: 'value',
        type: String,
        default: ''
      },
      instantSend: {
        title: 'instantSend',
        type: Boolean,
        default: false
      },
      autoFormat: {
        title: 'autoFormat',
        type: Boolean,
        default: true
      },
      borderLess: {
        title: 'borderLess',
        type: Boolean,
        default: true
      },
      minHeight: {
        title: 'minHeight',
        type: String,
        default: '100px'
      },
      width: {
        title: 'width',
        type: String,
        default: '100%'
      }
    },
    template: Template,
    data: function () {
      return {
        box: null,
        style: {
          border: '1px solid #b2bec3',
          padding: '4px',
          'font-size': '13px',
          'line-height': '1.18',
          'border-radius': '4px',
          outline: 'none',
          'min-height': this.minHeight,
          'width': this.width
        }
      }
    },
    mounted: function () {
      if (typeof document !== 'undefined') {
        if (this.borderLess === true) {
          this.style.border = 'none'
        }
        this.listener(this.value)
      }
    },
    methods: {
      eventListener: function (e) {
        if (e.which === 13 && !e.shiftKey) {
          this.submitEvent(this.box.innerHTML)
        }
        this.$emit('input', this.box.innerHTML)
      },
      format: function () {
        document.execCommand('removeFormat', false)
      },
      listener: function (value) {
        this.box = document.getElementById('box-area')
        this.box.innerHTML = value
        document.execCommand('defaultParagraphSeparator', false, 'p')
        this.box.addEventListener('keydown', this.eventListener)
        if (this.autoFormat === true) {
          this.pasteEvent()
        }
      },
      pasteEvent: function () {
        this.box.addEventListener('paste', function (e) {
          e.preventDefault()
          document.execCommand('insertHTML', false, e.clipboardData.getData('text/plain'))
        })
      },
      submitEvent: function (html) {
        if (htmlExtractor(html) !== '') {
          this.$emit('submit', html)
        }
      }
    }
  })
}

const VuePoorEditor = () => {
  return {init}
}

export default VuePoorEditor()
