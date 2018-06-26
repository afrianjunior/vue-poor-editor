let path = require('path');
let assert = require('chai').assert; 
let ranWord = require(path.join(__dirname, '../src/util/', 'ran-words.js'));

describe('Util Randow Word', function() {
  it('should return length of 10 from random word', function() {
    assert.equal(ranWord(6).length, 10)
  })
})