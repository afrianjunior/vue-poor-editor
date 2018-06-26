const randomWord = (ln) => {
  let words = ['a', 'X', '4', 't', 'z', 'o', 'Y', 'm', 'L', 'q', 'n', 'M', 'c', 'k', 'Z']
  let ranWord = ['vpe-']
  const ranNum = (words) => {
    return Math.floor(Math.random() * words.length)
  }
  for (var loop = 0; loop < ln; loop++) {
    ranWord.push(words[ranNum(words)])
  }
  return ranWord.join('')
}
module.exports = randomWord
