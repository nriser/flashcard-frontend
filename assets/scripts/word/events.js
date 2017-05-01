'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onCreateWord = function () {
  event.preventDefault()
  api.createWord()
    .then(ui.createWordSuccess)
    .catch(ui.createWordFailure)
}

const onGetWords = function () {
  event.preventDefault()
  api.getWords()
    .then(ui.getWordsSuccess)
    .catch(ui.getWordsFailure)
}

const onGetWord = function (event) {
  const data = getFormFields(this) // this will refer to event.target because it gets passed into addHandlers as a callback.
  event.preventDefault()
  api.getWord(data)
    .then(ui.getWordSuccess)
    .catch(ui.getWordFailure)
}

const addWordHandlers = () => {
  $('#create-word').on('submit', onCreateWord) // when browser hears on submit event on
  $('#get-words').on('submit', onGetWords)
  $('#get-word').on('submit', onGetWord)
}

module.exports = {
  addWordHandlers
}
