'use strict'
// remove signIn and signOut
const store = require('../store.js')
// const event = require('./event')
const showFlashcardsTemplate = require('../templates/flashcard-listing.handlebars')
const api = require('./api')
const ui = require('./ui')
// const cardevent = require('./event.js')

const createFlashcardSuccess = (response) => {
  console.log('response ', response)
  console.log('response.flashcard ', response.flashcard)
  console.log('response.flashcard.word ', response.flashcard.word)
  console.log('response.flashcard.definition ', response.flashcard.definition)
  console.log('response.flashcard.id ', response.flashcard.id)
  console.log('store ', store)
  $('#content-status-message').text('Card added to deck successfully (ID: ' + response.flashcard.id + ' )')
  // store.flashcard = response.flashcard
  // $('#show-game-container').hide()
  // $('#show-games-container').hide()
  // // $('#show-game-container').css('visibility', 'hidden')
  // // $('#show-games-container').css('visibility', 'hidden')
  // $('.status-message').text('You are playing TicTacToe with Game ID: ' + store.game.id)
  // $('#board').fadeIn()
  // $('#board').css('visibility', 'visible')

  // reset form fields
  $('.create-front-text').val('')
  $('.create-back-text').val('')
  // alert('helloooo')
  // $('#update-flashcard').fadeIn()
  api.getFlashcards()
}

const createFlashcardFailure = () => {
  console.log('Something went wrong')
  $('#delete-flashcard').empty()
  $('#content-status-message').text('Please enter a word and a definition.')
}

// const getFlashcardSuccess = (response) => {
//   console.log('response is', response)
//   // store.flashcard = response.flashcard
// }
//
// const getFlashcardFailure = () => {
//   console.log('Something went wront')
// }

const getFlashcardsSuccess = (response) => {
  // $('.delete-flashcard').on('click', onDeleteFlashcard)
  // alert('getFlashcardsSuccess')
  console.log('response is', response)
  store.flashcard = response.flashcard // store the flashcard object in user object (store)
  console.log('store is ', store)
  // console.log('store.flashcard is ', store.flashcard)
  const showFlashcardsHtml = showFlashcardsTemplate({ flashcards: response.flashcards })
  $('#view-all').empty() // use .empty() instead of .html()
  // $('#view-all').html('') // remove previous results on the page that have been populated using handlebars to avoid redundant content
  $('#view-all').append(showFlashcardsHtml) // first spot in which the elelments are appended to the dom.

  // $('#delete-flashcard').on('click', cardevent.onDeleteFlashcard)
  $('.delete-flashcard').on('click', onDeleteFlashcard)
  // $('.delete-flashcard').off('click')
  // alert('after append in getFlashcardsSuccess')
  // $('.update-flashcard').show()
  // $('.flashcard-container-header').show()
  // $('footer').show()
  // $('#content-status-message').text('View Cards')

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
  console.log('Something went wrong')
  $('#content-status-message').text('Something went wrong. Please try again.')
}

const onDeleteFlashcard = function (event) {
  event.preventDefault()
  // console.log('event in onDeleteFlashcard is', event)
  // console.log('event.target in onDeleteFlashcard is ', event.target)
  // const data = $(event.target).parent().data('id', '{{flashcard.id}}')
  createDataObject($(event.target).data('id'))
  // disable button because double clicking causes 404 errors
  $(event.target).prop('disabled', true)
  // console.log('this is ', $(this))
  // console.log('event.target is ', $(event.target))
  // console.log('event.currentTarget is ', event.currentTarget)
  // console.log('$(this).parent() ', $(this).parent())
  // console.log('$(event.target).parent() is ', $(event.target).parent())
  // console.log('$(event.currentTarget).parent() is', $(event.currentTarget).parent())

  $(event.currentTarget).parent().fadeOut()
  // Wait for fade-out effect to occur before .remove
  setTimeout(function () {
    // Must have .remove() in order to actually remove from the DOM (make length === 0)
    $(event.currentTarget).parent().remove()
  }, 500)
  // if no cards, show below status message
  if ($('.card-response').children().length === 0) {
    $('#content-status-message').text('You have no cards. Create a new card.')
  }
}

const createDataObject = function (flashcardId) {
  const data = {
    flashcard: {
      id: flashcardId
    }
  }
  console.log('data at createDataObjects', data)

  // new code:
  event.preventDefault()
  api.deleteFlashcard(data)
    // .then(() => {
    //   return api.getFlashcards()
    // })
    .then(ui.getFlashcardsSuccess)
    .catch(ui.getFlashcardsFailure)

  // mike's suggested code:
  // event.preventDefault()
  // api.deleteFlashcard(data)
  //   .then(() => {
  //     return api.getFlashcards() // added a return
  //   })
  //   .then(ui.getFlashcardsSuccess)
  //   .catch(ui.getFlashcardsFailure)

  // my code:
  // api.deleteFlashcard(data)
  //   .then(() => {
  //     api.getFlashcards()
  //       .then(ui.getFlashcardsSuccess)
  //       .catch(ui.getFlashcardsFailure)
  //   })
}

const updateFlashcardSuccess = (response) => {
  console.log('response is', response)
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
  console.log('response is', response)
  // $('#content-status-message').text('Card updated successfully')
}

const deleteFlashcardFailure = () => {
  $('#content-status-message').text('Something went wrong. Please try again.')
}

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
