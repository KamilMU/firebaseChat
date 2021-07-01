import firebase from 'firebase/app';

export function getServerTime() {
  return firebase.firestore.FieldValue.serverTimestamp();
}