const regExp = new RegExp(/(<([^>]+)>)/, 'ig')

const extractorHTML = (html) => {
  return html.replace(regExp, '').trim()
}

module.exports = extractorHTML
