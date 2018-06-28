<template>
  <div>
    <div :style="style" :id="id" contenteditable>
    </div>
  </div>
</template>


<script>
  import htmlExtractor from './util/html-extractor'
  import ranWord from './util/ran-words'
  export default {
    name: 'vue-poor-editor',
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
    watch: {
      value: function (val) {
        if (val === '' && this.id !== null) {
          this.box.innerHTML = val
        }
      }
    },
    data: function () {
      return {
        box: null,
        id: null,
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
    beforeMount: function () {
      this.id = ranWord(6)
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
        this.$emit('input', this.box.innerHTML)
      },
      enterListener: function (e) {
        if (this.instantSend === true) {
          if (e.which === 13 &&
              !e.shiftKey &&
              !e.altKey) {
            this.submitEvent(this.box.innerHTML)
          }
        }
      },
      format: function () {
        document.execCommand('removeFormat', false)
      },
      listener: function (value) {
        this.box = document.getElementById(this.id)
        this.box.innerHTML = value
        document.execCommand('defaultParagraphSeparator', false, 'p')
        this.box.addEventListener('keyup', this.eventListener)
        this.box.addEventListener('keydown', this.enterListener)
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
          this.$emit('submit:enter', html)
        }
      }
    }
  }
</script>
