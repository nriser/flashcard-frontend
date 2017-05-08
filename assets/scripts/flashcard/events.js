'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

// Fix: Change-pw bootstrap modal appearing under background
// Resource: http://stackoverflow.com/questions/10636667/bootstrap-modal-appearing-under-background
$('#modal-changepw').appendTo('body')

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

const onGetFlashcards = function (event) {
  event.preventDefault()
  console.log('you clicked get all')
  // alert('onGetFlashcards')
  api.getFlashcards()
    .then(ui.getFlashcardsSuccess)
    .catch(ui.getFlashcardsFailure)
}

const onClickUpdateButton = function () {
  $('.content').fadeIn()
  $('#update-flashcard').fadeIn()
  $('#create-flashcard').hide()
  $('#content-status-message').text('Edit card')
}

const onClickCreateButton = function () {
  $('#update-flashcard').hide()
  $('.content').fadeIn()
  $('#create-flashcard').fadeIn()
  $('#view-all').hide()
  $('#content-status-message').text('Create a new card')
}

const onUpdateFlashcard = function (event) {
  event.preventDefault()
  console.log('you clicked update')
  const data = getFormFields(this)
  console.log('data after getting form fields', data)
  api.updateFlashcard(data)
    .then(ui.updateFlashcardSuccess)
    .catch(ui.updateFlashcardFailure)
}

const addFlashcardHandlers = () => {
  $('#create-flashcard').on('submit', onCreateFlashcard)
  $('#get-flashcard').on('submit', onGetFlashcard)
  $('#get-flashcards').on('submit', onGetFlashcards)
  $('#update-flashcard').on('submit', onUpdateFlashcard)
  $('#update-card-button').on('click', onClickUpdateButton)
  $('#create-card-button').on('click', onClickCreateButton)
}

module.exports = {
  addFlashcardHandlers
}
