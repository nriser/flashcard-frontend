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

//    data: {}
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
// const getFlashcards = function () {
//   return $.ajax({
//     method: 'GET',
//     url: config.apiOrigin + '/flashcards/',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
//
// const getFlashcard = function (data) {
//   return $.ajax({
//     method: 'GET',
//     url: config.apiOrigin + '/flashcards/' + data.game.id,
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

module.exports = {
  createFlashcard
  // updateFlashcard,
  // getFlashcards,
  // getFlashcard
}
