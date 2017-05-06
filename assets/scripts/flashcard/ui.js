'use strict'
// remove signIn and signOut
const store = require('../store.js')

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
  store.flashcard = response.flashcard
}

const getFlashcardFailure = () => {
  console.log('Something went wront')
}

const getFlashcardsSuccess = (response) => {
  console.log('response is', response)
  store.flashcard = response.flashcard // store the flashcard object
  console.log('store is', store)
  // $('.update-flashcard').show()
  // $('.flashcard-container-header').show()
  // $('footer').show()
}

const getFlashcardsFailure = () => {
  console.log('Something went wrong')
}

const updateFlashcardSuccess = (response) => {
  console.log('response is', response)
  console.log('View flashcards after update', response.flashcards)
}

const updateFlashcardFailure = () => {
}

module.exports = {
  createFlashcardSuccess,
  createFlashcardFailure,
  getFlashcardSuccess,
  getFlashcardFailure,
  getFlashcardsSuccess,
  getFlashcardsFailure,
  updateFlashcardSuccess,
  updateFlashcardFailure
}
