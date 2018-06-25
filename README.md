<p align="center">
  <a href="https://npmcharts.com/compare/vue-poor-editor?minimal=true"><img src="https://img.shields.io/npm/dm/vue-poor-editor.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/vue-poor-editor"><img src="https://img.shields.io/npm/v/vue-poor-editor.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/vue-poor-editor"><img src="https://img.shields.io/npm/l/vue-poor-editor.svg" alt="License"></a>
  <br>
  
</p>

[![NPM](https://nodei.co/npm/vue-poor-editor.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vue-quill-editor/)
[![NPM](https://nodei.co/npm-dl/vue-poor-editor.png?months=12)](https://nodei.co/npm/vue-quill-editor/)

# How to use

Install 
```bash
$ npm i vue-poor-editor
```

## Use in browser
`
index.html
`
```html
<section>
  <div id="app">
    <vue-poor-editor 
      v-model="html" @input="editorListener" @submit:enter="sendContent"></vue-poor-editor>
  </div>
</section>
```

```js
Vue.use('VuePoorEditor');
new Vue({
  el: '#app',
  data: {
    html: 'write something'
  },
  methods: {
    editorListener: function (html) {
      this.html = html
    },
    sendContent: function (html) {
      axios.post('url', {
        data: html
      })
    }
  }
})
```

## Options

* borderLess

type `Boolean` <br>
default `true`

remove border box editor

```html
  <vue-poor-editor 
    v-model="html" @input="editorListener"
    :border-less="true"></vue-poor-editor>
```

* instantSend

type `Boolean` <br>
default `true`

activated submit on enter event

```html
  <vue-poor-editor 
    v-model="html" @input="editorListener"
    :instant-send="true"></vue-poor-editor>
```

* autoFormat

type `Boolean` <br>
default `true `

auto format when you paste text from clipboard

```html
  <vue-poor-editor 
    v-model="html" @input="editorListener"
    :auto-format="true"></vue-poor-editor>
```

* minHeight

type `String` <br>
default `100px`

resize height box editor

```html
  <vue-poor-editor 
    v-model="html" @input="editorListener"
    min-height="400px"></vue-poor-editor>
```

* width

type `String` <br>
default `100%`

resize width box editor

```html
  <vue-poor-editor 
    v-model="html" @input="editorListener"
    witdh="700px"></vue-poor-editor>
```

## Event

* Input

listen change html content

```html
  <vue-poor-editor 
    v-model="html" @input="editorListener"></vue-poor-editor>
```

* Submit:enter

get content when entered (which 13 without shift key)

this event active when instantSend option is `true`

```html
  <vue-poor-editor 
    v-model="html" @submit:enter="sendContent"></vue-poor-editor>
```