'use strict'

const config = require('../config.js')
const store = require('../store.js')

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

const getFlashcard = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiOrigin + '/flashcards/' + data.flashcard.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getFlashcards = function () {
  console.log(`getFlashcards()`)
  return $.ajax({
    method: 'GET',
    url: config.apiOrigin + '/flashcards/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

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

const deleteFlashcard = function (data) {
  console.log('at delete flashcard, data is', data)
  console.log('at delete flashcard, data flashcard id is', data.flashcard.id)
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
  getFlashcard,
  getFlashcards,
  updateFlashcard,
  deleteFlashcard
}
