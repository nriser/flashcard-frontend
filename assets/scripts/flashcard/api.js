'use strict'

const config = require('../config.js')
const store = require('../store.js')

const createFlashcard = function (data) {
  console.log('at create flashcard, data is', data)
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

// const updateFlashcard = function (index, value, over) {
//   return $.ajax({
//     method: 'PATCH',
//     url: config.apiOrigin + '/flashcards/' + store.game.id,
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: {
//       'game': {
//         'cell': {
//           'index': index,
//           'value': value
//         },
//         'over': over
//       }
//     }
//   })
// }
//

module.exports = {
  createFlashcard,
  getFlashcard,
  getFlashcards
  // updateFlashcard,
}
