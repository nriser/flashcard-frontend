'use strict'
// remove signIn and signOut
const store = require('../store.js')
const showFlashcardsTemplate = require('../templates/flashcard-listing.handlebars')

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
}

const createFlashcardFailure = () => {
  console.log('Something went wrong')
  // $('.status-message').text('Please sign in first.')
}

const getFlashcardSuccess = (response) => {
  console.log('response is', response)
  // store.flashcard = response.flashcard
}

const getFlashcardFailure = () => {
  console.log('Something went wront')
}

const getFlashcardsSuccess = (response) => {
  // alert('getFlashcardsSuccess')
  console.log('response is', response)
  store.flashcard = response.flashcard // store the flashcard object in user object (store)
  console.log('store is ', store)
  console.log('store.flashcard is ', store.flashcard)
  let showFlashcardsHtml = showFlashcardsTemplate({ flashcards: response.flashcards })
  $('#view-all').append(showFlashcardsHtml) // first spot in which the elelments are appended to the dom.
  // $('.deleteBookButton').on('click', onDeleteBook);
  // alert('after append in getFlashcardsSuccess')
  // $('.update-flashcard').show()
  // $('.flashcard-container-header').show()
  // $('footer').show()
  $('#view-all').fadeIn()
  $('.content').hide()
}

const getFlashcardsFailure = () => {
  console.log('Something went wrong')
}

const updateFlashcardSuccess = (response) => {
  console.log('response is', response)
  $('#content-status-message').text('Card updated successfully')
}

const updateFlashcardFailure = () => {
}

const deleteFlashcardSuccess = (response) => {
  console.log('response is', response)
  // $('#content-status-message').text('Card updated successfully')
}

const deleteFlashcardFailure = () => {
}

module.exports = {
  createFlashcardSuccess,
  createFlashcardFailure,
  getFlashcardSuccess,
  getFlashcardFailure,
  getFlashcardsSuccess,
  getFlashcardsFailure,
  updateFlashcardSuccess,
  updateFlashcardFailure,
  deleteFlashcardSuccess,
  deleteFlashcardFailure
}
