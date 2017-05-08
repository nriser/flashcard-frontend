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
  $('.card-front-text').val('')
  $('.card-back-text').val('')
}

const createFlashcardFailure = () => {
  console.log('Something went wrong')
  $('#delete-flashcard').empty()
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
  // $('.delete-flashcard').on('click', onDeleteFlashcard)
  // alert('getFlashcardsSuccess')
  console.log('response is', response)
  store.flashcard = response.flashcard // store the flashcard object in user object (store)
  console.log('store is ', store)
  // console.log('store.flashcard is ', store.flashcard)
  const showFlashcardsHtml = showFlashcardsTemplate({ flashcards: response.flashcards })
  $('#view-all').html('') // remove previous results on the page that have been populated using handlebars to avoid redundant content
  $('#view-all').append(showFlashcardsHtml) // first spot in which the elelments are appended to the dom.

  // $('#delete-flashcard').on('click', cardevent.onDeleteFlashcard)
  $('.delete-flashcard').on('click', onDeleteFlashcard)
  // $('.delete-flashcard').off('click')
  // alert('after append in getFlashcardsSuccess')
  // $('.update-flashcard').show()
  // $('.flashcard-container-header').show()
  // $('footer').show()
  $('#content-status-message').text('View Cards')
  $('#view-all').fadeIn()
  $('.content').hide()
}

const onDeleteFlashcard = function (event) {
  event.preventDefault()
  // console.log('event in onDeleteFlashcard is', event)
  // console.log('event.target in onDeleteFlashcard is ', event.target)
  // console.log($(event.target).data('id'))
  // const data = $(event.target).parent().data('id', '{{flashcard.id}}')
  createDataObject($(event.target).data('id'))
  $(event.target).parent().fadeOut()
  $(event.target).disabled = true
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

const getFlashcardsFailure = () => {
  console.log('Something went wrong')
}

const updateFlashcardSuccess = (response) => {
  console.log('response is', response)
  $('#content-status-message').text('Card updated successfully')
}

const updateFlashcardFailure = () => {
  console.log('something went wrong with the udpate')
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
  deleteFlashcardFailure,
  onDeleteFlashcard
}
