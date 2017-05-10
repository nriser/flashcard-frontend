'use strict'

const flashcardapi = require('../flashcard/api')
const flashcardui = require('../flashcard/ui')

const store = require('../store.js')
// const showFlashcardsTemplate = require('../templates/flashcard-listing.handlebars')

const signUpSuccess = (response) => { // argument can be (response) or something too. Just an argument name
  console.log(response)
  $('#modal-signup').modal('hide')
  $('.header').hide()
  // $('#update-flashcard').hide()
  $('.flashcard-container').fadeIn()
  $('.flashcard-container-header').show()
  $('footer').fadeIn()
  $('#view-all').fadeIn()
  // clear form input text upon sign in
  document.getElementById('sign-up').reset()
  // if no cards, show below status message
  // if ($('.card-response').children().length === 0) {
  //   $('#content-status-message').text('You have no cards. Create a new card.')
  // }

  store.user = response.user // response.user is the email id and token // stores whatever that was in that response
  // $('.content-status-message').text('Create a new game to play!')

  // event.preventDefault() // don't use this or else won't work
  flashcardapi.getFlashcards()
    .then(flashcardui.getFlashcardsSuccess)
    .catch(flashcardui.getFlashcardsFailure)
}

const signUpFailure = () => {
  $('.status-message').text('Either email already exists or the passwords did not match. Please try again.')
}

const signInSuccess = (response) => { // argument can be (response) or something too. Just an argument name
  console.log(response)
  $('#modal-signin').modal('hide')
  $('.header').hide()
  // $('#update-flashcard').hide()
  $('.flashcard-container').fadeIn()
  $('.flashcard-container-header').show()
  $('footer').fadeIn()
  $('#view-all').fadeIn()
  console.log('children length is', $('.card-response').children().length)
  // clear form input text upon sign in
  document.getElementById('sign-in').reset()
  // if ($('.card-response').children().length === 0) {
  //   alert('am i here')
  //   $('#content-status-message').text('You have no cards. Create a new card.')
  // }
  // In case someone clicks 'back' in browser while siebar still open, then goes forward again to the page, and signs in.
  if ($('input[name=hamburger-menu').is(':checked')) {
    $('input[name=hamburger-menu]').click()
  }

  store.user = response.user // response.user is the email id and token // stores whatever that was in that response
  // $('.content-status-message').text('Create a new game to play!')

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
  $('.change-pw-status-message').text('Password changed successfully.')
}

const changePasswordFailure = () => {
  $('.change-pw-status-message').text('Incorrect password. Please try again.')
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
