'use strict'

const config = require('../config.js')
const store = require('../store.js')

// CREATE
const createFlashcard = function (data) {
  console.log('at create flashcard, data is', data)
  console.log('at create flashcard, store is', store)
  return $.ajax({
    method: 'POST',
    url: config.apiOrigin + '/flashcards/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// // GET
// const getFlashcard = function (data) {
//   // debugger
//   return $.ajax({
//     method: 'GET',
//     url: config.apiOrigin + '/flashcards/' + data.flashcard.id,
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

// GET
const getFlashcards = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiOrigin + '/flashcards/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// PATCH
const updateFlashcard = function (data) {
  console.log('at update flashcard, data is', data)
  console.log('at update flashcard, data flashcard id is', data.flashcard.id)
  return $.ajax({
    method: 'PATCH',
    url: config.apiOrigin + '/flashcards/' + data.flashcard.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// DELETE
const deleteFlashcard = function (data) {
  console.log('at api/deleteFlashcard, data is', data)
  console.log('at api/deleteFlashcard, data flashcard id is', data.flashcard.id)
  return $.ajax({
    method: 'DELETE',
    url: config.apiOrigin + '/flashcards/' + data.flashcard.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createFlashcard,
  // getFlashcard,
  getFlashcards,
  updateFlashcard,
  deleteFlashcard
}
