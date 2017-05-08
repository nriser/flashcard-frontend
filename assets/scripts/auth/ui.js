'use strict'

const flashcardapi = require('../flashcard/api')
const flashcardui = require('../flashcard/ui')

const store = require('../store.js')
const showFlashcardsTemplate = require('../templates/flashcard-listing.handlebars')

const signUpSuccess = (response) => { // argument can be (response) or something too. Just an argument name
  console.log(response)
  $('#modal-signup').modal('hide')
  $('.header').hide()
  // $('#update-flashcard').hide()
  $('.flashcard-container').fadeIn()
  $('.flashcard-container-header').show()
  $('footer').fadeIn()
  $('#view-all').fadeIn()

  store.user = response.user // response.user is the email id and token // stores whatever that was in that response
  $('.status-message').text('You have successfully signed in! Create a new game to play!')

  // event.preventDefault() // don't use this or else won't work
  flashcardapi.getFlashcards()
    .then(flashcardui.getFlashcardsSuccess)
    .catch(flashcardui.getFlashcardsFailure)
}

const signUpFailure = () => {
  $('.status-message').text('Either email already exists or the passwords did not match. Please try again.')
}

const signInSuccess = (response) => { // argument can be (response) or something too. Just an argument name
  // because i know that i'll need that token again later, i'll store it somewhere
  console.log(response)
  $('#modal-signin').modal('hide')
  $('.header').hide()
  // $('#update-flashcard').hide()
  $('.flashcard-container').fadeIn()
  $('.flashcard-container-header').show()
  $('footer').fadeIn()
  $('#view-all').fadeIn()

  store.user = response.user // response.user is the email id and token // stores whatever that was in that response
  $('.status-message').text('You have successfully signed in! Create a new game to play!')

  // event.preventDefault() // don't use this or else won't work
  flashcardapi.getFlashcards()
    .then(flashcardui.getFlashcardsSuccess)
    .catch(flashcardui.getFlashcardsFailure)
}

const signInFailure = () => {
  $('.status-message').text('Wrong username and or password.')
}

const changePasswordSuccess = (response) => {
  console.log(response)
  $('.status-message').text('You have succesfully changed your password!')
}

const changePasswordFailure = () => {
  $('.status-message').text('Incorrect password. Please try again.')
}

const signOutSuccess = () => {
  // $('.status-message').text('You have successfully signed out!')
  $('.header').fadeIn()
  $('.flashcard-container').hide()
  $('.flashcard-container-header').hide()
  $('footer').hide()
  $('#view-all').hide()

  if ($('input[name=hamburger-menu').is(':checked')) {
    $('input[name=hamburger-menu]').click()
  }

  store.user = null // only have one person signed in in a givne session, one browser
}

const signOutFailure = () => {
  $('.status-message').text('Something went wrong. Please try again.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
