import { db } from '../services/firebase.js';

export const Collections = {
  Messages: "messages"
};

export class FirebaseRepository {
  constructor(collection) {
    this.collection = db.collection(collection);
  }

  subscribe = (fn) => {
    this.collection.orderBy("createdAt").onSnapshot(fn);
  }

  set = (obj) => {
    this.collection.add(obj);
  }
}