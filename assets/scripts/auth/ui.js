'use strict'

const store = require('../store.js')

// $('.status-message').show()

const signUpSuccess = (response) => { // argument can be (response) or something too. Just an argument name
  $('#sign-up').hide()
  $('#sign-in').fadeIn()
  $('.status-message').text('You have successfully signed up! Please sign in.')
}

const signUpFailure = (error) => {
  $('.status-message').text('Either email already exists or the passwords did not match. Please try again.')
}

const signInSuccess = (response) => { // argument can be (response) or something too. Just an argument name
  // because i know that i'll need that token again later, i'll store it somewhere
  $('#change-password').fadeIn()
  $('#create-game').fadeIn()
  $('#sign-out').fadeIn()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#get-game').fadeIn()
  $('#get-games').fadeIn()


  store.user = response.user // response.user is the email id and token // stores whatever that was in that response
  $('.status-message').text('You have successfully signed in! Create a new game to play!')
}

const signInFailure = (error) => {
  $('.status-message').text('Wrong username and or password.')
}

const changePasswordSuccess = (response) => {
  $('.status-message').text('You have succesfully changed your password!')
}

const changePasswordFailure = (error) => {
  $('.status-message').text('Incorrect password. Please try again.')
}

const signOutSuccess = () => {
  $('.status-message').text('You have successfully signed out!')
  $('#change-password').hide()
  $('#create-game').hide()
  $('#sign-out').hide()
  $('#sign-in').fadeIn()
  $('#sign-up').fadeIn()
  $('#get-games').hide()
  $('#get-game').hide()
  $('#show-games-container').hide()
  $('#show-game-container').hide()
  $('#board').hide()
  store.user = null // only have one person signed in in a givne session, one browser
}

const signOutFailure = (error) => {
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
