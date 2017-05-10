'use strict'

const config = require('../config.js')
const store = require('../store.js')

// CREATE
const createFlashcard = function (data) {
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
