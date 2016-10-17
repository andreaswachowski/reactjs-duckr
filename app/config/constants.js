import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBN0ugTo4IICdLf2m7d-bm_IaTMLOTXPL4',
  authDomain: 'reactjs-duckr-20f11.firebaseapp.com',
  databaseURL: 'https://reactjs-duckr-20f11.firebaseio.com',
  storageBucket: 'reactjs-duckr-20f11.appspot.com',
  messagingSenderId: '874815677509'
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;

export const usersDucksExpirationLength = 100000; // 10 minutes
export const usersExpirationLength = 100000;
export const repliesExpirationLength = 300000;
