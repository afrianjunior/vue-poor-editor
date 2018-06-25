let path = require('path');
let assert = require('chai').assert; 
let extractorHTML = require(path.join(__dirname, '../src/util/', 'html-extractor.js'));

describe('Util HTML Extractor', function() {
  it('should return String \'test the html extractor\' ', function() {
    assert.equal(extractorHTML('<p>test the html extractor</p>'), 'test the html extractor')
  })

  it('should return String \'stay HODL bruh!\' ', function() {
    assert.equal(extractorHTML('<p>stay<br> HODL <em>bruh</em><i>!</i></p>'), 'stay HODL bruh!')
  })

  it('should return empty string', function() {
    assert.equal(extractorHTML('<p><br>  <em></em><i></i><p></p>'), '')
  })

  it('should return String \'afrian.junior26@gmail.com\' ', function() {
    assert.equal(extractorHTML('<p>afrian<br><span>.</span>junior<section>26</section><em>@</em><i>gmail</i>.com</p>'), 'afrian.junior26@gmail.com')
  })
})