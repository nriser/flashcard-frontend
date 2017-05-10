'use strict'
// remove signIn and signOut
const store = require('../store.js')
const showFlashcardsTemplate = require('../templates/flashcard-listing.handlebars')
const api = require('./api')
const ui = require('./ui')

const createFlashcardSuccess = (response) => {
  $('#content-status-message').text('Card added to deck successfully (ID: ' + response.flashcard.id + ' )')

  // reset form fields
  $('.create-front-text').val('')
  $('.create-back-text').val('')
  api.getFlashcards()
}

const createFlashcardFailure = () => {
  $('#delete-flashcard').empty()
  $('#content-status-message').text('Please enter a word and a definition.')
}

const getFlashcardsSuccess = (response) => {
  store.flashcard = response.flashcard // store the flashcard object in user object (store)
  const showFlashcardsHtml = showFlashcardsTemplate({ flashcards: response.flashcards })
  $('#view-all').empty() // use .empty() instead of .html()
  // remove previous results on the page that have been populated using handlebars to avoid redundant content
  $('#view-all').append(showFlashcardsHtml) // first spot in which the elelments are appended to the dom.

  $('.delete-flashcard').on('click', onDeleteFlashcard)

  // if no cards, show below status message
  if ($('.card-response').children().length === 0) {
    $('#content-status-message').text('You have no cards. Click the menu to create a new card.')
  } else {
    $('#content-status-message').text('View Cards')
  }

  $('#view-all').fadeIn()
  $('.content').hide()

  $('.signup-status-message').text('')
  $('.signin-status-message').text('')
}

const getFlashcardsFailure = () => {
  $('#content-status-message').text('Something went wrong. Please try again.')
}

const onDeleteFlashcard = function (event) {
  event.preventDefault()
  createDataObject($(event.target).data('id'))
  // disable button because double clicking causes 404 errors
  $(event.target).prop('disabled', true)

  $(event.currentTarget).parent().fadeOut()
  // Wait for fade-out effect to occur before .remove
  setTimeout(function () {
    // Must have .remove() in order to actually remove from the DOM (make length === 0)
    $(event.currentTarget).parent().remove()
  // if no cards, show below status message
    if ($('.card-response').children().length === 0) {
      $('#content-status-message').text('You have no cards. Create a new card.')
    }
  }, 500)
}

const createDataObject = function (flashcardId) {
  const data = {
    flashcard: {
      id: flashcardId
    }
  }

  event.preventDefault()
  api.deleteFlashcard(data)
    .then(ui.getFlashcardsSuccess)
    .catch(ui.getFlashcardsFailure)
}

const updateFlashcardSuccess = (response) => {
  $('#content-status-message').text('Card updated successfully')
  // reset form fields
  $('.card-id-update').val('')
  $('.update-front-text').val('')
  $('.update-back-text').val('')
}

const updateFlashcardFailure = () => {
  $('#content-status-message').text('Please enter a word, definition, and a valid card ID.')
}

const deleteFlashcardSuccess = (response) => {
  // $('#content-status-message').text('Card updated successfully')
}

const deleteFlashcardFailure = () => {
  $('#content-status-message').text('Something went wrong. Please try again.')
}

(function parallaxEffect () {
  const parallax = document.querySelectorAll('.parallax'),
    speed = 0.5

  window.onscroll = function () {
    [].slice.call(parallax).forEach(function (el, i) {
      const windowYOffset = window.pageYOffset,
        elBackgrounPos = '0% ' + (windowYOffset * speed) + 'px'

      el.style.backgroundPosition = elBackgrounPos
    })
  }
})()

module.exports = {
  createFlashcardSuccess,
  createFlashcardFailure,
  // getFlashcardSuccess,
  // getFlashcardFailure,
  getFlashcardsSuccess,
  getFlashcardsFailure,
  updateFlashcardSuccess,
  updateFlashcardFailure,
  deleteFlashcardSuccess,
  deleteFlashcardFailure,
  onDeleteFlashcard
}
