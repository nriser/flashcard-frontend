'use strict'
// remove signIn and signOut
const store = require('../store.js')

const createFlashcardSuccess = (response) => {
  store.flashcard = response.flashcard
  // $('#show-game-container').hide()
  // $('#show-games-container').hide()
  // // $('#show-game-container').css('visibility', 'hidden')
  // // $('#show-games-container').css('visibility', 'hidden')
  // $('.status-message').text('You are playing TicTacToe with Game ID: ' + store.game.id)
  // $('#board').fadeIn()
  // $('#board').css('visibility', 'visible')
}

const createFlashcardFailure = () => {
  // $('.status-message').text('Please sign in first.')
}

const getFlashcardSuccess = (response) => {
  console.log('response is', response)
  store.flashcard = response.flashcard
}

const getFlashcardFailure = () => {
  // $('#show-game-container').fadeIn()
  // $('#show-game-container').css('visibility', 'visible')
  // $('#show-game-container').text('Please provide a valid ID for a previously played game.')
}

const getFlashcardsSuccess = (response) => {
  console.log('response is', response)
  store.flashcard = response.flashcard // store the game object
}

const getFlashcardsFailure = () => {
}

module.exports = {
  createFlashcardSuccess,
  createFlashcardFailure,
  getFlashcardSuccess,
  getFlashcardFailure,
  // updateFlashcardSuccess,
  getFlashcardsSuccess,
  getFlashcardsFailure
}
