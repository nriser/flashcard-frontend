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

// const onAddAdvice = function (event) {
//   event.preventDefault()
//   console.log('clicked button')
//   const data = getFormFields(this)
//   console.log('this after get form fields', data)
//   api.addAdvice(data)
//     .then(ui.adviceAddSuccess)
//     .catch(ui.adviceAddFail)
// }

// const onGetFlashcards = function () {
//   event.preventDefault()
//   api.getGames()
//     .then(ui.getGamesSuccess)
//     .catch(ui.getGamesFailure)
// }
//
// const onGetFlashcard = function (event) {
//   const data = getFormFields(this) // this will refer to event.target because it gets passed into addHandlers as a callback.
//   event.preventDefault()
//   api.getGame(data)
//     .then(ui.getGameSuccess)
//     .catch(ui.getGameFailure)
// }

const addFlashcardHandlers = () => {
  $('#create-flashcard').on('submit', onCreateFlashcard) // when browser hears on submit event on
  // $('#get-games').on('submit', onGetFlashcards)
  // $('#get-game').on('submit', onGetFlashcard)
}

module.exports = {
  addFlashcardHandlers
}
