// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app'

import { getAnalytics } from 'firebase/analytics'

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyA7cSUP7QjTwSuoXRQA8x3-xVg369RmskU',
  authDomain: 'janmichek-4e7de.firebaseapp.com',
  databaseURL: 'https://janmichek-4e7de.firebaseio.com',
  projectId: 'janmichek-4e7de',
  storageBucket: 'janmichek-4e7de.firebasestorage.app',
  messagingSenderId: '478725404100',
  appId: '1:478725404100:web:ff57825fce289b365b2091',
  measurementId: 'G-NDPRQR7R6M',
}

// Initialize Firebase

const app = initializeApp(firebaseConfig)

const analytics = getAnalytics(app)
