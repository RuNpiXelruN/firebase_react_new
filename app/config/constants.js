import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyB-8ReQb_IySRh3pdIZ77ABwZcxsgegA-Q",
  authDomain: "react-slack-3af45.firebaseapp.com",
  databaseURL: "https://react-slack-3af45.firebaseio.com",
  storageBucket: "react-slack-3af45.appspot.com",
  messagingSenderId: "771024775191"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth

export const usersDucksExpirationLength = 100000
export const userExpirationLength = 100000
export const repliesExpirationLength = 300000
