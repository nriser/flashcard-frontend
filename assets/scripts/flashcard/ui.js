'use strict'
// remove signIn and signOut
const store = require('../store.js')
const showFlashcardsTemplate = require('../templates/flashcard-listing.handlebars')
const api = require('./api')
const getFormFields = require(`../../../lib/get-form-fields`)

const createFlashcardSuccess = (response) => {
  $('#content-status-message').text('Card added to deck successfully')

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
  console.log('inside getFlashcardsSuccess!')
  // store.flashcard = response.flashcard // store the flashcard object in user object (store)
  const showFlashcardsHtml = showFlashcardsTemplate({ flashcards: response.flashcards })
  $('#view-all').empty() // use .empty() instead of .html()
  // remove previous results on the page that have been populated using handlebars to avoid redundant content
  $('#view-all').append(showFlashcardsHtml) // first spot in which the elelments are appended to the dom.

  $('.modal-update-button').on('click', function () {
    console.log('Update button click: ', $(event.target).data('id'))
    store.buttonToUpdate = $(event.target).data('id')
    // store.buttonToUpdate = event.target.data('id')
  })

  $('.delete-flashcard').on('click', onDeleteFlashcard)

  // if no cards, show below status message
  if ($('.card-response').children().length === 0) {
    $('#content-status-message').text('You have no cards. Click the menu to create a new card.')
  } else {
    $('#content-status-message').text('View Cards')
  }

  $('.updated-flashcard').on('submit', onUpdateFlashcard)

  $('#view-all').fadeIn()
  $('.content').hide()

  $('.signup-status-message').text('')
  $('.signin-status-message').text('')
  $('#modal-update').appendTo('body')
}

const getFlashcardsFailure = () => {
  $('#content-status-message').text('Something went wrong with getFlashcardsFailure. Please try again.')
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
  console.log('data at createDataObject is ', data)
  // debugger
  api.deleteFlashcard(data)
    .then(deleteFlashcardSuccess)
    .catch(deleteFlashcardFailure)
}

const onUpdateFlashcard = (event) => {
  event.preventDefault()

  console.log('event is ', event)
  console.log('event.target is', event.target)
  console.log('event.target.id is ', $(event.target).data('id'))

  const data = getFormFields(event.target)
  data.flashcard.id = store.buttonToUpdate
  // const targ = store.buttonToUpdate
  // const targ = $(event.target).attr('data-id')
  // console.log(targ)
  // console.log($(event.target).parent().siblings('.modal-header').children('button').data('id'))
  // debugger
  // data.flashcard.id = $(event.target).parent().siblings('.modal-header').children('button').data('id')
  // console.log('newContent.flashcard.id is', newContent.flashcard.id)
    // debugger
  $('#modal-update').appendTo('body') // prevent backdrop

  api.updateFlashcard(data)
    .then((data) => console.log('data is: ', data))
    .then(updateFlashcardSuccess)
    .then(() => {
      api.getFlashcards()
        .then(getFlashcardsSuccess)
        .catch(getFlashcardsFailure)
    })
    .catch(updateFlashcardFailure)
}

const updateFlashcardSuccess = () => {
  console.log('went inside ui/updateFlashcardSuccess')
  // getFlashcardsSuccess()
  $('#content-status-message').text('Card updated successfully')
  // reset form fields
  $('.card-id-update').val('')
  $('.update-front-text').val('')
  $('.update-back-text').val('')
}

const updateFlashcardFailure = () => {
  console.log('went inside ui/updateFlashcardFailure')
  $('#content-status-message').text('Please enter a word, definition, and a valid card ID.')
}

const deleteFlashcardSuccess = () => {
  console.log('card deleted successfully!')
  // $('#content-status-message').text('Card updated successfully')
}

const deleteFlashcardFailure = () => {
  console.log('card could not be deleted')
  $('#content-status-message').text('Something went wrong with deleteFlashcardFailure. Please try again.')
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
