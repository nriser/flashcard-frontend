'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

// Fix: Change-pw bootstrap modal appearing under background
// Resource: http://stackoverflow.com/questions/10636667/bootstrap-modal-appearing-under-background

const onCreateFlashcard = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createFlashcard(data)
    .then(ui.createFlashcardSuccess)
    .catch(ui.createFlashcardFailure)
}

// keep this for later
// const onGetFlashcard = function (event) {
//   event.preventDefault()
//   const data = getFormFields(this) // this will refer to event.target because it gets passed into addHandlers as a callback.
//   api.getFlashcard(data)
//     .then(ui.getFlashcardSuccess)
//     .catch(ui.getFlashcardFailure)
// }

const onGetFlashcards = function (event) {
  console.log('inside onGetFlashcards')
  event.preventDefault()
  api.getFlashcards()
    .then(ui.getFlashcardsSuccess)
    .catch(ui.getFlashcardsFailure)

  $('.card-id-update').val('')
  $('.card-front-text').val('')
  $('.card-back-text').val('')
}

const onClickUpdateButton = function () {
  $('#create-flashcard').hide()

  $('.content').fadeIn()
  $('.update-flashcard').fadeIn() // **

  $('#view-all').hide()
  $('#content-status-message').text('Edit existing card')

  $('.card-id-update').val('')
  $('.card-front-text').val('')
  $('.card-back-text').val('')
}

const onClickCreateButton = function () {
  $('.update-flashcard').hide() // **

  $('.content').fadeIn()
  $('#create-flashcard').fadeIn()

  $('#view-all').hide()
  $('#content-status-message').text('Create a new card')

  $('.card-id-update').val('')
  $('.card-front-text').val('')
  $('.card-back-text').val('')
}

const addFlashcardHandlers = () => {
  $('#create-flashcard').on('submit', onCreateFlashcard)
  // $('#get-flashcard').on('submit', onGetFlashcard)
  $('#get-flashcards').on('submit', onGetFlashcards)
  $('#update-card-button').on('click', onClickUpdateButton)
  $('#create-card-button').on('click', onClickCreateButton)
}

module.exports = {
  addFlashcardHandlers
}
