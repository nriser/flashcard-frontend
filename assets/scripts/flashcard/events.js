'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onCreateFlashcard = function (event) {
  event.preventDefault()
  console.log('you clicked create')
  const data = getFormFields(this)
  console.log('data after getting form fields', data)
  api.createFlashcard(data)
    .then(ui.createFlashcardSuccess)
    .catch(ui.createFlashcardFailure)
}

const onGetFlashcard = function (event) {
  event.preventDefault()
  console.log('you clicked get')
  const data = getFormFields(this) // this will refer to event.target because it gets passed into addHandlers as a callback.
  console.log('data after getting form fields', data)
  api.getFlashcard(data)
    .then(ui.getFlashcardSuccess)
    .catch(ui.getFlashcardFailure)
}

// const onGetFlashcards = function () {
//   event.preventDefault()
//   api.getGames()
//     .then(ui.getGamesSuccess)
//     .catch(ui.getGamesFailure)
// }
//

const addFlashcardHandlers = () => {
  $('#create-flashcard').on('submit', onCreateFlashcard) // when browser hears on submit event on
  $('#get-flashcard').on('submit', onGetFlashcard)
  // $('#get-flashcards').on('submit', onGetFlashcards)
}

module.exports = {
  addFlashcardHandlers
}
