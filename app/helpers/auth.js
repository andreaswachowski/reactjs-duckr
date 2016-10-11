import firebase from 'firebase';
import {ref, firebaseAuth} from 'config/constants';

export default function auth () {
  return firebaseAuth().signInWithPopup(new firebase.auth.FacebookAuthProvider());
}

export function checkIfAuthed (store) {
  // TODO: Add Firebase-check
  return store.getState().users.isAuthed;
}

export function logout () {
  return firebaseAuth().signOut();
}

export function saveUser (user) {
  return ref.child(`users/${user.uid}`)
    .set(user) // save user to the location users/${user.uid}
    .then(() => user); // return the user object passed in, to facilitate chaining
}
